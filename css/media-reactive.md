# less 响应式处理方案

### 先在头部添加 meta 标签

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### media.less 中添加以下代码：

```less
@largeWidth: 1200px;
@middleWidth: 992px;
@smallWidth: 768px;

.iPad(@key, @value) {
  @media (max-width: @middleWidth) {
    @{key}: @value;
  }
}

.mobile(@key, @value) {
  @media (max-width: @smallWidth) {
    @{key}: @value;
  }
}
```

### 使用

```less
@import "media.less";

.main {
  width: 1200px;
  .iPad(width, 980px); // 平板尺寸的width
  .mobile(width, 100%); // 手机模式的width
}
```
