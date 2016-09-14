
angular.module('app').config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'cadastro.html',
            controller: 'cadastroCtrl'
        });
});



angular.module('app').config(function ($routeProvider) {
    $routeProvider
        .when('/hello', {
            templateUrl: 'hello.html',
            controller: 'cadastroCtrl'
        });
});