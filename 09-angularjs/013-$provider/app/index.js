/**
 * Created by ganyihuan on 16/6/1.
 */


var app = angular.module('myApp',[],function ($provide) {
//    自定义服务
    $provide.provider('mySer', function () {
        this.$get = function () {
            return{
                message: 'mySer msg'
            }
        }
    });
    
    $provide.provider('mySer2', function () {
        this.$get = function () {
            return{
                message: 'mySer msg2'
            }
        }
    });
    
}).controller('myCtrl',function ($scope,mySer,mySer2) {
    $scope.name = 'ganyihuan';
    console.log(mySer);
    console.log(mySer2);
});


