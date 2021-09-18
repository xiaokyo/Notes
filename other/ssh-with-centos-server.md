# ssh无须密码登录服务器

### window的需要cmder(macos和centos跳过这一步)

> 里面集成了类似centos, macos的命令集合, 比如```ls```, ```ssh-keygen```

### 生成ssh密钥

> 本地生成即可, 有的话也可以不用生成, 可以拿来直接用, 因为有些人git上用了ssh了

```bash
ssh-keygen
```

然后一直回车就会得到两个文件```id_rsa```, ```id_rsa.pub```

### 将id_rsa.pub的内容复制到服务器

一般服务器内有个文件是在/root/.ssh

```
vim /root/.ssh/authorized_keys
```

将id_rsa.pub的内容复制到这个文件中

### 服务器需要的ssh配置

打开下面这个文件

```
vim /etc/ssh/sshd_config
```

找到下面两个参数, 没找到的话不用改, 找到的话 ```no```改成```yes```

```
RSAAuthentication no
PubkeyAuthentication no
```

关闭ssh密码登录, 把下面那行注释掉, 注释为前面加#号

```
# PasswordAuthentication yes
```

#### 最后

有些服务器改完以后需要重启才能生效