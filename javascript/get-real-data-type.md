# 精准获取数据类型

### 为什么不用typeof

```js
typeof 1 // 'number'
typeof '1' // 'string'
typeof function(){} // 'function'
typeof null // 'object'
typeof undefined // 'undefined'
typeof NaN // 'number'
typeof Infinity // 'number'
typeof 1.2 // 'number'
typeof Symbol('1') // symbol
typeof new Date() // 'object'
```

可以看出来一个问题, typeof是不支持判断类似引用类型的数据类型的, 比如对象, 时间, 数组

### 为什么不用instanceof

```javascript
new Date() instanceof Date // true
new Object() instanceof Object // true
new Array() instanceof Array // true

var a = function(){}
a instanceof Function // true

var el = document.createElement('div')
el instanceof Element // true
document instanceof HTMLDocument // true
new RegExp() instanceof RegExp // true
window instanceof Window // true
new Error() instanceof Error // true
new Error() instanceof Object // true
```

可以看出来, 这些类型都是可以判断成Object的, 不够精准

### 使用toString

可以使用toString精准获取数据类型

```javascript
function getType (obj) {
  const type = typeof obj
  if (type !== 'object') { // 先进行typeof判断，如果是基础数据类型，直接返回
    return type
  }
  // 如果是引用类型，再进行如下的判断，正则返回结果
  return Object.prototype.toString
    .call(obj)
    .replace(/^\[object (\S+)\]$/, '$1')
    .toLocaleLowerCase()
}
```

