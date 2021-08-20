# linux常用命令

### 查看日志

查看后n行 :

```bash
tail -nf 文件名
```

实时追踪日志

```bash
tail -f 文件名
```

日志多, 使用关键字高亮显示

```bash
tail -f 文件名 | perl -pe 's/(关键词)/\e[1;颜色$1\e[0m/g'
```

多个关键字高亮

```bash
tail -f 文件名 | perl -pe 's/(关键词1)|(关键词2)|(关键词3)/\e[1;颜色1$1\e[0m\e[1;颜色2$2\e[0m\e[1;颜色3$3\e[0m/g'
```

文字颜色代码

```
30m 黑色
31m 红色
32m 绿色
33m 黄色
34m 蓝色
35m 紫色
36m 天蓝色
37m 白色
```

背景色代码

```
40;黑色背景
41;红色背景
42;绿色背景
43;黄色背景
44;蓝色背景
45;紫色背景
46;天蓝色背景
47;白色背景
```

### scp操作

```bash
//上传本地文件到服务器
scp local_file_path root@host:/home/www/

//上传本地文件夹到服务器
scp -r local_dir root@host:/home/www/

//下载服务器文件到本地
scp root@host:/home/www/filename local_path

//下载服务器文件夹到本地
scp -r root@host:/home/www/ local_path
```

