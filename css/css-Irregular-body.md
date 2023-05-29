## css画不规则体

![img](https://ipic.xiaokyo.com/2023-03-31-5836rgJIlw.awebp)

```html
<div class="arrow-button"></div>
```

```less
.arrow-button {
    position: relative;
    width: 180px;
    height: 64px;
    background: #f49714;

    &::after {
        content: "";
        position: absolute;
        width: 32px;
        height: 64px;
        top: 0;
        right: -32px;
        background: 
            linear-gradient(-45deg, transparent 0, transparent 22px, #f49714 22px, #f49714 100%),
            linear-gradient(-135deg, transparent 0, transparent 22px, #f49714 22px, #f49714 100%);
        background-size: 32px 32px;
        background-repeat: no-repeat;
        background-position: 0 bottom, 0 top;
    }
}
```

#### 原文

https://juejin.cn/post/7171609307253833764