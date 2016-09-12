angular.module('app').controller('cadastroCtrl', function ($scope) {
    /*  seta o valor dos campos nome e email  
        $scope.nome = 'Diogo Carvalho';
        $scope.email = 'diogo@carvalho.com';
    */
    $scope.users = [];
    $scope.cadastrar = function (user) {
        $scope.users.push(angular.copy(user));
        
        //ordena um array
        $scope.users.sort(function (a, b) {
            if (a.nome < b.nome)
                return -1;
            if (a.nome > b.nome)
                return 1;
            return 0;
        });

        $scope.users.forEach(function (item, index) {
            console.log(item.nome);
            console.log(index);
        });
    };
});