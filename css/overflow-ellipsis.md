# css省略号

```css
 /* 显示一行，省略号 */
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
word-break: break-all;
 
/* 显示两行，省略号 */
text-overflow: -o-ellipsis-lastline;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
line-clamp: 2;
-webkit-box-orient: vertical;
```

### 两行实现瀑布流

```css
 column-count: 3;
 column-gap: 10px;
```

