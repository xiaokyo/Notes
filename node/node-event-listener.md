# node事件机制

### 创建一个事件

```javascript
//引入事件模块
const events = require('events');
 //实例化事件监听
const eventEmitter = new events.EventEmitter();
```

### 监听事件

- on - 监听事件

```javascript
eventEmitter.on('test',(name)=>{
   console.log('test2 触发'+name);
});
```

- addListener - 添加事件数组尾部

```javascript
eventEmitter.addListener('test', () => {
  console.log('test1 触发');
});
```

- once - 触发单次监听

```javascript
eventEmitter.once('onceEvent',(count)=>{
   console.log('单次点击触发，二次将不存在'+count);
});
```

### 触发事件

```javascript
eventEmitter.emit('test', '1')
```

### 事件监听的数组

```javascript
var listenArry = eventEmitter.listeners('test');
console.log(listenArry.length);
```

### 事件监听的数量

```javascript
var count = eventEmitter.listenerCount('test');
console.log(count);
```

### 删除事件注册

```javascript
function callback(arg){
  console.log("test5触发"+arg+'\n');
 }
eventEmitter.addListener('test', callback)
eventEmitter.removeListener('test', callback)
```

### 删除所有事件监听

```javascript
eventEmitter.removeAllListeners('test') // 删除所有test的事件
eventEmitter.removeAllListeners() // 删除所有, 没错, 所有
```

