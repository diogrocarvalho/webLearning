//ao clicar em um botão entra nessa função (função para adicionar os pontos de ev)
$('table input[type="button"]').click(function() {
    
    var $row = $(this).closest("tr"), //pega a linha do botão que foi clicado
        $tds = $row.find("td:nth-child(2)"), //pega a celula Total Spend da linha que o botão foi clicado
        sum = 0; //usado para realizar a soma do conteúdo da celula Total Spend com o valor do botão
        
    var button_text = $(this).val();
    
    switch (button_text){
        case '+1':
            sum = 1
            break;            
        case '+4':
            sum = 4
            break;
        case '+8':
            sum = 8
            break;
        case '+12':
            sum = 12
            break;
    }    
    var soma = parseInt($tds.text()) + sum;
    $tds.text(soma);
    
    });
//TODO validar o campo Target
function validateInsertedTarget(target){
    
    
    if(isNaN($tds.val())){
        return false;
    }
    
    return true;
}

$("#ev-table input.setTargetBox[type=button]").each(    function () {
        $(this).click(function( ){  
            //se o campo target estiver desabilitado muda o nome do botão e libera a edição
            if($(this).parent().parent().find('.targetBox').is(":disabled")){                
                $(this).val('Set Target Value');
                $(this).parent().parent().find('.targetBox').attr("disabled",false);
            }else{
                if(validateInsertedTarget($(this))){
                    alert("true");
                     $(this).val('Edit Target Value');
                     $(this).parent().parent().find('.targetBox').attr("disabled", true);
                }else{
                    alert("It's not a valide value");
                }
               
            }
                                 });
    });

/*útil para pegar os valores e jogar no banco ou persistir
    
        $.each($tds, function() {                // Visits every single <td> element
        console.log($(this).text());         // Prints out the text within the <td>
        });
    */
    //cell = $(this).parent().prev().prev().prev();
        //cell.text(parseInt(cell.text()) + 1);