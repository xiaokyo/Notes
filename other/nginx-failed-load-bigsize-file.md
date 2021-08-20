# nginx大文件加载失败

错误信息ERR_CONTENT_LENGTH_MISMATCH

找到对应位置的proxy_temp

我安装的目录是

```
cd /opt/homebrew/var/run/nginx/proxy_temp
```

然后添加权限即可

```bash
sudo chmod -R 777 /opt/homebrew/var/run/nginx/proxy_temp
```

