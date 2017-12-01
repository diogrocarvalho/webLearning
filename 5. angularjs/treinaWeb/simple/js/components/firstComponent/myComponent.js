angular.module('app')
.component('myComponent', {
    templateUrl: './js/components/firstComponent/myComponent.html',
    controller: MyComponentController,
    bindings: {
        text: '<'
    }
});

function MyComponentController () {
    var vm = this;
    this.text = 'Component';
}