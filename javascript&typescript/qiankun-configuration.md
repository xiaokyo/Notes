# qiankun 配置全解

### 子项目配置`.umirc.ts`

```typescript
base: '/mobile-order', // base 这个配置是让项目访问路由前缀多一个字符 /mobile-order, 主框架配合使用
publicPath: '/microPublic/order/', // 这个是静态目录文件前缀，配合nginx转发到指定目录
qiankun: {
  // umi自带配置乾坤的子项目必填项
  slave: {},
},
```

配置运行的生命周期`src/app.ts`

```javascript
export const qiankun = {
  // 应用加载之前
  async bootstrap(props) {
    console.log("app1 bootstrap", props);
  },
  // 应用 render 之前触发
  async mount(props) {
    console.log("app1 mount", props);
  },
  // 应用卸载之后触发
  async unmount(props) {
    console.log("app1 unmount", props);
  },
};
```

这样子项目就配置完成了

### 主项目配置

```javascript
require("qiankun").loadMicroApp({
  name: "mobile-order", // 随便填， 不要和其他子项目重名即可
  entry: `/microPublic/order/index.html`, // 入口的静态文件， 也可以配置成 /order/ 然后用nginx转发
  container: "#micro-app", // dom元素容器
  //   props: {}, // 传个子项目的属性值
});
```

### nginx 配置

```conf
location /microPublic {
    alias <你的microPublic项目目录>;
}
```

> 如果你上面`loadMicroApp`的 entry 写法是/order/就要加下面的配置来配合不同服务器的兼容写法进行转发

```conf
location /order/ {
    proxy_pass http://localhost:7777/order/;
    proxy_set_header Host $host:$server_port;
}

# -----上面是主配置，下面是子项目根路径
server {
    listen 7777;
    server_name localhost;

    location / {
        root <你的order项目根路由>;
        index index.html;
    }
}
```
