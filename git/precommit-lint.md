# 提交前检查precommit husky

### 安装[husky](https://www.npmjs.com/package/husky)
```cmd
yarn add husky -D
```

### 在package.json中添加git commit -m之前的命令
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "npm test",
      "pre-push": "npm test",
    }
  }
}
```