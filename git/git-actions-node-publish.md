# github自动化发布npm包

### 新建仓库

不会吧不会吧, 新建不会还要教吧.

### 新建```index.js```

```javascript
#!/usr/bin/env node
console.log('this is my npm package')
```

> 如果是node脚本, 第一行必需写

### 新建```package.json```

```bash
npm init
```

然后在package.json中的```main```字段填入

```javascript
{
	"main":"index.js"
}
```

不过自动生成就是这样的, 查看一下是否对应你的index.js即可

### 新建NPM_TOKEN

1. 去npm官网
2. 登录
3. 点击自己的头像
4. 点击**Access Tokens**
5. 然后生成一个publish属性的复制过来

> 注意, token只有生成时会显示, 及时保存

### 配置NPM_TOKEN

> 必须是自己的仓库哈

然后在上面新建的仓库首页依次点击```Settings->Secrets->New respository secret```

名字填```NPM_TOKEN```

### 编写yml

上面的配置做的一直的话, 下面代码可完整复制过去

```yaml
# This workflow will do a clean install of node dependencies, cache/restore them, build the source code and run tests across different versions of node
# For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions

name: Node.js CI

on:
  workflow_dispatch: 
  push:
#     branches: [ master ]
    tags: []

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [16.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v2
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
        registry-url: 'https://registry.npmjs.org'
    - run: npm install
    - run: npm publish
      env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

这样就是正常的打tag即可以自动发布了

### 贴个例子

https://github.com/xiaokyo/rkyo-cli/blob/master/.github/workflows/npm-publish.yml