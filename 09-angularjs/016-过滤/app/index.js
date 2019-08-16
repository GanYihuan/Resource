/**
 * Created by ganyihuan on 16/6/1.
 */


var app = angular.module('myApp',[])
    
    .factory('Data',function () {
        return{
            message:'gongxiangshuju',
            city:[
                {
                    name:'上海',
                    py:'shanghai'
                },{
                    name:'北京',
                    py:"beijing"
                },{
                    name:'广州',
                    py:'guanzhou'
                }
            ]
        }
    })
    
    .controller('myCtrl1',function ($scope,Data,$filter) {
        $scope.data = Data;
        $scope.today = new Date;

        var number = $filter('number')(3000);
        //格式化,用于调试
        var jsonString = $filter('json')($scope.data);
        console.log(jsonString);

        $scope.checkName = function (obj) {
            if(obj.py.indexOf('h') === -1){
                return false;
            }
            return true;
        }
    });




