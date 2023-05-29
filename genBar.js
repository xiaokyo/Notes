const fs = require("fs")
const path = require('path')
const readLine = require('readline')
const https = require('https')

/** 运行目录 */
const cwd = process.cwd()

/** 读取文件夹 */
function readDirs() {
    const dirs = fs.readdirSync(path.resolve(cwd, '.'), { encoding: "utf-8" })
    // console.log("文件夹", dirs)
    return dirs.filter(_ => _.indexOf('.') == -1) // 没有点的就是文件夹
}

/** 读取单个文件的第一行 */
async function readFileLine(filePath) {
    return new Promise((resolve, reject) => {
        var arr = [];
        var readObj = readLine.createInterface({
            input: fs.createReadStream(filePath)
        });

        readObj.on('line', function (line) {
            arr.push(line)
        })

        readObj.on('close', function () {
            resolve(arr[0])
        })

    })
}

const dirs = readDirs();

(async () => {
    let temp = ``;
    for (let i = 0; i < dirs.length; i++) {
        // 类型标题
        const oneTitle = dirs[i].toString()
        console.log('%cgenBar.js line:42 oneTitle', 'color: #007acc;', oneTitle);
        if (oneTitle.indexOf('public') > -1) continue // 说明是静态文件目录
        const files = fs.readdirSync(path.resolve(cwd, oneTitle), { encoding: "utf-8" })
        temp += `- ${oneTitle} \r\n\r\n`;

        for (let j = 0; j < files.length; j++) {
            const filePath = files[j];
            // 文件名
            const url = oneTitle + '/' + filePath;
            const title = await readFileLine(path.resolve(cwd, oneTitle + '/' + filePath))
            temp += `  - [${title.replace(/#/g, '').trim()}](${url}) \r\n`
        }

        temp += `\r\n`
    }

    fs.writeFileSync(path.resolve(cwd, '_sidebar.md'), temp, { encoding: "utf-8" })

    const options = {
        hostname: 'notice.xiaokyo.com',
        port: 443,
        path: `/enterprise/sendText?secret=1d269784-1f24-4e0c-8396-c5a1a90da001&content=${encodeURIComponent('文档更新成功了~')}`,
        method: 'GET'
    };

    const req = https.request(options)
    req.end();
})()