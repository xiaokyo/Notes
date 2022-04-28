# 递归获取类目所有父级

前提递归将所有父子变成同级对象, 存放至valueMap中

```javascript
const valueMap = {}
function loops(list, parent){
	return (list || []).map(
    ({ children, id, nameEn, nameVal }) => {
      const node = (valueMap[id] = {
        parent,
        id,
        nameEn,
        nameVal
      });
      node.children = loops(children, node);
      return node;
    },
  );
}
```

然后去获取所有父级就方便了

```javascript
function getPath(value){
  const path = [];
  let current = valueMap[value];
  while (current) {
    path.unshift(current);
    current = current.parent;
  }
  return path;
}
```

