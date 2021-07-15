# 如何使用angularjs中的directive

### 针对的版本

> angular1.x

### 代码使用

```javascript
angular.module('myModule')
.component(...)
.directive("repeatFinish", function() {
      return {
        link: function($scope, element, attr) {
          if(!$scope.$last) return // 是否最后一个元素
          const type = attr.repeatFinish
          if(type == "checkLogistic") {
            // 检查物流是否渲染完成
            $scope.checkship($scope.logisticList[0])
          }
        },
      };
    });
```

