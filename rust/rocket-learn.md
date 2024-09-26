## rust 之 rocket 框架入门全套

### 初见 Rocket

1.需要新建一个 rust 项目

```bash
cargo new rocket_example --bin
```

2.Cargo.toml 添加 rocket 依赖

```toml
[dependencies]
rocket = "0.5.0"
```

3.Hello Rocket

```rust
#[macro_use]
extern crate rocket;

#[get("/")]
fn index() -> &'static str {
    "Hello, Rocket!"
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index])
}
```

4.运行`cargo run`即可得到一个 rust 编写的路由为 http://127.0.0.1:8000 的服务器

### cargo-watch 改动文件即使重启

```bash
cargo install cargo-watch
cargo watch -w src -x run
```

-w 指定要监听的目录或文件。

-x 后面跟着 cargo 命令，例如 run、test 等。

-q（quiet）可以安静模式运行，隐藏不必要的日志。

### 可选参数路由

```rust
#[get("/hello/<name>")]
fn hello(name: &str) -> String {
  format!("Hello, {}!", name)
}
```

### 静态目录
访问静态文件目录

/public/test.txt

/public/test1.txt

```rust
use rocket::fs::FileServer;
...
fn rocket() -> _ {
  // 绝对路径， 估计可以相对， 但是我不知道
  rocket::build().mount("/public", FileServer::from("E:/works/rs_xiaokun_rocket/public"))
}

```
