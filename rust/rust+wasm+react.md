## 搭建一个wasm+rust+react项目

最近想用wasm来写写小游戏试试水, 顺便学习一下rust和wasm, 前试一下

### cargo new

```bash
cargo new gopher --lib
```

新建一个rust工程, 以库的模式生成

### 配置cargo.toml

新增以下配置

```toml
[lib]
crate-type = ["cdylib", "rlib"]

[dependencies]
wasm-bindgen = "0.2.80"
wee_alloc = {version = "0.4.5", optional = true}

[dependencies.web-sys]
features = [
  'Document',
  'Element',
  'HtmlElement',
  'Node',
  'Window',
  'HtmlCanvasElement',
  'CanvasRenderingContext2d',
  'console',
]
version = "0.3.57"

[profile.release]
opt-level = "s"
```

