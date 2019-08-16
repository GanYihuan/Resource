var app = angular.module('myApp', [])

    .filter('cityFilter', function () {
        return function (data, parent) {
            var filterData = [];
            angular.forEach(data, function (obj) {
                if (obj.parent === parent) {
                    filterData.push(obj);
                }
            });
            return filterData;
        }
    })

    .directive('even', function () {
        return{
            require: 'ngModel',
            link: function (scrope, elm, attrs, ngModelController) {
                ngModelController.$parsers.push(function (viewValue) {
                    if(viewValue % 2 === 0){
                        ngModelController.$setValidity('even',true);
                    }else{
                        ngModelController.$setValidity('even',false);
                    }
                    return viewValue;
                });

                ngModelController.$formatters.push(function (modelValue) {
                    return modelValue + 'ganyihuan';
                })
            }
        }
    })

    .controller('myCtrl', function ($scope) {
        var that = this;
        $scope.hobbies = [
            {
                id: 1,
                name: 'a'
            },
            {
                id: 2,
                name: 'b'
            },
            {
                id: 3,
                name: 'c'
            }
        ];

        $scope.cities = [
            {
                name: '上海',
                parent: 0,
                id: 1
            },
            {
                name: '徐汇区',
                parent: 1,
                id: 2
            },
            {
                name: '徐汇街道',
                parent: 2,
                id: 2
            },
            {
                name: '深圳',
                parent: 0,
                id: 3
            },
            {
                name: '龙岗区',
                parent: 3,
                id: 4
            },
            {
                name: '布吉',
                parent: 4,
                id: 5
            }
        ];

        $scope.data = {
            hobbies: [1, 2],
            cities: 1
        };

        $scope.origData = angular.copy($scope.data);

        $scope.reset = function () {
            $scope.data = angular.copy($scope.origData);
            that.initCity();
            //$setPristine()回复默认状态
            $scope.myForm.$setPristine();
        };

        this.findCityId = function (parent) {
            var parentId;
            angular.forEach($scope.cities, function (city) {
                if (city.id === parent) {
                    parentId = city.parent;
                    return;
                }
            });
            return parentId;
        };

        this.initCity = function () {
            if ($scope.data.city !== undefined) {
                $scope.data.area = this.findCityId($scope.data.city);
                $scope.data.province = this.findCityId($scope.data.area);
            }
        };
        this.initCity.call(this);


        $scope.toggleHobbySelection = function (id) {
            var index = -1;
            if ($scope.data.hobbies === undefined) {
                $scope.data.hobbies = [];
            } else {
                index = $scope.data.hobbies.indexOf(id);
            }

            if (index === -1) {
                $scope.data.hobbies.push(id);
            } else {
                $scope.data.hobbies.splice(index, 1);
            }
        }
    });