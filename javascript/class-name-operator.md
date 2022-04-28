# className 的原生操作

### 先获取元素节点

```javascript
const elem = document.querySelector("#box");
```

### 添加类名

```javascript
elem.classList.add("firstClass");

// 多个
elem.classList.add("firstClass", "secondClass", "thirdClass");
```

### 删除类名

```javascript
elem.classList.remove("firstClass");
```

### 判断是否有类名

```javascript
elem.classList.contains("firstClass");
```
