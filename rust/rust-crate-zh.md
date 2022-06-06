## rust的crate国内镜像源

```
[source.crates-io]
registry = "https://github.com/rust-lang/crates.io-index"
replace-with = 'ustc'
[source.ustc]
registry = "git://mirrors.ustc.edu.cn/crates.io-index"
# 如果所处的环境中不允许使用 git 协议，可以把上面的地址改为
# registry = "https://mirrors.ustc.edu.cn/crates.io-index"
#[http]
#check-revoke = false
```

- 配置目录在 ~/.cargo/config文件中
- 没有的话创建即可
- 注释及还原国外镜像源

### 更换镜像源可能会出现的问题

- Couldn't resolve host name (Could not resolve host: crates) --- 无法解析host: crates

> 临时解决办法是在cargo前面加上环境变量```CARGO_HTTP_MULTIPLEXING=false```, 意思是这次运行关闭并行下载

[其他问题帮助](https://mirrors.ustc.edu.cn/help/crates.io-index.html)