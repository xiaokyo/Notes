# 如何简单写一个gulp插件

### 简单了解下buffer

它是一个字节操作缓存区

```javascript
// 创建一个长度为 10、且用 30 填充的 Buffer。
const buf1 = Buffer.alloc(10, 30)
console.log(buf1)// <Buffer 1e 1e 1e 1e 1e 1e 1e 1e 1e 1e>
// 字符串转Buffer
const buf2 = Buffer.from('javascript')
console.log(buf2)// <Buffer 6a 61 76 61 73 63 72 69 70 74>
// buffer转字符串
console.log(buf2.toString())// javascript
console.log(buf2.toString('hex')) //6a617661736372697074
```

### 安装下插件吧（没错，写插件也要用插件写）

```bash
yarn add gulp gulp-util through2 -D
```

### 简单写法

```javascript
const gulp = require('gulp')
const gutil = require('gulp-util');
const PluginError = gutil.PluginError;

// 插件名称
const PLUGIN_NAME = 'gulp-plugin-test';

function myPlugin(){
  // 创建一个 stream 通道，以让每个文件通过
  return through.obj(function (file, enc, cb) {
		
    // 这里是不支持stream写法，所有报error， 
    // 中文官方建议使用stream写法来, 但很多优秀开源都是直接buffer操作 如：gulp-rename,gulp-sass...
    if (file.isStream()) {
      this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
      return cb();
    }

    // 只针对buffer
    if (file.isBuffer()) {
      let temp = file.contents.toString()
			// 做你想做的操作
      file.contents = Buffer.from(temp);
    }

    // 确保文件进入下一个 gulp 插件
    this.push(file);

    // 告诉 stream 引擎，我们已经处理完了这个文件
    cb();
  });
}

```

### 常用的插件

- gulp-rename：重命名文件
- gulp-concat：合并文件
- gulp-filter：过滤文件
- gulp-uglify：压缩Js
- gulp-csso：压缩优化CSS
- gulp-html-minify：压缩HTML
- gulp-imagemin：压缩图片
- gulp-zip：zip压缩文件
- gulp-autoprefixer：自动为css添加浏览器前缀
- gulp-rev：给静态资源文件名添加hash值 unicorn.css => unicorn-d41d8cd98f.css
- gulp-sass：编译sass
- gulp-babel：将ES6代码编译成ES5