angular.module(app).component('myComponent', {
    templateUrl:'myComponent.js',
    controller: MyComponentController
})

function MyComponentController() {
    var vm = this;
    this.text = 'Ronaldo';
}