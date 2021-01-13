# js上拉加载更多数据

### 给document加scroll监听事件
```typescript
const scrollBox = document.getElementById("my-scroll")
scrollBox.onscroll = function (e) {
    const $target = e.target as HTMLElement;
    // 内容可视高度
    const boxHeight = scrollBox.clientHeight;
    // 可滚动的高度 , 滚动的高度
    const { scrollHeight, scrollTop } = $target

    // 滚动容器的高度 + 滚动的高度 = 可滚动的高度
    // boxHeight + scrollTop >= scrollHeight - 50

    // do anything here what you want, like this
    // debounceChangePageNum(scrollHeight, scrollTop, boxHeight)
}
```

### 去除scroll监听
```typescript
scrollBox.onscroll = null
```