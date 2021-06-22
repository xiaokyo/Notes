# react-native 安装遇到的坑

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