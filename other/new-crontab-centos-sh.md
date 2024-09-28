# centos创建一个mysql备份任务

#### 编写定时任务执行的sh文件

/root/mysql-backup/mysql_backup.sh

docker容器id需要更换成你的mysql容器id

mysql密码也是

```bash
#!/bin/bash
currentDate=$(date +"%Y-%m-%d") && docker exec 506ff16ef920 sh -c 'MYSQL_PWD=Zwj.19961118 exec mysqldump -uroot unicoinCoffeeShop' > ./databases-${currentDate}.sql
```

#### 给mysql_backup.sh设置可执行权限

```bash
chmod +x /root/mysql-backup/mysql_backup.sh
```

#### 新建一个crontab任务

```bash
crontab -e
```

在文件内输入

```bash
0 1 * * * /root/mysql-backup/backup_mysql.sh
```

每天凌晨1点自动运行脚本