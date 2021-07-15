# git常用记录

### 恢复某一个文件至某个版本

1. 查看某个文件的commit改动记录

```zsh
git log mycj/public/reset.css
```

2. 回退版本

```zsh
git checkout <hash> mycj/public/reset.css
```

