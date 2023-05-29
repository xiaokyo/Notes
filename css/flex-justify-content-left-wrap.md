# flex布局实现左对齐

#### 前置条件

- 固定列数

#### css

```css
.container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.list {
    width: 24%; height: 100px;
    background-color: skyblue;
    margin-top: 15px;
}
.list:last-child:nth-child(4n - 1) {
    margin-right: calc(24% + 4% / 3);
}
.list:last-child:nth-child(4n - 2) {
    margin-right: calc(48% + 8% / 3);
}
```

#### html

```html
<div class="container">
    <div class="list"></div>
    <div class="list"></div>
    <div class="list"></div>
    <div class="list"></div>
    <div class="list"></div>
    <div class="list"></div>
    <div class="list"></div>
</div>
```

