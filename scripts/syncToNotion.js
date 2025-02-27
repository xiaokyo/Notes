require('dotenv').config();
const { Client } = require('@notionhq/client');
const fs = require('fs').promises;
const path = require('path');
const matter = require('gray-matter');
const { markdownToBlocks } = require('@tryfabric/martian');

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

async function findMarkdownFiles(dir) {
  const files = await fs.readdir(dir);
  let markdowns = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);

    if (stat.isDirectory() && file !== 'node_modules') {
      const subFiles = await findMarkdownFiles(filePath);
      markdowns = [...markdowns, ...subFiles];
    } else if (file.endsWith('.md') && 
               file !== '_sidebar.md' && 
               file !== 'README.md') {
      markdowns.push(filePath);
    }
  }

  return markdowns;
}

async function findExistingPage(title) {
  try {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      filter: {
        property: 'Name',
        title: {
          equals: title
        }
      }
    });
    return response.results[0]?.id;
  } catch (error) {
    console.error('Error finding page:', error);
    return null;
  }
}

async function updateNotionPage(pageId, title, contentWithoutTitle, folderName) {
  try {
    // 使用 martian 转换 markdown
    const blocks = await markdownToBlocks(contentWithoutTitle);

    const response = await notion.pages.update({
      page_id: pageId,
      properties: {
        Name: {
          title: [{ text: { content: title } }]
        },
        Tags: {
          multi_select: [{ name: folderName }]
        }
      },
      children: blocks
    });
    console.log(`Updated existing page: ${title}`);
    return response;
  } catch (error) {
    console.error(`Failed to update ${title}:`, error.message);
  }
}

async function createNotionPage(filePath, content) {
  const { data: frontMatter, content: markdownContent } = matter(content);
  
  const lines = markdownContent.split('\n');
  const title = lines[0].replace(/^#+\s*/, '').trim() || path.basename(filePath, '.md');
  const contentWithoutTitle = lines.slice(1).join('\n').trim();
  const folderName = path.basename(path.dirname(filePath));
  
  try {
    const existingPageId = await findExistingPage(title);
    
    if (existingPageId) {
      return await updateNotionPage(existingPageId, title, contentWithoutTitle, folderName);
    }
    
    // 使用 martian 转换 markdown
    const blocks = await markdownToBlocks(contentWithoutTitle);

    const response = await notion.pages.create({
      parent: { database_id: NOTION_DATABASE_ID },
      properties: {
        Name: {
          title: [{ text: { content: title } }]
        },
        Tags: {
          multi_select: [
            {
              name: folderName
            }
          ]
        }
      },
      children: blocks
    });
    console.log(`Created new page: ${title} with tag: ${folderName}`);
    return response;
  } catch (error) {
    console.error(`Failed to process ${title}:`, error.message);
  }
}

async function retry(fn, retries = 3) {
  let lastError;
  
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      console.error(`Attempt ${i + 1} failed:`, error.message);
      if (i < retries - 1) await new Promise(r => setTimeout(r, 1000 * (i + 1))); // 递增延迟
    }
  }
  
  throw lastError;
}

async function processSingleFile(file) {
  const content = await fs.readFile(file, 'utf-8');
  return retry(() => createNotionPage(file, content));
}

async function processInBatches(files, batchSize = 3) {
  const results = [];
  for (let i = 0; i < files.length; i += batchSize) {
    const batch = files.slice(i, i + batchSize);
    const batchResults = await Promise.all(
      batch.map(file => processSingleFile(file)
        .catch(error => {
          console.error(`Failed to process ${file}:`, error);
          return null;
        })
      )
    );
    results.push(...batchResults.filter(Boolean));
  }
  return results;
}

async function main() {
  try {
    const rootDir = path.resolve(__dirname, '..');
    const markdownFiles = await findMarkdownFiles(rootDir);
    
    await processInBatches(markdownFiles);
    
    console.log('Sync completed!');
  } catch (error) {
    console.error('Sync failed:', error);
  }
}

main();
