# cmder配合vscode

### 下面是vscode的配置：
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

进入\cmder\vendor\目录，打开clink.lua文件，在51行将ocal lambda = “λ” 改为 local lambda = “自定义符号及文字”