# Mysql操作

#### 备份数据库

```sh
mysqldump -uroot -p [unicoinCoffeeShop] > unicoinCoffeeShop.20240524.sql
```

#### 恢复数据库

```sh
mysql -uroot -p [unicoinCoffeeShop] < unicoinCoffeeShop.20240524.sql
```

