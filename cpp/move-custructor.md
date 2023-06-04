# Move Custructor 移动构造函数

常常用作性能优化，大批量复制对象实例

### 代码实例

类中加一个 move custructor
修饰符用&&来表示

Person(Person &&p) {
num = p.num;
// 需要直接赋值后删除临时创建的 p.num
p.num = nullptr;
}

file: person.h

```cpp
#ifndef PERSON_H
#define PERSON_H

#include <iostream>

class Person
{
public:
  int *num{0};
  int age{2};
  Person(int age, int *num) : age(age), num(num)
  {
    std::cout << "Custructor" << std::endl;
  }

  ~Person()
  {
    std::cout << "~Person()" << std::endl;
    delete num;
  }

  Person(Person &&p);

  int get_age();

  Person *dui_print_age();

  Person *dui_set_age(int age);

  Person &zhan_print_age();

  Person &zhan_set_age(int age);

  Person &print_object();
};

#endif
```

file: person.cpp

```cpp
#include "person.h"

Person::Person(Person &&p)
{
  std::cout << "Move Custructor" << std::endl;
  this->age = p.age;

  int *newNum = p.num;
  this->num = newNum;
  p.num = nullptr;
}

int Person::get_age()
{
  return this->age;
}

Person *Person::dui_print_age()
{
  std::cout << "age=" << age << std::endl;
  return this;
}

Person *Person::dui_set_age(int age)
{
  this->age = age;
  return this;
}

Person &Person::zhan_print_age()
{
  std::cout << "age=" << age << std::endl;
  return *this;
}

Person &Person::zhan_set_age(int age)
{
  this->age = age;
  return *this;
}

Person &Person::print_object()
{
  std::cout << "print_object: { 'age': " << this->age << ", 'num': " << *(this->num) << " }" << std::endl;
  return *this;
}
```

### 在主函数中使用

file: main.cpp

```cpp
#include <iostream>
#include "person.h"

using namespace std;

int main() {
  int *num = new int(20);
  Person person_zhan = move(Person(2, num));
  person_zhan.print_object();

  return 0;
}
```
