# vue2.x加载异步组件

### 使用

```javascript
const AsyncComponent = () => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import('app2/FederationTop'),
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
```

### 渲染

```javascript
new Vue({
	el: "#app",
	components: {
		'async-component': AsyncComponent
	},
	template: '<async-component/>'
})
```

