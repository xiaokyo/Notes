# es6常用语法糖

### 非空判断

```typescript
let value
// old
if(!value && value != null && value !== '') {
  // 不等于空时
}
// new
if(value??'' !== '') {
	// 不等于空时
}
```

