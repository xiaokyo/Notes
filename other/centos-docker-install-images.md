# centos利用docker安装常用镜像

### 安装docker

```
yum install docker
```

### 安装redis镜像

```
docker pull redis
```

### 映射redis.conf和data数据到本地目录

```
docker run -d --name redis -p 6379:6379 -v /root/redis/conf/redis.conf:/redis.conf -v /root/redis/data:/data redis redis-server --appendonly yes
```

> 前提得先建立/root/redis/conf/redis.conf空文件

### 安装nginx镜像

```
docker pull nginx
```

### 映射目录及文件

```
/etc/nginx/nginx.conf
/etc/nginx/conf.d
/etc/nginx/conf.d/default.conf
/usr/share/nginx/html
/var/log/nginx
```

### docker配置常用命令

![image-20220324133757581](https://ipic.xiaokyo.com/2022-03-24-3757OotykC.png)

### docker常用cli命令

```
docker images // 查看镜像列表
docker ps // 查看容器列表
docker rmi [imageId] // 镜像删除
docker rm [contianerId] // 容器删除
docker exec -it [contianerId|contianerName] bash // 使用bash进入容器内部
docker start [contianerId|contianerName] // 启动容器

docker-compose up -d // 组合Dockerfile镜像管理
docker-compose down --rmi all -v // 删除镜像及关闭容器及删除卷
docker-compose up -d --force-receate // 重新创建容器
docker-compose up -d --build
```



```
docker run -d --name redis -p 6379:6379 -v /root/redis/conf/redis.conf:/redis.conf -v /root/redis/data:/data -----privileged=true redis redis-server --appendonly yes
```

> 指定镜像运行容器

- -d 指定容器以守护进程方式在后台运行
- --name 容器的名称
- -p 指定端口 [systemPort]:[contianerPort]
- -v 容器内映射本机文件及目录 [systemDir]:[contianerDir]
- --privileged=true 容器内部对挂载的目录拥有读写权限
- redis 指定镜像名称或者镜像id前四位
- redis-server --appendonly yes 生成容器后立即运行的命令



```
docker cp [contianerId|contianerName]:/etc/nginx/nginx.conf ./
```

> 复制容器内文件到主机

- cp 复制
- [contianerId|contianerName] 指定容器的id或者名称
- /etc/nginx/nginx.conf 容器内的文件
- ./ 当前主机的目录



### 网络相关

```
docker network ls // 查看网络情况
docker inspect bridge // 查看bridge网关信息
docker network create --driver bridge --subnet 172.18.0.0/16 --gateway 172.18.0.1 mynet // 创建自定义网络隔离
```

- --driver bridge 使用网关驱动为bridge桥接, 还可以为host

> 运行容器的时候加上--net mynet即可加入同一网关

```
docker network connect mynet nginx // 将nginx加入mynet网关
```

