# 两分钟理解jsconfig文件

### jsconfig.json文件

默认情况下，vscode在不添加`jsconfig.json`这个文件时也会给我们带来以下开发体验

- IntelliSense (智能提示)
- Snippets(代码片段)
- Debug(调试)
- Format(格式化)
- Validate(校验)

但是在以下场景中，我们就需要jsconfig.json文件了

1. vscode一个Workspace中打开了多个工程项目（默认都是js项目），比如前端和后端项目代码，intelliSence隔离

2. 引入别名

   ```javascript
   // bad
   import '../../lib/utils.js'
   
   // good
   import 'lib/utils.js'
   ```

实现工程隔离，对应项目中都添加jsconfig.json文件即可

### 别名配置

需要对应webpack或者其他打包工具的别名使用

```json
{
  "compilerOptions":{
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  }
}
```

### 限制有效目录

在目录里的代码才会互相引入时提示

只需在jsconfig.json中添加配置`"include":["src/**/*.js"]`

### 限制ES版本

```json
{
	"compilerOptions":{
		"target":"es2018", // es6 es2015 es2016
	}
}
```