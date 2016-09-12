angular.module('app').directive('ngBlur', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function($scope, $element, $attrs, ngModel) {
            $element.on('blur', function(){
                if(ngModel.$invalid){
                    $element.addClass('blur');
                }else{
                    $element.removeClass('blur');
                }
            });
        }
    }
});