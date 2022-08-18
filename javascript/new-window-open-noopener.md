## 新开窗口的问题总结

- ```target="_blank"```和```window.open```会和新开页面共用opener对象, 可以访问上一级页面的dom节点
- 同时上面两个方式打开的页面会影响父页面的js线程, 如果父页面有定时器, 切定时器还会阻塞新页面, 如果页面逻辑较多会卡死

#### 解决方案

使用```noopener```属性

```html
<a href="" rel="noopener"></a>
```

```javascript
window.open(url, "_blank", "noopener")
```

