## React进阶的学习攻略

这是一篇方便学习react进阶的一个攻略

### Context

context主要解决的问题: 

- 全局状态

- 地狱传值

###### 如何使用

```react
const Theme = React.createContext('light')

export default () => {
  
  return (
  	<Theme.Provider>
    	<Theme.Consumer>
    		{
          value => {
            return <div>{value}</div>
          }
        }
    	</Theme.Consumer>
    </Theme.Provider>
  )
}
```



### 