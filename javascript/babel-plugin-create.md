## 如何创建一个babel插件

```javascript
module.exports = function ({ types: t }) {
    // plugin contents
    return {
        pre(state) {
            this.staticPaths = []
        },
        visitor: {
            // visitor contents
            CallExpression(path, state) {
                if (path.node.callee.name !== 'versionURL') return
                const args = path.node.arguments
                const staticPath = args[0].value
                // console.log('%cextract-vesionUrl.js line:8 path.node', 'color: #007acc;', staticPath, count);
                this.staticPaths.push(staticPath)
                path.get('callee').replaceWith(
                    t.identifier('import')
                )

                path.get('arguments.0').replaceWith(
                    t.stringLiteral(staticPath.replace(/^\/pages\/mycj\//, './').replace(/^\/static\//, '@static/').replace(/\.css$/, '.less'))
                )
            }
        },
        post(state) {
            // console.log(this.staticPaths, this.staticPaths.length);
        }
    };
}
```