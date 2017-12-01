angular.module('app')
.controller('myController', myController);

function myController () {
    var vm = this;
    vm.text = 'Hello World';
}