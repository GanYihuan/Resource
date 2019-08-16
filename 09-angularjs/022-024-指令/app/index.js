/**
 * Created by ganyihuan on 16/6/1.
 */

var app = angular.module('myApp',[])
    
    .controller('myCtrl',function ($scope) {
        $scope.status = false;
        
        $scope.changeStatus = function (event) {
            //angular.element:   js->jq转换
            angular.element(event.target).html("切换为: " + $scope.status);
            $scope.status = !$scope.status;
        };
    
        $scope.defaultStyle = {color: 'red','margin-left':'50px'};
        
        $scope.src = "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png";
    });