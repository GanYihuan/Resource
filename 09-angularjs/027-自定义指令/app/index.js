/**
 * Created by ganyihuan on 16/6/1.
 */


var app = angular.module('myApp',[])
    
    .directive('customTags',function () {
        return{
            restrict: 'ECAM',
            //div是必须的
            template: '<div>新数据 <span ng-transclude=""></span></div>',
            //保留原始数据
            transclude: true,
            replace: true
        }
    })

    .directive('customTags2',function () {
        return{
            restrict: 'ECAM',
            template: '<div>2</div>',
            replace: true,
            //优先级 默认从高向低执行,不写默认为0
            //不执行
            priority: -1
        }
    })

    .directive('customTags3',function () {
        return{
            restrict: 'ECAM',
            //div是必须的,多个指令里不能有两个template
            template: '<div>3</div>',
            replace: true,
            priority: 0,
            //只要priority小于0的directive都不会执行
            terminal: true
        }
    })

    .controller('myCtrl', ['$scope', function ($scope) {
        $scope.name = 'gan';
    }]);
