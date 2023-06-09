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


### 配置静态链接库 (例子: curl)

```
# curl
find_package(CURL REQUIRED)

if(CURL_FOUND)
  include_directories(${CURL_INCLUDE_DIR})
  message(STATUS "Curl Found: ${CURL_VERSION_STRING} ${CURL_LIBRARIES} ${CURL_LINK_LIBRARIES}!")
else(CURL_FOUND)
  message(FATAL_ERROR "Could not find the CURL library and development files.")
endif()

add_executable(today-sale-price-update main.cpp ${DIR_SRCS})

# 必须放在add_executable之后 today-sale-price-update 保持一致
target_link_libraries(today-sale-price-update ${CURL_LIBRARIES})

```

