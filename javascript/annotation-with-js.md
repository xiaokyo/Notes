# js的注释写法集合

基本类型必须首字母小写, 包括 ```{string}``` ```{number}``` ```{boolean}```

注释前必须空一行

### 单行注释

```javascript
// 这是注释
```

### 多行样式

```javascript
/*...*/
```

### 常量注释

```javascript
/**
 * 常量说明
 *
 * @const
 * @type {string}
 */
var REQUEST_URL = "myurl.io"
```

### 文件开头常用注释

```javascript
/**
 * @author xiaokyo
 * @description 这是一个文件
 */
```

### 普通函数

```javascript
/**
 * 函数描述
 *
 * @param {string} p1 参数1的说明
 * @param {string} p2 参数2的说明，比较长
 *     那就换行了.
 * @param {number=} p3 参数3的说明（可选）
 * @return {Object} 返回值描述
 */
function foo(p1, p2, p3) {}
```

### 复杂类型注释

```javascript
// `namespaceA~` 可以换成其它 namepaths 前缀，目的是为了生成文档中能显示 `@typedef` 定义的类型和链接。
/**
 * 服务器
 *
 * @typedef {Object} namespaceA~Server
 * @property {string} host 主机
 * @property {number} port 端口
 */

/**
 * 服务器列表
 *
 * @type {Array.<namespaceA~Server>}
 */
var servers = [
	{
		host: '1.2.3.4',
		port: 8080
	}
]
```

### 标记型注释

```javascript
// TODO 有功能待实现, 简单说明下实现的功能
// FIXME 代码运行没问题, 但可能由于时间赶或者其他原因, 需要修正. 此时需要对如何修正进行简单说明
// HACK 使用了奇奇怪怪的实现的方法编写出的代码, 此时需要对思路或奇奇怪怪的方法进行描述
// XXX 这里的代码可能存在风险问题, 对风险进行描述下
```

### 参数为对象的函数

```javascript
/**
 * 函数描述
 *
 * @param {Object} option 参数描述
 * @param {string} option.url option项描述
 * @param {string=} option.method option项描述，可选参数
 */
function foo(option) {}
```

注意: string后面的=符号表示这个参数可选

> 函数/方法注释必须包含函数说明, 有参数和返回值时必须使用注释
>
> 参数和返回值注释必须包含类型信息和说明

### 类型集合

| 类型定义         | 语法示例                           | 解释                                      |
| ---------------- | ---------------------------------- | ----------------------------------------- |
| String           | {string}                           | --                                        |
| Number           | {number}                           | --                                        |
| Boolean          | {boolean}                          | --                                        |
| Object           | {Object}                           | --                                        |
| Function         | {Function}                         | --                                        |
| RegExp           | {RegExp}                           | --                                        |
| Array            | {Array}                            | --                                        |
| Date             | {Date}                             | --                                        |
| 单一类型集合     | {Array.<string>}                   | string 类型的数组                         |
| 多类型           | {(number｜boolean)}                | 可能是 number 类型, 也可能是 boolean 类型 |
| 允许为null       | {?number}                          | 可能是 number, 也可能是 null              |
| 不允许为null     | {!Object}                          | Object 类型, 但不是 null                  |
| Function类型     | {function(number, boolean)}        | 函数, 形参类型                            |
| Function带返回值 | {function(number, boolean):string} | 函数, 形参, 返回值类型                    |
| 参数可选         | @param {string=} name              | 可选参数, =为类型后缀                     |
| 可变参数         | @param {...number} args            | 变长参数, ...为类型前缀                   |
| 任意类型         | {*}                                | 任意类型                                  |
| 可选任意类型     | @param {*=} name                   | 可选参数，类型不限                        |
| 可变任意类型     | @param {...*} args                 | 变长参数，类型不限                        |