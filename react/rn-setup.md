# react-native 开发记录

### 必须安装

- build-tools 28.0.3

### 需要手动下载```gradle```

文件中的android\gradle\wrapper\gradle-wrapper.properties
```
distributionUrl=https\://services.gradle.org/distributions/gradle-6.2-all.zip
```

### 版本```grade```查看及更改
打开android studio里新建一个项目，找到
build.gradle里面的```com.android.tools.build:gradle:3.5.2```

在rn项目中也也改成对应版本

### React-native-debugger使用

```
yarn start
open "rndebugger://set-debugger-loc?host=localhost&port=8081"
```

> yarn start 启动的metro打包服务是8081, 然后在运行下面这个debugger

### 常用命令

- ```adb devices``` 查看设备列表
- ```adb reverse tcp:8081 tcp:8081```使电脑端口映射到当前设备



