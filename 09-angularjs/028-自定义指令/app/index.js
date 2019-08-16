/**
 * Created by ganyihuan on 16/6/1.
 */

var i = 0;

var app = angular.module('myApp',[])

    .directive('customTags', function () {
        return{
            //html转换为dom
            restrict: 'ECAM',
            //有两个directive时只能有一个template
            template: '<div>{{user.name}}</div>',
            replace: true,
            //compile能改变dom结构,返回link函数,不必重复定义link函数
            //tElement当前元素jq对象
            //tAttrs当前元素属性
            compile: function (tElement, tAttrs, transclude) {
                console.log("customtags compile编译阶段");
                //tElement为jq内置对象   angular.element 相似于jq $(document){}
                tElement.append(angular.element('<div>{{user.name}}{{user.count}}</div>'));
                return {
                    //preLink
                    pre: function preLink(scope, iElement, iAttrs, controller) {
                        console.log("preLink阶段,customtags编译阶段后指令连接到子元素之前的运行");
                    },
                    //postLink
                    post: function postLink(scope, iElement, iAttrs, controller) {
                        iElement.on('click',function () {
                            scope.$apply(function () {
                                scope.user.name = 'click after';
                                scope.user.count = ++i;
                            });
                        });
                        console.log("postLink阶段,customtags所有子元素指令连接之后才运行");
                    }
                };
                //直接返回postLink
                // return postLink function () {
                //
                // }
            }
            //此link表示postLink,能绑定事件
            // link: function () {
            //     console.log("不会执行");
            // }
        }
    })

    .directive('customTags2', function () {
        return{
            //html转换为dom
            restrict: 'ECAM',
            replace: true,
            compile: function (tElement, tAttrs, transclude) {
                console.log("customtags2 compile编译阶段");
                return {
                    //preLink
                    pre: function preLink() {
                        console.log("preLink阶段,customtags2编译阶段后指令连接到子元素之前的运行");
                    },
                    //postLink
                    post: function postLink() {
                        console.log("postLink阶段,customtags2所有子元素指令连接之后才运行");
                    }
                };
                //直接返回postLink
                // return postLink function () {
                //
                // }
            }
        }
    })

    .controller('myCtrl', ['$scope', function ($scope) {
        $scope.users = [
            {
                id:10,
                name:'zhangsan'
            },{
                id:20,
                name:'lisi'
            }
        ]
    }]);