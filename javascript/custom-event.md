# 关于自定义事件

### 如何创建事件

```javascript
let myEvent = new CustomEvent(typeArg, eventInit);
```

typeArg - 事件的名称

eventInit - 初始化属性:

<img src="https://ipic.xiaokyo.com/2021-08-28-132852.png" alt="image-20210828212851827" style="zoom:50%;" />

### 派发事件(触发事件)

```javascript
window.dispatchEvent(myEvent);
```

### 事件接受

```javascript
window.addEventlistener(typeArg, e => {})
```

### 演示示例

```javascript
// 创建事件
let myEvent = new CustomEvent("pingan", {
  detail: { name: "wangpingan" }
});

// 添加适当的事件监听器
window.addEventListener("pingan", e => {
  alert(`pingan事件触发，是 ${e.detail.name} 触发。`);
});
document.getElementById("leo2").addEventListener(
  "click", function () {
    // 派发事件
    window.dispatchEvent(myEvent);
  }
)
```

