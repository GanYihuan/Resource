/**
 * Created by ganyihuan on 16/6/1.
 */


var app = angular.module('myApp',[]).controller('myCtrl',function ($scope) {
    $scope.date = new Date();

    setInterval(function () {
        // setTimeout()来更新一个scope model
        // 指令用来设置一个DOM事件listener并且在该listener中修改了一些models
        //手动触发脏检查,就是刷新数值

        // 如果你在AngularJS上下文之外的任何地方修改了model，
        // 那么你就需要通过手动调用$apply()来通知AngularJS。
        // $digest循环不会只运行一次。在当前的一次循环结束后，
        // 它会再执行一次循环用来检查是否有models发生了变化。这就是脏检查(Dirty Checking)，
        $scope.$apply(function () {
            $scope.date = new Date();
        });
    },1000);
});


