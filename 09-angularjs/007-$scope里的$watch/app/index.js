/**
 * Created by ganyihuan on 16/6/1.
 */

var app = angular.module('myApp',[])
    .controller('myCtrl',function ($scope) {

        $scope.name = 'ganyihuan';
        $scope.count = 0;
        $scope.data = {
            name:'gan',
            age:'23'
        };

        //$watch监听变量,model改变触发
        $scope.$watch('name',function (newValue,oldValue) {
            ++$scope.count;
            if($scope.count > 3){
                $scope.name = 'ganyihuan bigger 3';
            }
        });

        //$watch监听变量,model改变触发,true为监听整个对象,对象有一个值改变即触发
        $scope.$watch('data',function (newValue,oldValue) {
            ++$scope.count;
            if($scope.count > 3){
                $scope.name = 'ganyihuan bigger 3';
            }
        },true);


        // $digest循环最少也会运行两次，即使在listener函数中并没有改变任何model。
        // 当$digest循环开始后，它会触发每个watcher
        // watchers会检查scope中的当前model值是否和上一次计算得到的model值不同
        // 如果不同，那么对应的回调函数会被执行
        // 所以一开始count=2,因为调用了两次$watch

    });

