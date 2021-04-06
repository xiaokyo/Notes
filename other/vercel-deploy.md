# vercel 部署一个博客项目

### 为什么要用[vercel](https://vercel.com)

1.国内打开速度比github pages要快

2.自动生成https免费证书

3.自动部署（你在vercel关联的github仓库master分支有push的时候，会进行自动部署）

### 开始使用
新建index.html
```html
<!DOCTYPE html>
<html>

<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta charset="UTF-8">
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@4.11.4/themes/vue.css">
</head>

<body>
  <div data-app id="app">Please wait...</div>
  <script>
    window.$docsify = {
      el: '#app',
      loadSidebar: true, // 是否有侧边菜单栏
      // complete configuration parameters
      search: {
        maxAge: 86400000, // Expiration time, the default one day
        paths: 'auto', // or 'auto'
        placeholder: 'Type to search',
        noData: 'No Results!',
        // Headline depth, 1 - 6
        depth: 2,
        hideOtherSidebarContent: false, // whether or not to hide other sidebar content
        // To avoid search index collision
        // between multiple websites under the same domain
        namespace: 'my-website',
        // Use different indexes for path prefixes (namespaces).
        // NOTE: Only works in 'auto' mode.
        //
        // When initialiazing an index, we look for the first path from the sidebar.
        // If it matches the prefix from the list, we switch to the corresponding index.
        pathNamespaces: ['/zh-cn', '/ru-ru', '/ru-ru/v1'],

        // You can provide a regexp to match prefixes. In this case,
        // the matching substring will be used to identify the index
        pathNamespaces: /^(\/(zh-cn|ru-ru))?(\/(v1|v2))?/
      }
    }
  </script>
  <script src="//cdn.jsdelivr.net/npm/docsify@4.11.4"></script>
  <script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/search.min.js"></script>
  <script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/emoji.min.js"></script>
</body>

</html>
```

### 新建```_sidebar.md```用来存放菜单
```md
- 我的第一个菜单 

  - [首页](README.md) 
```
或者你可以参考[自动生成_sidebar.md文档](/javascript&typescript/node-gen-doc-sidebar.md)自动生成_sidebar

### 新建```README.md```用来当首页面
```md
# 欢迎来到xiaok的博客

### 说明
此文档记录一些经常碰到或者记不住的问题及解决方案
```