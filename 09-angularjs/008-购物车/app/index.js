/**
 * Created by ganyihuan on 16/6/1.
 */

var app = angular.module('myApp',[])
    .controller('myCtrl',function ($scope) {
    
    $scope.cart = [
        {
            id: 1000,
            name: '6s',
            quantity: 1,
            price: 1000
        },
        {
            id: 2000,
            name: '6s',
            quantity: 2,
            price: 1000
        },
        {
            id: 3000,
            name: '6s',
            quantity: 3,
            price: 1000
        },
        {
            id: 4000,
            name: '6s',
            quantity: 4,
            price: 1000
        }
    ];


    /**
     * 找一个元素的索引
     * @param id
     * @returns {number}
     */
    var findIndex = function (id) {
        var index = -1;
        angular.forEach($scope.cart,function (item,key) {
            if(item.id === id){
                index = key;
                return;
            }
        });
        return index;
    };


    /**
     * 添加一个元素
     * @param id
     */
    $scope.add = function (id) {
        var index = findIndex(id);
        if(index !== -1){
            ++$scope.cart[index].quantity;
        }
    };


    /**
     * 减少一个元素
     * @param id
     */
    $scope.reduce = function (id) {
        var index = findIndex(id);
        if(index !== -1){
            var item = $scope.cart[index];
            if(item.quantity > 1){
                --item.quantity;
            }else{
                var returnKey = confirm('delete this thing?');
                if(returnKey){
                    $scope.remove(id);
                }
            }
        }
    };


    $scope.remove = function (id) {
        var index = findIndex(id);
        if(index !== -1){
            $scope.cart.splice(index, 1);
        }
    };


    $scope.totalPrice = function () {
        var total = 0;
        angular.forEach($scope.cart,function (item) {
            total += item.quantity * item.price;
        });
        return total;
    };


    $scope.totalQuantity = function () {
        var total = 0;
        angular.forEach($scope.cart,function (item) {
            total += parseInt(item.quantity);
        });
        return total;
    };


    $scope.$watch('cart',function (newValue,oldValue) {
        angular.forEach(newValue,function (item,key) {
            if(item.quantity < 1){
                var returnKey = confirm('delete this thing?');
                if(returnKey){
                    $scope.remove(item.id);
                }else{
                    item.quantity = oldValue[key].quantity;
                }
                return;
            }
        });
    },true);
    
});


