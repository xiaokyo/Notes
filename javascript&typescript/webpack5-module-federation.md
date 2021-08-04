# 了解Module Federation

### 什么是module federation

在```webpack5```中新增的```module federation```功能, 是可以将模块动态引入的一种功能

即A模块, 在线上一个项目中一个地方用到了, 但是产品经理说, 那个A模块也要出现在我们的另一个项目中

这样的话```module federation```的优势就出来了, 不过前提需要升级至```webpack5```

### 有什么优点

1. 每个页面单独打包部署

2. 远程引用模块(引入到包发生变化线上会及时更新)

3. 页面中公用的提取出来放置一个公共库里部署, 部署完全隔离

   之前无论是复制源码还是上传到npm都会在每个项目中重新打包一次

### 使用ModuleFederationPlugin

1. 引入插件

```javascript
const { ModuleFederationPlugin } = require('webpack').container;
```

2. 使用插件

```javascript
new ModuleFederationPlugin({
  name: "app2", // 项目名
  filename: "remoteEntry.js", // 引用文件, 一般部署位置不一样, 文件名一样也没事
  // 暴露新闻列表组件
  exposes: {
    "./NewsList": "./src/NewsList", // 暴露后的模块可以在其他项目引入
  },
  // 引用 app1 的服务
  remotes: {
    // app1的服务, 这样就可以引入app1 exposes的模块 例: app1/NewsList
    app1: "app1@http://localhost:3001/remoteEntry.js", 
    // 可以引入多个模块
  },
  // 共享依赖打包
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true }
  }
})
```

### 使用后的弊端

1. 必须使用webpack5

2. 只能异步加载

3. 如果多技术栈的互相调用, 渲染包还是需要对应的包去渲染相应的技术栈, 这样要引入vue, 又要引入react库

   比如, vue中用react其实,还是用react-dom来渲染 (不过这貌似没什么好办法, 有什么好办法的可以告诉我一下)

### 遇到的例子

> 你导出的组件在react项目中有调用redux的方法, 然后在一个没有react的页面级组件里使用react-dom渲染调用这个组件, redux其实就是无效的, 并不能生效, 所以里面也不该用redux这种全局状态管理, 只能进行props的传值来赋值, 这样相当于一个完全封闭的组件, 并不适用很多场景

> 还有一种情况, 纯react调用和导出的情况, 使用redux的话也不靠谱, 这样两个项目的redux构造必须一模一样, 这种强藕连, 其实也就违背了单业务组件的初衷了

### 个人觉得适用的场景

1. 没有相互的影响的两个业务组件

2. 或者一整个页面组件

3. 相同技术栈做基础组件放入服务器, 多个地方引用 (类似antd的包组件) (异步不适用基础组件)

   可以将antd的组件全部放入自己服务器, 然后用module federation来打包导出, 然后在自己的项目中就完全隔离antd, 不过也是异步加载的, 其实不是很理想这个

### vue异步加载组件

```javascript
import Loading from '../vue/loading.vue'
import LoadErr from '../vue/errLoad.vue'

const AsyncComponent = () => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import('app2/CommonTop'),
  // 异步组件加载时使用的组件
  loading: Loading,
  // 加载失败时使用的组件
  error: LoadErr,
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 200,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 3000
})

new Vue({
  el:"#vue-federation-common-top",
  components: {
    "federation-top": AsyncComponent
  },
  template: `<federation-top/>`
})
```

### angular1.x需要依赖ocLazyload

利用ocLazyload加载异步模块

模块中就可以直接同步引入远程模块

```javascript
import Card from '@remote/Card'
```
