boxCreator();

$( document ).ready(function() {
    
    $("input[type=button]").attr('disabled', 'disabled');
    $("input[type=text]").attr('disabled', 'disabled');
    $(".setTargetButton").prop('disabled', false);
//    
});

var currentStatus = null; //id of current status
var statusIds = ["hp","at","de","sa","sd","sp"];
var evTarget         = 0,    //target ev on actual status
    evRemaining      = 0,    //ev remaing to spend on actual status
    totalStatusSpend = 0,    //ev spend on actual status
    geralEVRemaing  = 0,
    geralEVSpend    = 0,
    missedEV        = 0;

// visual parts
var totalStatusSpendBox, //total ev spend in that status    
    evRemaingBox, //ev remaining to reach the target in that status
    evMissedBox;   //ev passed from the target

//validates inserted value (if it is a number and it is in valide range)
function validateInsertedValue(insertedValue){
    var errorTxt = "Invalid Number: ";
    var sum = 0, sumSpend = 0;
    var aux = 0;
    

    
    for( var i=0; i<6; ++i){
        sum+= parseInt($('#target-'+ statusIds[i]).val());        
    }
    
    for( var i=0; i<6; ++i){
        sumSpend+= parseInt($('#ev-spend-'+ statusIds[i]).val());        
    }
    
    if(sum > 510 || sumSpend > 510){
        alert("You can't distribute more than 510 EV.");
        return false;
    }
    
    
    if(isNaN(insertedValue) || insertedValue == ""){
        alert(errorTxt + "Type or select a valid number!");
        return false;        
    }else if(insertedValue < 0 || insertedValue > 252){
        alert(errorTxt + "Type or select a number between 0 and 252!");
        return false;
    }
    return true;
}

function setCurrentStatus(clickedButton) {
    
    if(clickedButton.hasClass("sumButton")) {
        currentStatus = clickedButton.data('status-add');
    }
    if(clickedButton.hasClass("setTargetButton")) {
        currentStatus = clickedButton.data('status-button');
    }
}

function unlockRowButtons(buttonClicked) {    
    $('#status-container-'+currentStatus).find('.sumButton').removeAttr('disabled');    
}

function canAddMore(){
    if(totalStatusSpend == 252) {
        return false;
    }
    return true;
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
        evRemaingBox.val(0);    
    }else{
        evRemaingBox.val(evRemaining);
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
        evMissedBox.val(Math.abs(evRemaining)); //calcula o excesso de evs gasto
    }
    
    totalStatusSpendBox.val(parseInt(totalStatusSpend));
    
    //evRemaingBox.text(geralEVRemaing);
    //$("#totalEVSpend").text(geralEVSpend);
}


function setVisualVariablesAfterClick() {
    totalStatusSpendBox = $('#ev-spend-'+currentStatus);    
    evRemaingBox = $('#ev-remaining-'+currentStatus);
    evMissedBox = $('#ev-missed-'+currentStatus);    
}

function updateTarget(insertedValue){
    evTarget = insertedValue;
    evRemaining = evTarget - totalStatusSpend;
    
    
    
    if(evRemaining <= 0) {
        evMissedBox.val(Math.abs(evRemaining)); //calcula o excesso de evs gasto
        evRemaingBox.val(0);
    }else if(evRemaining > 0){
        evMissedBox.val(0); //calcula o excesso de evs gasto
        evRemaingBox.val(evRemaining);
    }else{
        evRemaingBox.val(evRemaining);        
    }
    
    
    
}

$(".sumButton").click(function (){
    
    
    addNum = parseInt($(this).val());
    setCurrentStatus($(this));
    setVisualVariablesAfterClick();
    
    if(canAddMore()){
        updateInAdd(addNum); //atualiza os valores ao apertar o botão de adicionar ev
    }else{
        alert("You reach the max EV you can distribute into this status!");
    }
    
    
});

function setVariables(){
    evTarget         = parseInt($('#target-'+currentStatus).val()),
    evRemaining      = parseInt($('#ev-remaining-'+currentStatus).val()),    
    totalStatusSpend = parseInt($('#ev-spend-'+currentStatus).val()),
    geralEVRemaing   = 0,
    geralEVSpend     = 0,
    missedEV         = parseInt($('#ev-missed-'+currentStatus).val());

}

function resetVariables(){
    evTarget         = 0,
    evRemaining      = 0,    
    totalStatusSpend = 0
    geralEVRemaing   = 0,
    geralEVSpend     = 0,
    missedEV         = 0;
    evMissedBox.val(0);
    evRemaingBox.val(0);
    evTarget.val(0);
    totalStatusSpendBox.val(0);

}

function setCurrentStatus(clickedButton) {
    var aux_current_status = currentStatus;
    
    if(clickedButton.hasClass("sumButton")) {
        currentStatus = clickedButton.data('status-add');
    }
    if(clickedButton.hasClass("setTargetButton")) {
        currentStatus = clickedButton.data('status-button');
    }
    
    if(aux_current_status != currentStatus){
        setVariables();
    }
    
    
}



$(".setTargetButton").click(function() {
        var clickedButton = $(this);
    
        setCurrentStatus(clickedButton);
        setVisualVariablesAfterClick();
    
        var targetBox = $('#target-'+currentStatus);            
        var insertedValue = targetBox.val();
            
    
        //se o campo target estiver desabilitado muda o nome do botão e libera a edição
            if(targetBox.is(":disabled")) {                
                clickedButton.val('Set Target Value');
                targetBox.attr("disabled", false);
                
            }else{
                if(validateInsertedValue(insertedValue)) {
                    if(insertedValue == 0 ){
                        resetVariables();
                    }else{
                     clickedButton.val('Edit Target Value');
                     targetBox.attr("disabled", true);
                     unlockRowButtons(clickedButton);
                     updateTarget(insertedValue);
                    }
                }else{
                    targetBox.val(0);                    
                }
               
            }
    
    
});