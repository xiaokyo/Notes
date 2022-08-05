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

3. 删除已合并至master的分支

```bash
git branch --merged master | grep -v '^[ *]*master$' | xargs git branch -d
```

4. 分支描述操作

```
git config branch.[branchName].description // 查看分支备注
git config branch.[branchName].description [msg] // 设置msg到branchName备注
```

有个工具git-br
