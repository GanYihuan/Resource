/**
 * Created by ganyihuan on 16/6/1.
 */


var app = angular.module('myApp',[])
    .factory('Data',function () {
        //this.$get() = function(){}
        return{
            message:'共享数据'
        }
    })

    .controller('myCtrl1',function ($scope,Data) {
        $scope.data = {
            name: 'ganyihuan'
        };
        $scope.Data = Data;
    })

    .controller('myCtrl2',function ($scope,Data) {
        $scope.data = $scope.$$prevSibling.data;
        $scope.Data = Data;
    });


