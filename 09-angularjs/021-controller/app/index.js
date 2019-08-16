/**
 * Created by ganyihuan on 16/6/1.
 */

var app = angular.module('myApp', [], function () {

})

    .factory('mySer', ["$window", function (a) {
        console.log(a);
    }])

    .controller('myCtrl', function ($scope, mySer) {
        /**
         * 隐式依赖注入
         */
        console.log(mySer);
    })

    .controller('myCtr2', ['$scope', '$filter', function (a,b) {
        /**
         * 推荐写法
         * 显式的依赖注入
         */
        console.log(b('json')([1, 2, 3]));
    }]);

function othermyCtrl(a) {
    console.log(a);
}

//注入
othermyCtrl.$inject = ['$scope'];

