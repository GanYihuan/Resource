var app = angular.module('myApp', [], ['$provider', function ($provider) {
    console.log('config');
    //$provider.factory
    //$provider.service
    //$provider.constant
    //$provider.value
}])

    .config(function (APIKEY) {
        console.log(APIKEY);
        console.log('config');
    })

    //config之后controller服务之前
    .run(function () {
        console.log('run');
    })

    //    注入任何方法
    //    声明常量
    .content('APIKEY', 'xxx')

    //    注入controller...service factory
    .value('vension', '1.0.0')

    .controller('myCtrl', ['APIKEY','vension', function (APIKEY,vension) {
        console.log(APIKEY);
        console.log(vension);
        console.log('controller');
    }]);
