# less响应式处理方案

### 先在头部添加meta标签

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### media.less中添加以下代码：

```less
@largeWidth: 1200px;
@middleWidth: 992px;
@smallWidth: 768px;

.mixin-middle(@key, @value) {
  @media (max-width:@middleWidth) {
    @{key}: @value;
  }
}

.mixin-mini(@key, @value) {
  @media (max-width:@smallWidth) {
    @{key}: @value;
  }
}
```

### 使用
```less
@import "media.less";

.main{
    width:1200px;
    .mixin-middle(width, 980px); // 平板尺寸的width
    .mixin-mini(width, 100%); // 手机模式的width
}
```