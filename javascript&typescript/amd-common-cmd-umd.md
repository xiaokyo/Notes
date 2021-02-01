# javascript模块化之CommonJS、AMD、CMD、UMD、ES6

### CommonJS

commonjs是一个偏向于服务端的规范，NodeJS采用了这个规范。

一个模块即一个脚本文件(js)，require命令第一次加载该脚本时会执行整个脚本，然后在内存中生成一个对象

```
{
  id: '...', // 模块名
  exports: { ... }, // 导出的接口
  loaded: true, // 是否加载完成
  ...
}
```

此模块就只运行一次，不会再次执行，如果后面还用到了此模块就会到exports属性取值。

> 由于CommonJS是同步加载模块，这对于服务器端不是一个问题，因为所有的模块都放在本地硬盘。等待模块时间就是硬盘读取文件时间，很小。但是，对于浏览器而言，它需要从服务器加载模块，涉及到网速，代理等原因，一旦等待时间过长，浏览器处于”假死”状态。

> 所以在浏览器端，不适合于CommonJS规范

### AMD

AMD名称是由“Asynchronous Module Definition”缩写而来，即“异步模块定义”。

它采用异步方式加载模块

```javascript
require([module], callback);
```

这种方式不会堵塞浏览器其他任务（如：dom构建，css渲染）。在内部执行加载是同步的，当模块加载完立即执行callback里的代码。

AMD模块定义是必须使用特定的define()函数来定义的

```javascript
define(id?, dependencies?, factory);

```
如何使用
```javascript
// math.js
define(function() {
  var add = function(x, y) {
    return x + y;
  }

  return  {
    add: add
  }
})
```

AMD模块引用：
```javascript
require(['math'], function(math){
    math.add(2, 3)
})
```

如果math模块依赖其他模块，定义写法：
```javascript
// math.js
define(['dependenceModule'], function(dependenceModule) {
  // ...
})
```

### CMD

CMD推崇依赖就近，延迟执行。可以把你的依赖写进代码的任意一行，如下：
```
define(factory)
```
```factory```为函数时，表示是模块的构造方法。执行该构造方法，可以得到模块向外提供的接口。
```factory```方法在执行时，默认会传入三个参数：require，exports和module

```javascript
// CMD
define(function(require, exports, module) {
  var a = require('./a');
  a.doSomething();
  var b = require('./b');
  b.doSomething();
})
```

这个规范实际上是为了Seajs的推广然后搞出来的。可以看下Seajs，就好理解为什么这么设计了

```javascript
seajs.use(id, callback?)
```

### UMD
由于CommonJS是服务器端的规范，跟AMD,CMD两个标准实际不冲突

```javascript
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery', 'underscore'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS之类的
        module.exports = factory(require('jquery'), require('underscore'));
    } else {
        // 浏览器全局变量(root 即 window)
        root.returnExports = factory(root.jQuery, root._);
    }
}(this, function ($, _) {
    // 方法
    function a(){}; // 私有方法，因为它没被返回 (见下面)
    function b(){}; // 公共方法，因为被返回了
    function c(){}; // 公共方法，因为被返回了
    // 暴露公共方法
    return {
        b: b,
        c: c
    }
}));
```

> 这个代码可以兼容各种加载规范了。

### ES6

es6使用```import```,```export```实现模块的输入输出。其中import命令用于输入其他模块提供的功能，export命令用于规定模块的对外接口。

```javascript
// profile.js
export var a = 1;
export var b = 2;
export var c = 3;
```

使用```profile.js```中的变量
```javascript
import { a, b, c } from './profile'
console.log(a, b, c)
```