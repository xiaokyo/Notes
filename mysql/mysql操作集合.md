# Mysql操作

#### 备份数据库

```sh
mysqldump -uroot -p [unicoinCoffeeShop] > unicoinCoffeeShop.20240524.sql
```

#### 恢复数据库

```sh
mysql -uroot -p [unicoinCoffeeShop] < unicoinCoffeeShop.20240524.sql
```

#### 创建用户

```bash
create user 'xiaok'@'locahost' identified by 'Zwj.19961118a'
```

给用户授权

```bash
grant all privileges on *.* to 'xiaok'@'localhost' with grant option;
// or
GRANT ALL PRIVILEGES ON expirationSystem.* TO 'xiaok'@'%';
```

#### 刷新权限

```
FLUSH PRIVILEGES;
```

#### 查看表结构

```
describe [table_name];
```

