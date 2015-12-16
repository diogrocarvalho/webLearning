var evTarget         = 0,    //target ev on actual status
    evRemaining      = 0,    //ev remaing to spend on actual status
    totalStatusSpend = 0,    //ev spend on actual status
    geralEVRemaing  = 0,
    geralEVSpend    = 0,
    missedEV        = 0,
    EVMAX_STATUS    = 252,  //MAX EV can reach in game in each status
    EVMAX_GAME      = 510,
    isHPMax  = false,
    isATKMax = false,
    isDEFMax = false,
    isSPMax  = false,
    isSDMax  = false,
    isSEMAX  = false;

// visual parts
var $row;
var totalStatusSpendBox, //total ev spend in that status
    currentStatusBox, //name of current status (hp, speed, etc..)
    evRemaingBox, //ev remaining to reach the target in that status
    evMissedBox;   //ev passed from the target

$( document ).ready(function() {
    
    //set global variables
    geralEVSpend = parseInt($("#totalEVSpend").text());
    geralEVRemaing = parseInt($("#totalEVRemaining").text());
    //$("#ev-table input.setTargetBox[type=button]").attr("disabled","enable");
    
    $("input[type=button]").attr('disabled', 'disabled');
    $(".setTargetBox").prop('disabled', false);
    
});
function setClickedRow(buttonClicked){
    $row = $(buttonClicked).closest("tr");
}

function setVisualVariablesAfterClick() {
    totalStatusSpendBox = $row.find(".totalStatusSpend");
    currentStatusBox    = $row.find(".statusName");
    evRemaingBox = $row.find('.remainingEv');
    evMissedBox = $row.find('.missedEv');
}


function updateInAdd(num) {
   
    //ev gasto acima dos 252
    var evextra = 0;
    
    totalStatusSpend += num;
    evRemaining      -= num;
    geralEVRemaing   -= num;
    geralEVSpend     += num;
    
    //verifica se o alvo foi alcançado (target)
    if(totalStatusSpend >= evTarget){
        evRemaingBox.text(0);    
    }else{
        evRemaingBox.text(evRemaining);
    }
    
    
    //condição se passou do máximo que um ev pode ser upado, 252 nesse caso
    if(totalStatusSpend > 252){
        evextra = totalStatusSpend - 252;
        totalStatusSpend = 252;
        geralEVRemaing   += evextra;
        geralEVSpend     -= evextra;        
        evRemaining      += num;
    }
    
    if(evRemaining <= 0) {
        evMissedBox.text(Math.abs(evRemaining)); //calcula o excesso de evs gasto
    }
    
    totalStatusSpendBox.text(parseInt(totalStatusSpend));
    
    $("#totalEVRemaining").text(geralEVRemaing);
    $("#totalEVSpend").text(geralEVSpend);    
}



function isMaxed(status, totalStatusSpend){
    if(totalSpend = evTarget){
        switch(status){
            case "HP":
                isHPMax = true;
                break;
            case "Attack":
                isATKMax = true;
                break;
            case "Defense":
                isDEFMax = true;
                break;
            case "Special Attack":
                isSPMAX = true;
                break;
            case "Special Defense":
                isSDMax = true;
                break;
            case "Speed":
                isSEMAX = true;
                break;
        }
        return true;
    }
    
    return false;
    
}


//ao clicar em um botão entra nessa função (função para adicionar os pontos de ev)
$('table input[type="button"]').click(function() {
     
    num = 0; //usado para realizar a soma do conteúdo da celula Total Spend com o valor do botão
            
    var button_text = $(this).val();
    
    setClickedRow($(this));
    setVisualVariablesAfterClick(); 
    
    switch (button_text){
        case '+1':
            num = 1;
            break;            
        case '+4':
            num = 4;
            break;
        case '+8':
            num = 8;
            break;
        case '+12':
            num = 12;
            break;
    }
    
    
    updateInAdd(num); //atualiza os valores ao apertar o botão de adicionar ev
    
    isMaxed(currentStatusBox.text());
    });

function updateTarget(insertedValue){
    evTarget = insertedValue;
    evRemaining = evTarget - totalStatusSpend;
    
    
    
    if(evRemaining <= 0) {
        evMissedBox.text(Math.abs(evRemaining)); //calcula o excesso de evs gasto
        evRemaingBox.text(0);
    }else if(evRemaining > 0){
        evMissedBox.text(0); //calcula o excesso de evs gasto
        evRemaingBox.text(evRemaining);
    }else{
        evRemaingBox.text(evRemaining);        
    }
    
    
    
}

function unlockRowButtons(buttonClicked) {    
    $row = $(buttonClicked).closest('tr');
    $row.find('.sumButton').removeAttr('disabled');    
}

//validates inserted value (if it is a number and it is in valide range)
function validateInsertedValue(insertedValue){
   var errorTxt = "Invalid Number: ";
    if(isNaN(insertedValue) || insertedValue == ""){
        alert(errorTxt + "Type or select a valid number!");
        return false;        
    }else if(insertedValue < 0 || insertedValue > 252){
        alert(errorTxt + "Type or select a number between 0 and 252!");
        return false;
    }
    
    return true;
}

$("#ev-table input.setTargetBox[type=button]").each( function () {
        $(this).click(function( ){
            
             var clickedButton = $(this),
                 targetBox = $(this).parent().parent().find('.targetBox'),
                 insertedValue = targetBox.val(),
                 evRemainingBox = clickedButton.parent().parent().find('.remainingEV');
                 ;
            
            //se o campo target estiver desabilitado muda o nome do botão e libera a edição
            if(targetBox.is(":disabled")){                
                clickedButton.val('Set Target Value');
                targetBox.attr("disabled", false);
                
            }else{
                if(validateInsertedValue(insertedValue)){
                     clickedButton.val('Edit Target Value');
                     targetBox.attr("disabled", true);
                     unlockRowButtons($(this));
                     updateTarget(insertedValue);
                     
                }else{
                    targetBox.val(0);                    
                }
               
            }
        });
});

