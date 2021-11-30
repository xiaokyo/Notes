# 简单的shell语法基础

### 变量

```sh
name="xiaok"
```

> ps: 
>
> 变量名和等号之间不能有空格,变量后面不能有;
>
> 可以使用双引号和单引号, 推荐使用双引号, 单引号有如下限制
>
> 1. 字符串中不可以出现单引号, 转译后的也不行
> 2. 字符串使用单引号的情况不可以中间穿插变量, 会原样输出

### 使用变量

```sh
$name
${name}
```

> 共两种, 建议使用第二种

### 注释

没啥说的, #号就完事了

### 字符操作

#### 1. 拼接字符

```sh
my_name="jack";
my_age="20岁"
echo $my_name $my_age
echo $my_name$my_age
```

#### 2. 获取字符长度

```sh
${#my_name}
```

#### 3. 截取字符

```sh
${my_name:0:2}
```

### 数组

```sh
arr=("1" "2" "3")
arr[0]="1"
arr[1]="2"
```

读数组变量值

```sh
${数组名[下标]}
```

读取数组所有元素

```sh
${arr[@]}
```

读取数组个数

```sh
length=${#arr[@]}
```

读取某个元素的长度

```sh
length=${#arr[0]}
```

### 控制语句

#### if

```sh
#!/usr/bin/env bash

a=2
b=2

if [ $a == $b ] 
	then
		echo "a等于b"
elif [ $a -gt $b ] 
	then
		echo "a大于b"
elif [ $a -lt $b ] 
	then
		echo "a小于b"
else
	echo "没有条件"
fi
```

### 循环

```sh
for index in 0 1 2; do
    echo "hello world"$index
done

for ((i=0;i<3;i++)); do
	echo "hello world"${i}
done

int=0
while(( $int<=2 ))
do
    echo "hello world"$int
    let "int++"
done
```

输出

```
hello world0
hello world1
hello world2
```

