### 装饰器语法原生实现

#### API

- Object.defineProperty

这个api有三个参数

- target - 目标对象
- propertyName - 对象的属性名
- descriptor - 对象的描述信息

descriptor是实现装饰器的关键

装饰器就是靠修改里面的值来装饰指定属性来达到复用逻辑, 且美化代码的

下面是descriptor对象的属性

- configurable控制是不是能删、能修改descriptor本身。
- writable控制是不是能修改值。
- enumerable控制是不是能枚举出属性。
- value控制对应的值，方法只是一个value是函数的属性。
- get和set控制访问的读和写逻辑

### 示例

写一个我想在Robot.index运行之前打印一个```before```字符的装饰器

```javascript
class Robot {
	async index() {
    console.log('robot index')
  }
}

function descoratorHello(target, key) {
  const method = target.prototype[key]
  let descriptor = {
    value: async function () {
      console.log("hello");
      await method.apply(this)
    },
    enumerable: false,
    configurable: true,
    writable: true
  }
  Object.defineProperty(target.prototype, key, descriptor)
}
```

