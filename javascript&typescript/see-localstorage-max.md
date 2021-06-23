# 查看localStorage容量

### 查看剩余容量

**localStorage** 中存储的是字符串，根据这一条件，我们可以通过取出所有的localStorage的内容，而其长度就是大小。具体代码如下:

```javascript
(function(){
    if(!window.localStorage) {
        console.log('浏览器不支持localStorage');
    }
    var size = 0;
    for(item in window.localStorage) {
        if(window.localStorage.hasOwnProperty(item)) {
            size += window.localStorage.getItem(item).length;
        }
    }
    console.log('当前localStorage剩余容量为' + (size / 1024).toFixed(2) + 'KB');
})()
```

### 如何获取localStorage最大容量

```javascript
(function() {
   if(!window.localStorage) {
   console.log('当前浏览器不支持localStorage!')
   }    var test = '0123456789';
   var add = function(num) {
     num += num;
     if(num.length == 10240) {
       test = num;
       return;
     }
     add(num);
   }
   add(test);
   var sum = test;
   var show = setInterval(function(){
      sum += test;
      try {
       window.localStorage.removeItem('test');
       window.localStorage.setItem('test', sum);
       console.log(sum.length / 1024 + 'KB');
      } catch(e) {
       console.log(sum.length / 1024 + 'KB超出最大限制');
       clearInterval(show);
      }
   }, 0.1)
 })()
```

