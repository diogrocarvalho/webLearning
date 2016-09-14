angular.module('app').controller('cadastroCtrl', function ($scope) {
    /*  seta o valor dos campos nome e email  
        $scope.nome = 'Diogo Carvalho';
        $scope.email = 'diogo@carvalho.com';
    */
    $scope.users = [];
    
  
    $scope.cadastrar = function (user, formIsValid) {
       
        //Validação em controller
        //if(formIsValid){
         
            $scope.users.push(angular.copy(user));
        //}else{
            //Alert se o formulári for inválido (se a validação for no controlador)
            //alert("Formulário inválid");
        //}
        
        //FIM__Validação em controller
        
        //ordena um array
        $scope.users.sort(function (a, b) {
            if (a.nome < b.nome)
                return -1;
            if (a.nome > b.nome)
                return 1;
            return 0;
        });
        //FIM_ ordena um array
        
        //for_each
        $scope.users.forEach(function (item, index) {
            console.log(item.nome);
            console.log(index);
        });
    };
});