# toLocaleString的一些用法

```javascript
var num = 3000000

// 默认为千位分割
num.toLocaleString() // 3,000,000
num.toLocaleString('zh', { style:'currency', currency:'EUR' }) // 3,000,000.00

// 货币展示
var number = 123456.789
number.toLocaleString('zh', { style:'currency', currency: 'EUR' }) // €123,456.79
number.toLocaleString('zh', { style:'currency', currency: 'CNY' }) // ¥123,456.79
number.toLocaleString('zh', { style:'currency', currency: 'CNY', currencyDisplay: 'name' }) // 123,456.79人民币
number.toLocaleString('zh', { style:'currency', currency: 'CNY', currencyDisplay: 'code' }) // CNY 123,456.79

// 百分比形式
var num1 = 0.12
var num2 = 2.45
num1.toLocaleString('zh', { style:'percent' }) // 12%
num2.toLocaleString('zh', { style:'percent' }) // 245%

// 纯数字/字符串数组用逗号拼接类似 Array.join(',')
var numArray = [1, 2, 3, 4]
numArray.toLocaleString('zh')
```

[点击这里查看更多MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)