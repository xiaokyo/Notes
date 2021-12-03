# 使用及更新github的模版

### 添加模版远程仓库

需要在你的项目中添加模版的远程仓库

```bash
git remote add template [URL of the template repo]
```

### fetch模版仓库

```bash
git fetch --all
```

### 然后合并模版代码

```bash
git merge template/[branch to merge]
```

如果发现出现禁止合并```fatal: refusing to merge unrelated histories```

在merge的命令后添加```--allow-unrelated-histories```

这样处理冲突后即可

