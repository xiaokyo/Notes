## 使用ab工具进行压测

mac是自带ab工具的

```bash
ab --help
```

![image-20220712115803622](https://ipic.xiaokyo.com/2022-07-12-58033SB3Ei.png)

常用命令

```
ab -c200 -n1600 http://localhost:7000/
```

运行完会有下面的图示

![image-20220712120051800](https://ipic.xiaokyo.com/2022-07-12-0051I2YDyc.png)

