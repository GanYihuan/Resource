/**
 * Created by ganyihuan on 16/6/1.
 */

var i = 0;

var app = angular.module('myApp', [])

    .directive('bookList', function () {
        return {
            restrict: 'ECAM',
            controller: function ($scope) {
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

                this.addBook = function () {
                    $scope.$apply(function () {
                        $scope.books.push({
                            name: 'c++'
                        })
                    });
                }
            },
            controllerAs: 'bookListController',
            template: '<div><ul><li ng-repeat="book in books">{{book.name}}</li></ul><book-add></book-add></div>',
            replace: true
        }
    })

    .directive('bookAdd', function () {
        return {
            restrict: 'ECAM',
            //连接数据books
            //dom结构,往上级找指令
            require: '^bookList',
            template: '<button type="button">add</button>',
            replace: true,
            link: function (scope, iElement, iAttrs, bookListController) {
                //iElement等于template
                iElement.on('click', bookListController.addBook);
            }
        }
    })

    .controller('myCtrl', ['$scope', function ($scope) {

    }]);

