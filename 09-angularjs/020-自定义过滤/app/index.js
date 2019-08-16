/**
 * Created by ganyihuan on 16/6/1.
 */

var app = angular.module('myApp',[],function ($filterProvider, $provide, $ControllerProvider) {
    
     $provide.service('Data',function () {
         return[
             {
                 name:"gan",
                 age:"23",
                 city:"shenzhen"
             },{
                 name:'ganyi',
                 age:'30',
                 city:'heyuan'
             }
         ];
     });

    //.register注册
    $filterProvider.register('filterAge',function () {
        return function (obj) {
            var newobj = [];
            angular.forEach(obj, function (o) {
                if(o.age > 29){
                    newobj.push(o);
                }
            });
            return newobj;
        }
    });

    $ControllerProvider.register('myCtrl',function ($scope, Data) {
        $scope.data = Data;
    });

})
    
    .filter('filterCity', function () {
        return function (obj) {
            var newobj = [];
            angular.forEach(obj, function (o) {
                if(o.city === 'heyuan'){
                    newobj.push(o);
                }
            });
            return newobj;
        }
    })

    .controller('myCtrl',function ($scope, Data) {
        $scope.data = Data;
    });
