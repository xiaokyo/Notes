## js如何调用wasm

```javascript
async function run(){
	const response = await fetch('yz.wasm')
	const buffer = await response.arrayBuffer()
	const wasm = await WebAssembly.instantiate(buffer)
	
	const addTwoFunction = wasm.instance.exports.addTwo
	const result = addTwoFunction(10, 20)
	console.log(result) // 30
}
```



