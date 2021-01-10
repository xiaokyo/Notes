# 用python启动本地http服务器


以下命令会以当前目录为根目录启动一个服务器 端口为3000：
```
python -m SimpleHTTPServer 3000
```

### 命令属性

这里的“Web服务器模块”有如下三种：

BaseHTTPServer: 提供基本的Web服务和处理器类，分别是HTTPServer和BaseHTTPRequestHandler。

SimpleHTTPServer: 包含执行GET和HEAD请求的SimpleHTTPRequestHandler类。

CGIHTTPServer: 包含处理POST请求和执行CGIHTTPRequestHandler类。

### （注意） python3 的命令为：

```
python -m http.server –cgi 3000
```

