### git clone 速度问题解决

## 查询ip地址

查询ip网站[https://www.ipaddress.com/](https://www.ipaddress.com/)

查询下面两个的ip地址

```
github.global.ssl.fastly.net
github.com
```

## 配置hosts

hosts所在目录:

window: C:\Windows\System32\drivers\etc\hosts

linux: /etc/hosts

将查询到的ip代码添加至hosts底部：
```
199.232.69.194 github.global-ssl.fastly.net
140.82.114.4 github.com
```

## 刷新dns

window 运行
```
ipconfig /flushdns
```

linux 运行
```
sudo /etc/init.d/networking restart
```