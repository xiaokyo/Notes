# 安装oh-my-zsh

### 拉取[oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh)仓库

```bash
git clone https://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh
```

### 复制.zshrc

```bash
cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
```

### 更改默认shell

已经是zsh的重新打开即可看到效果了

```bash
chsh -s /bin/zsh
```

### 刷新zshrc配置

更改以后需要刷新操作才能及时生效

```bash
source ~/.zshrc
```

### git的一些缩写操作

| 缩写 | 全写 |
| ---- | ---- |
|   gst	   | git status |
| gaa | git add . |
| gcmsg "" | git commit -m "" |
| gp | git push |
| glog | git log --oneline --decorate --graph |
| gl | git pull |
| gf | git fetch |
| gfa | git fetch --all --prune |

### 安装zsh-suggestions

此工具是帮助开发者在输入命令时候出现联想词等信息供参考

![image-20210622185350054](https://ipic.xiaokyo.com/2021-06-22-105350.png)

如何安装 —— 前提已经安装好ohmyzsh

```bash
git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
```

编辑.zshrc文件

```
vim ~/.zshrc

#找到plugins=(git)这一行，然后再添加autosuggestions
plugins=(git zsh-autosuggestions)
```

### vim一些操作记录

查询字符串

<img src="https://ipic.xiaokyo.com/2021-06-01-072254.png" alt="image-20210601152254742"  />

> 回车后查询, n下一个, N上一个

### 参考文献

安装及配置oh-my-zsh - https://zhuanlan.zhihu.com/p/58073103

一份4年前端的git使用备忘 - https://juejin.cn/post/6967634683811069982