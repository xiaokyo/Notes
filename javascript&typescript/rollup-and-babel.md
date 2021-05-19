# rollup和babel的融合
### 安装

开发依赖

```bash
yarn add rollup @babel/core @babel/preset-env @rollup/plugin-babel @rollup/plugin-node-resolve @rollup/plugin-commonjs @babel/plugin-transform-runtime -D
```

生产依赖

```bash
yarn add @babel/runtime core-js
```

### 工具描述

- `rollup`: 打包工具类似webpack
- `@rollup/plugin-babel`: rollup和babel无缝集成的插件
- `@rollup/plugin-node-resolve`: 让rollup识别第三方包
- `@rollup/plugin-commonjs`: 将commonjs转换成ES6
- `@babel/plugin-transform-runtime`: 运行时用的插件polyfill的替代品, 和`@babel/runtime`一起使用
- `@babel/core`: babel核心库
- `@babel/preset-env`: babel预设的一些编译规则
- `@babel/runtime`: 运行时使用的库, 和`@babel/plugin-transform-runtime`一起使用, polyfill的替代品

### rollup.config.js配置

```javascript
import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'index.js',
  output: {
    file: 'dist/index.js',
    format: 'umd', // 常用 iife, umd, cjs
    name: 'JsTracking', // window.JsTracking的变量
  },
  plugins: [
    nodeResolve({
      preferBuiltins: true,
      browser: true,
    }),
    commonjs(),
    babel({
      babelHelpers: 'runtime', // 常用 bundled, runtime
      exclude: 'node_modules/**',
      presets: [
        [
          "@babel/preset-env",
          {
            "useBuiltIns": 'usage', // 常用 entry, usage
            "corejs": { version: 3 },
            "modules": false, // 防止转换成commonjs
          }
        ]
      ],
      plugins: [
        [
          "@babel/plugin-transform-runtime",
          {
            "regenerator": false,
          }
        ],
      ]
    })
  ],
};
```


