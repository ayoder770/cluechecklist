 var this_round = 3;

$(function(){
    $('#score_form').on('submit', function(e){
        e.preventDefault();
                
            for(var i=0; i<5; i++){
                   
                // SET UP VARIABLE FOR NEW SCORE CELL
                var s_new_cell;
                s_new_cell = 'p' + (i+1) + '_' + this_round + '_n';
                    
                // SET UP VARIABLE FOR UPDATE SCORE CELL
                var s_upd_cell;
                s_upd_cell = 'p' + (i+1) + "_" + (this_round) + "_u";
                 
                // SET UP VARIABLE FOR FORM SCORES
                var s_get;
                s_get = 'P_'+(i+1);
                     
                document.getElementById(s_new_cell).innerHTML = document.getElementById(s_get).value;
                
                 if(this_round === 3 ){
                     document.getElementById(s_upd_cell).innerHTML = document.getElementById(s_get).value;
                 } else{
                     
                     // SET UP VARIABLE FOR PREVIOUS ROUNDS TOTAL SCORE
                     var s_old_total;
                     s_old_total = 'p' + (i+1) + "_" + (this_round - 1) + "_u";
                     
                     document.getElementById(s_upd_cell).innerHTML = Number(document.getElementById(s_get).value) + Number(document.getElementById(s_old_total).innerHTML);
                 }   
                       
            }
        this_round++;
    });                 
}); 