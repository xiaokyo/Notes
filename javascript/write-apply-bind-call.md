## 手写apply/call/bind函数

#### apply

- 第一个参数是context上下文
- 第二个参数是数组的传参

```javascript
Function.prototype.myApply = function(thisArg, args) {
  if (thisArg === null || thisArg === undefined) {
    // 指向window
    thisArg = window
  } else {
    thisArg = Object(thisArg) // 原始值 (数字, 字符串, 布尔)的 this指向原始值的实例对象, 比如 Number, String, Boolean
  }
  
  // javascript 权威指南判断是否为类数组对象
  function isArrayLike(o) {
    if (o &&                                    // o不是null、undefined等
            typeof o === 'object' &&                // o是对象
            isFinite(o.length) &&                   // o.length是有限数值
            o.length >= 0 &&                        // o.length为非负值
            o.length === Math.floor(o.length) &&    // o.length是整数
            o.length < 4294967296)                  // o.length < 2^32
            return true
        else
            return false
  }
  
  const specialPrototype = Symbol("特殊属性Symbol") // 临时储存函数
  context[specialPrototype] = this // 放入指定对象改变this指向
  let result
  
  if (args) {
    if (!Array.isArray(args) && !isArrayLike(args)) {
      throw new TypeError('myApply 第二个参数不为数组并且不为类数组对象抛出错误')
    } else {
      args = Array.from(args) // 转为数组
      result = context[specialPrototype](...args)
    }
  } else {
    result = context[specialPrototype](...args)
  }
  delete context[specialPrototype]
  return result
}
```

#### call

```javascript
Function.prototype.myCall = function (context, ...arr) {
    if (context === null || context === undefined) {
       // 指定为 null 和 undefined 的 this 值会自动指向全局对象(浏览器中为window)
        context = window 
    } else {
        context = Object(context) // 值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的实例对象
    }
    const specialPrototype = Symbol('特殊属性Symbol') // 用于临时储存函数
    context[specialPrototype] = this; // 函数的this指向隐式绑定到context上
    let result = context[specialPrototype](...arr); // 通过隐式绑定执行函数并传递参数
    delete context[specialPrototype]; // 删除上下文对象的属性
    return result; // 返回函数执行结果
};
```

#### find

```javascript
Function.prototype.myBind = function (objThis, ...params) {
    const thisFn = this; // 存储源函数以及上方的params(函数参数)
    // 对返回的函数 secondParams 二次传参
    let fToBind = function (...secondParams) {
        const isNew = this instanceof fToBind // this是否是fToBind的实例 也就是返回的fToBind是否通过new调用
        const context = isNew ? this : Object(objThis) // new调用就绑定到this上,否则就绑定到传入的objThis上
        return thisFn.call(context, ...params, ...secondParams); // 用call调用源函数绑定this的指向并传递参数,返回执行结果
    };
    if (thisFn.prototype) {
        // 复制源函数的prototype给fToBind 一些情况下函数没有prototype，比如箭头函数
        fToBind.prototype = Object.create(thisFn.prototype);
    }
    return fToBind; // 返回拷贝的函数
};
```

