# 复制storage至另一个网站

### sessionStorage

```
copy(`
const sess = ${JSON.stringify(sessionStorage)};
for (const key in sess) {
    sessionStorage.setItem(key, sess[key])
}
`);
```

### localStorage

```
copy(`
const local = ${JSON.stringify(localStorage)};
for (const key in local) {
    localStorage.setItem(key, local[key])
}
`);
```

然后去指定站点的console控制台粘贴一下