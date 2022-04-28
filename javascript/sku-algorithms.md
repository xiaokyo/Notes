# 商品规格可选算法

### 给定数据

```javascript
// 属性列表
const keys = [
  {
    "title":"Color",
    "list":["Red", "Blue"],
  },
  {
    "title":"Model",
    "list":["iphoneXR", "iphone12"]
  },
  {
    "title":"Size",
    "list":["64G", "128G"]
  }
]

// 已有商品列表
const skuList = [
	['Red', 'iphoneXR', '64G'],
  ['Blue', 'iphone12', '128G'],
  ['Blue', 'iphone12', '64G']
]
```

### 核心代码

```javascript
const attrs = [...skuList]
const skusResult = []
for (let i = 0; i < attrs.length; i++) {
  const conbineAttrs = combine(attrs[i].map(_ => [_, '']))
  // console.log(conbineAttrs)
  skusResult.push(conbineAttrs)
}

function combine(arr) {
  const result = []
  const cache = []

  function fn(list, index) {
    list[index].forEach((v, i) => {
      cache[index] = v
      if (index === list.length - 1) {
        result.push(JSON.parse(JSON.stringify(cache)))
      } else {
        fn(list, index + 1)
      }
    })
  }

  fn(arr, 0)
  return result
}

function flat(list) {
  return list.reduce((pre, attrs) => [...pre, ...attrs], [])
}

const result = flat(skusResult) // 这个数据就是 [ ['','',''], ['Red', '', ''], ['Red', 'iphoneXR', ''] ]
```
### 渲染时可选
```javascript
 /**
   * 是否能点击
   */
  const canClick = useCallback(
    (renderValue: string, index: number) => {
      let selectedSkuProperty = [...vKeys]
      selectedSkuProperty[index] = renderValue
      selectedSkuProperty = addPrefix(selectedSkuProperty)
      // 加个前后缀
      function addPrefix(list) {
        return list.map((_, i) => i + _ + i)
      }
      const variantKeyText = selectedSkuProperty.join('-')
      return specCombinationList.some(_ => {
        return addPrefix(_).join('-').indexOf(variantKeyText) > -1
      })
    },
    [specCombinationList, vKeys]
  )
```


### 原文链接

https://blog.csdn.net/baidu_16839249/article/details/114370304#t4
