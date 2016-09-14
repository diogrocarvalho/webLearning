angular.module('app').directive("ngCadastroSubmit",function(){
    return{
        restrict:'E',
        require:'^form',
        scope:{
            submit:'&'
        },
        template: '<button type=submit class="btn btn-primary">Enviar</button>',
        link:function($scope, $element, $atrrs, formCtrl){
            $element.on('click', function(){
                if(formCtrl.$valid){
                    $scope.submit();
                }else{
                    alert("Formulário com Erros!");
                }
            });
        }
    }
});