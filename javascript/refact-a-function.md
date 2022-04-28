# 如何重写一个函数

代码示例

```javascript
function a(){
	console.log('a')
}

a = (function(a){
  return function(){
    console.log('i am refact after')
    a.apply(this, arguments)
  }
})(a)
```

