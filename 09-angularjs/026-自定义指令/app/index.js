/**
 * Created by ganyihuan on 16/6/1.
 */

var app = angular.module('myApp', [])

    .directive('customTags', function () {
        return {
            restrict: 'ECAM',
            //div是必须的
            // template: '<div>aaa</div>',
            templateUrl: 'tmp/a.html',
            replace: true
        }
    })

    .directive("customTags2", function () {
        return {
            restrict: "ECAM",
            templateUrl: "customTags2",
            replace: true
        }
    })

    .controller("myCtrl", ["$scope", function ($scope) {
        $scope.name = "gan";
    }

    ]);



