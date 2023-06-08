# class 的输出

比如我们想输出 class 的一些信息, 可以直接使用 `cout << Person << endl;`, 但是这之前需要自己实现 operator 并返回 osstream

```cpp
// Person.h
std::ostream &operator<<(std::ostream &os, const Person &p);

// Person.cpp
std::ostream &operator<<(std::ostream &os, const Person &p) {
    os << "name=" << p.name << "\n";
    os << "age=" << p.age << "\n";
    return os;
}
```

私有的可能不能访问, 加友元函数声明关键字, friend

```cpp
friend std::ostream &operator<<(std::ostream &os, const Person &p);
```

这段要加载 class 内部

```cpp
class Person {

friend std::ostream &operator<<(std::ostream &os, const Person &p);

public:
    ...
private:
    ...
}
```
