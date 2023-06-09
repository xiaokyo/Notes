# cmake配置文件CMakeLists.txt一些配置记录

### 配置多文件编译
```
# 配置src目录为cpp文件集合, 取出cpp文件集合放到DIR_SRCS变量
aux_source_directory(./src DIR_SRCS)

# 添加到执行命令
add_executable(cmake_demo main.cpp ${DIR_SRCS})
```

### 配置vcpkg依赖目录
```
set(CMAKE_TOOLCHAIN_FILE /Users/xiaokyo/Documents/works/cpp-works/vcpkg/scripts/buildsystems/vcpkg.cmake)

include_directories(/Users/xiaokyo/Documents/works/cpp-works/vcpkg/installed/arm64-osx/include)
link_directories(/Users/xiaokyo/Documents/works/cpp-works/vcpkg/installed/arm64-osx/lib)
```



