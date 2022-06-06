## rust文件操作

### 权限读写

```rust
let host_path = "/etc/hosts";

let mut host_file = fs::OpenOptions::new()
    .read(true) // 赋予读权限
    .write(true) // 赋予写权限
		.append(true) // 写入时追加文本
    .open(host_path)
    .unwrap();

host_file.write(b"写入的文本");
```

