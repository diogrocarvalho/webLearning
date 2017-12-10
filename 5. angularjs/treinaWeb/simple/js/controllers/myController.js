angular.module('app')
.controller('myController', myController);

function myController () {
    var vm = this;
    vm.searchField = '';
    vm.text = 'Hello World';
    vm.pkmList = [
        {name: 'Bulbassaur', number: '001'},
        {name: 'Ivyssaur', number: '002'},
    ];

    vm.myFunc = function (value) {
        console.log('myFunc on myController');
        vm.text = value;
    };
}