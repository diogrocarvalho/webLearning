angular.module('app')
.component('myComponent', {
    templateUrl: './js/components/firstComponent/myComponent.html',
    controller: MyComponentController,
    bindings: {
        pkm: '='
    }
});

function MyComponentController () {

}