angular.module('app').directive('rollOnScroll', function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            window.onscroll = function () {
                var rotation = `rotateZ(${window.scrollY}deg)`;
                console.log(window.scrollY)
                elem[0].style.transform = rotation;
            }
        }
    }
});