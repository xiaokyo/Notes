# npm中依赖的版本符号

### 版本位数

![image-20211101165130967](https://ipic.xiaokyo.com/2021-11-01-085131.png)

0 是 major版本

2 是 minor版本

5 是 patch版本

### 现在有两种符号

1. ^ 锁major

2. ~ 锁minor

第一种是锁住major的版本

也就是package.json中的version的1.2.3中的第一位数版本, 也就是如果发布了1.2.x, 或者1.3.x, 总的就是1以下的新版本都会默认更新

> 自动升级major以下有可升级的版本

第二种是锁住minor版本

> 自动升级minor以下以下有可升级的版本

### 默认符号

> yarn add js-base64这种命令默认就是major版本 ^

![image-20211101165307575](https://ipic.xiaokyo.com/2021-11-01-085308.png)

### 一般更新内容需要版本

MAJOR：这个版本号变化了表示有了一个不可以和上个版本兼容的大更改。

MINOR：这个版本号变化了表示有了增加了新的功能，并且可以向后兼容。

PATCH：这个版本号变化了表示修复了bug，并且可以向后兼容。