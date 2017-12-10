angular.module('app').directive('myDirective', function(){
    return {
        restrict: 'E',
        templateUrl: './js/directives/myDirective/myDirective.html',
        scope: {
            text: '=',
            myFunc: '='
        },
        link: function(scope, elem, attrs){
            var vm = scope;

            vm.onChange = function(){
                console.log('Function from Component', vm.text);
                vm.myFunc(vm.text);
            }
        }
    }
})