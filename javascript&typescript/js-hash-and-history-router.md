# js实现前端路由

### hash路由

如: /#home, /#list

##### 使用的api整理

```javascript
window.location.hash = 'hash字符串'; // 用于设置 hash 值

let hash = window.location.hash; // 获取当前 hash 值

// 监听hash变化，点击浏览器的前进后退会触发
window.addEventListener('hashchange', function(event){ 
    let newURL = event.newURL; // hash 改变后的新 url
    let oldURL = event.oldURL; // hash 改变前的旧 url
},false)
```

##### 实现路由对象

```javascript
function Router(){
  this.currentRoute = ''
  this.routes = {}
}

Router.prototype.route = function(path, callback){
  this.routes[path] = callback || function(){}
}

Router.prototype.refresh = function(){
  this.currentUrl = location.hash.slice(1) || '/';
  this.routes[this.currentUrl]();
}

Router.prototype.init = function(){
  window.addEventListener('load', this.refresh.bind(this), false)
  window.addEventListener('hashchange',this.refresh.bind(this),false);
}
```

##### 如何使用

```javascript
const route = new Router()
route.init()

function changeColor(color){
  const body = document.querySelector('body')
  body.style.backgroundColor = color
}

// 注册路由
route.route('/', changeColor.bind(null, 'skyblue'))
route.route('/home', changeColor.bind(null, 'blue'))
route.route('/list', changeColor.bind(null, 'red'))
```

### history路由

##### 开发前整理

```javascript
history.go(-1);       // 后退一页
history.go(2);        // 前进两页
history.forward();     // 前进一页
history.back();      // 后退一页
```

HTML5规范出来后, 新增的api

```javascript
history.pushState();         // 添加新的状态到历史状态栈
history.replaceState();      // 用新的状态代替当前状态
history.state                // 返回当前状态对象
```

HTML5[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/History_API)文档

###### 参数说明

history.pushState()和 history.replaceState() 均接受三个参数 (state, title, url)

1. state: 合法的Javascript对象, 可以用在popstate事件中
2. title: 现在大多浏览器忽略这个参数, 可以直接用null代替
3. url: 任意有效的URL, 用于更新浏览器的地址栏

###### pushState和replaceState区别在于:

- pushState 在保留现有历史记录的同时, 将url加入到历史记录中
- replaceState 会将历史记录中的当前页面历史替换为url

这两个api均不会刷新页面, 所以可以用作前端路由的跳转

###### 对于history模式改变路由的情况如下:

- 点击浏览器的前进或后退
- 点击a标签
- 在js代码中触发history.pushState函数
- 在js代码中触发history.replaceState函数

##### 实现路由对象

```javascript
function HistoryRouter(){
  this.routers = {}
}

HistoryRouter.prototype.route = function(path, callback){
  this.routers[path] = callback || function(){}
}

HistoryRouter.prototype.push = function(path) {
  history.pushState({path}, null, path)
  this.routers[path].call(this) || function(){}
}

HistoryRouter.prototype.load = function(){
  const path = location.path
  this.routers[path].call(this) || function(){}
}
```

