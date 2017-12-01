angular.module('app')
.component('myComponent', {
    templateUrl: './js/components/firstComponent/myComponent.html',
    controller: MyComponentController,    
});

function MyComponentController () {
    var vm = this;
    this.text = 'Component';
}