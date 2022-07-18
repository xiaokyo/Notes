# cmder 配合 vscode

### vscode 配置

```json
"terminal.integrated.profiles.windows": {
    "cmder": {
      "path": [
        "${env:windir}\\Sysnative\\cmd.exe",
        "${env:windir}\\System32\\cmd.exe"
      ],
      "args": [
        "/k E:\\tools\\cmder_mini\\vendor\\init.bat"
      ],
      "icon": "terminal-cmd"
    },
  },
```

### 下面是 vscode 的配置(旧版弃用)：

```json
"terminal.integrated.shell.windows": "cmd.exe",
"terminal.integrated.env.windows": {
    "CMDER_ROOT": "D:\\xiaokyo\\cmder_mini"
},
"terminal.integrated.shellArgs.windows": [
    "/k",
    "D:\\xiaokyo\\cmder_mini\\vendor\\init.bat"
],
```

### 下面是更改符号

进入\cmder\vendor\目录，打开 clink.lua 文件，在 51 行将 ocal lambda = “λ” 改为 local lambda = “自定义符号及文字”
