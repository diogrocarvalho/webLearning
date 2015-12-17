function boxCreator(){
     var statusNames = ["HP", "Attack", "Defense", "Special Attack", "Special Defense", "Speed"];
     var statusIds = ["hp","at","de","sa","sd","sp"];
    console.log("meeet");
    
    for (var i=0; i<6; i++){
      $('#global-container > .fixedwidth:last-child').append(
          '    <div id="status-container-'+statusIds[i]+'" class="status-container">' +
               ' <h2>'+statusNames[i].trim()+'</h2>                ' +
                
                '<div class="target-box">' +
                    
                 '   <input type="button" value="Set Target" data-status-button="'+statusIds[i]+'" class="setTargetButton"/>' +
            '         <span class="right">'+
           '         <input type="number" min="0" max="252" value="0" name="target" id="target-'+statusIds[i]+'" class="target-value"/>' +
          '          </span>' +
         '       </div>' +
                
        '        <div class="spend-box, boxes">' +
       '             <label for="ev-spend-'+statusIds[i]+'">EV Spend</label>' +
      '              <span class="right">'+
     '                   <input type="text" name="ev-spend" id="ev-spend-'+statusIds[i]+'" value="0" />' +
    '                </span>' +
     '           </div>' +
               
   '             <div class="remaining-box, boxes">' +
  '                  <label for="ev-spend-'+statusIds[i]+'">EV Remaining</label>' +
 '                   <span class="right">' +
'                        <input type="text" name="ev-remaining" id="ev-remaining-'+statusIds[i]+'" maxlength="3" value="0"/>' +
'                    </span>' +
'                </div>' +
                
                '<div class="missed-box, boxes">' +
                   ' <label for="ev-missed-'+statusIds[i]+'">EV Missed</label> ' +
                  '  <span class="right">' +
                 '       <input type="text" name="ev-missed" id="ev-missed-'+statusIds[i]+'" value="0"/>' +
                 '   </span>' +
                '</div>' +
                '<div class="center">' +
                '     <input type="button" value="1"  data-status-add="'+statusIds[i]+'" class="sumButton"/>' +
               '      <input type="button" value="4"  data-status-add="'+statusIds[i]+'" class="sumButton"/>' +
              '       <input type="button" value="8"  data-status-add="'+statusIds[i]+'" class="sumButton"/>' +
             '        <input type="button" value="12" data-status-add="'+statusIds[i]+'" class="sumButton"/>' +
            '    </div>' +
                
            '</div>' );
    
    
    
    }
}

function boxCreator2() {    
    $("#global-container > .fixedwidth:last-child").append("<div><p>hello world</div>");    
    
}