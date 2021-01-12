# node根据目录生成docsify的侧边栏

### 目录结构规则

1.文件夹最多为两层即可。如：javascript/*.md

2.根目录不要添加其他所有无关打包文件夹啥的， 或者到时候自己生成前过滤

### 快速使用
```javascript
// 读取path路径下的所有文件及文件夹 过滤掉文件就能取到所有主标题
const dirs = fs.readdirSync(path, {encoding:"utf-8"})

// 将上面dirs每一个再进行读取所有子目录, 这样我们就能取到每个目录
const files = fs.readdirSync(dirs[0], {encoding:"utf-8"})

// 读取文件每一行的数据并返回数组，我们取第一行的数据当目录标题
async function readFileLine(filePath) {
    return new Promise((resolve, reject) => {
        var arr = [];
        var readObj = readLine.createInterface({
            input: fs.createReadStream(filePath)
        });

        readObj.on('line', function (line) {
            arr.push(line)
        })

        readObj.on('close', function () {
            resolve(arr[0])
        })

    })
}
```

### 最后把取到的字符进行一个拼凑然后

```javascript
fs.writeFileSync('_sidebar.md', temp, { encoding: "utf-8" })
```