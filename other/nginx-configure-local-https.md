# nginx配置本地https

> 需要安装openssl 

- [windows安装openssl文档](https://blog.csdn.net/qq_39081974/article/details/81059022)
- mac默认有openssl

### 生成私钥

```bash
openssl genrsa -des3 -out private.key 2048
```

密码随便, 记住就行

### 生成证书

```bash
openssl req -new -key private.key -out server.csr
```

### 生成服务器的私钥，去除密钥口令

```bash
openssl rsa -in private.key -out server.key
```

### 使用私钥为证书请求签名，生成给服务器签署的证书，格式是x509的PEM格式

```bash
sudo openssl x509 -req -in server.csr -out server.crt -signkey server.key -days 3650
```

![img](https://ipic.xiaokyo.com/2021-05-31-081532.jpg)

### nginx配置

```
server{
  listen      443 ssl;
  server_name  localhost;

  ssl_certificate      /usr/local/nginx/server.crt;
  ssl_certificate_key  /usr/local/nginx/server.key;

  location / {
    root  html;
    index  index.html index.htm;
  }
}
```

> 如果nginx是用域名访问, hosts文件也要配置一致域名

![image-20210526140901215](https://ipic.xiaokyo.com/2021-05-31-081532.png)

### chrome需要注意的点

google无法处理的杂乱凭证

![image-20211130194237149](https://ipic.xiaokyo.com/2021-11-30-114237.png)

出现这种情况, 按以下步骤

1. 鼠标点击空白处
2. 键盘直接输入**thisisunsafe**即可自动刷新即可访问了

