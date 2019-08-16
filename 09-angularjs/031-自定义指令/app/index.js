/**
 * Created by ganyihuan on 16/6/1.
 */

var app = angular.module('myApp', [])

    .directive('bookList', function () {
        return {
            restrict: 'ECAM',
            controller: function ($scope) {
                //&books
                // $scope.books = $scope.a();

                //=books
                //$scope.b = parentBooks
                // $scope.books = $scope.b;
                // $scope.b.push({name:'nodejs'});

                //@
                console.log($scope.c);
            },
            //为true时创建一个有继承链的独立作用域
            //为false时,controller共享下面的controller数据
            // scope: false,
            //为对象时,创建一个独立作用域
            scope: {
                //&,将父元素books封装成一个a函数
                // a: '&books'

                //=,双向绑定b=parentBookss属性对应的父作用域的表达式
                // b: '=parentBooks'

                //@,引用简单数据类型的方法
                c: '@parentTitle'
            },
            controllerAs: 'bookListController',
            template: '<div><ul><li ng-repeat="book in books">{{book.name}}</li></ul><book-add></book-add></div>',
            replace: true
        }
    })

    .controller('myCtrl', ['$scope', function ($scope) {
        console.log($scope);
        $scope.books = [
            {
                name: 'php'
            },
            {
                name: 'js'
            },
            {
                name: 'java'
            }
        ];

        $scope.title = 'ganyihuan';
    }]);

