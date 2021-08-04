# 在渲染进程中使用electron api

### 创建窗口时添加preload.js

```javascript
// 主进程 ./main.js
const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: __dirname + '/preload.js'
    }
  })
```

### preload.js文件内容

```javascript
// ./preload.js
window.electron = require('electron');
```

### 如何使用

```javascript
const electron = window.electron
export const ipcRender = electron.ipcRenderer
```

这样就可以在渲染进程中```renderer.js```中使用了