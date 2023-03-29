## Vue2.x强制渲染操作

#### vm.list直接修改

会直接更新视图操作

```javascript
const vm = new Vue({
  data: {
    list: []
  }
})

vm.list = [].concat([], [1, 2, 3])
```

#### 官网文档

https://vuejs.bootcss.com/guide/reactivity.html#%E5%AF%B9%E4%BA%8E%E6%95%B0%E7%BB%84