const fs = require("fs")
const { resolve } = require("path")
const path = require('path')
const readLine = require('readline')
const { callbackify } = require("util")

/** 运行目录 */
const cwd = process.cwd()

/** 读取文件夹 */
function readDirs() {
    const dirs = fs.readdirSync(path.resolve(cwd, '.'), { encoding: "utf-8" })
    // console.log("文件夹", dirs)
    return dirs.filter(_ => _.indexOf('.') == -1) // 没有点的就是文件夹
}

/** 读取单个文件的第一行 */
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

const dirs = readDirs();

(async () => {
    let temp = ``;
    for (let i = 0; i < dirs.length; i++) {
        // 类型标题
        const oneTitle = dirs[i].toString()
        const files = fs.readdirSync(oneTitle, { encoding: "utf-8" })
        console.log('dir', oneTitle)
        temp += `- ${oneTitle} \r\n\r\n`;

        for (let j = 0; j < files.length; j++) {
            const filePath = files[j];
            // 文件名
            const url = oneTitle + '/' + filePath;
            const title = await readFileLine(oneTitle + '/' + filePath)
            temp += `  - [${title.replace('#', '').trim()}](${url}) \r\n`
        }

        temp += `\r\n`
    }

    fs.writeFileSync('_sidebar.md', temp, { encoding: "utf-8" })
})()