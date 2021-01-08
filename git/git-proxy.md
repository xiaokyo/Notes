# git socks5 代理设置

```
git config --global http.proxy 'socks5://127.0.0.1:1080'
git config --global https.proxy 'socks5://127.0.0.1:1080'
```

# 取消代理

```
git config --global --unset http.proxy
git config --global --unset https.proxy
```