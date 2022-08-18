## github如何更新fork的项目到最新	

#### 1.先拿到原仓库clone地址

并且配置原地址

```bash
git remote add upstream git@github.com:DIYgod/RSSHub.git
```

#### 2.更新到本地

```bash
git fetch upstream
```

#### 3. merge到master或者main

```bash
git merge upstream/master
```

