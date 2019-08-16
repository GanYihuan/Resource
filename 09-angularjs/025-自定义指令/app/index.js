/**
 * Created by ganyihuan on 16/6/1.
 */


var app = angular.module('myApp',[], ['$compileProvider', function ($compileProvider) {
    
    //自定义指令
    $compileProvider.directive('customTags', function () {
        return {
            //限制,定义如何在html显示
            /**
             * E:元素
             * C:样式类  class=""
             * A:属性
             * M:注释
             */
            restrict: "ECAM",
            //模板
            template: '<div>custom-tags-html</div>',
            //执行了几次
            compile: function () {
                console.log(1);
            },
            //替换指令所在元素
            replace: true
        }
    })
}])
    
    .directive(function () {
    //    自定义指令
    })
    
    .controller('myCtrl',function ($scope) {
        
    });




