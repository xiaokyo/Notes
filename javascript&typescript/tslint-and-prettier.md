# 使用 tslint 和 prettier 优雅的格式化及检测你的代码

### 安装插件

```cmd
yarn add tslint prettier tslint-config-prettier -D
// or
npm install --save-dev tslint prettier tslint-config-prettier
```

### 插件功能

- tslint: 用来检查你的文件代码格式
- prettier: 用来格式化你的文件
- tslint-config-prettier: 因为 prettier 格式化后的有些规则会导致 tslint 报错，这个插件起到中和作用

### tslint.json

```json
{
  "defaultSeverity": "error",
  "extends": ["tslint-config-standard", "tslint-config-prettier"], // 插件
  "jsRules": {},
  "rules": {
    // 每一行末尾不使用分号
    "semicolon": false,
    // 使用单引号
    "quotemark": false,
    // 不用强制在 function的左括号之前使用一致的空格
    "space-before-function-paren": false,
    // 尾随逗号
    "trailing-comma": false,
    // 是否必须正确处理promise的返回
    "no-floating-promises": false,
    "await-promise": true,
    // 声明的弃用函数被使用
    "deprecation": true,
    // 不必要的修饰符
    "no-unnecessary-qualifier": true
  },
  // 检查的文件目录
  "rulesDirectory": ["web"],
  "linterOptions": {
    "exclude": ["web/**/{*.d,type}.ts"]
  }
}
```

### .prettierrc

```json
{
  "singleQuote": true, // 单引号
  "trailingComma": "all", // 尾随逗号
  "printWidth": 120, // 换行的要求字数
  "tabWidth": 2, // tab的空格
  "semi": false, // 不使用分号
  "overrides": [
    {
      "files": ".prettierrc",
      "options": { "parser": "json" }
    }
  ]
}
```

### 然后使用[husky](/git/precommit-lint.md)

package.json

```json
"scripts":{
    "prettier": "prettier --write ./web/**/*.{js,jsx,tsx,ts,less,md,json}",
    "lint": "tslint-config-prettier-check ./tslint.json",
    "precommit": "npm run prettier && git add . && npm run lint"
},
"husky": {
    "hooks": {
        "pre-commit": "npm run precommit"
    }
},
```
