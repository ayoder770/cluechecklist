 var this_round = 3;
  
$(function(){
    $('#name_form').on('submit', function(e){
        e.preventDefault();
        document.getElementById("name_form_cont").style.display = "none";
        
        for(var i=0; i<5; i++){
            
            var fname;
            fname = "PN_"+(i+1);
            
            var holder;
            holder = "P_"+(i+1);
            
            var name;
            name = "P"+(i+1);
            
            if( name != ""){
                document.getElementById(holder).placeholder = document.getElementById(fname).value;
                document.getElementById(name).innerHTML = document.getElementById(fname).value;
            } else{
               document.getElementById(holder).placeholder = "N/A";
               document.getElementById(name).innerHTML = "N/A"; 
            }
            
            document.getElementById(fname).value = '';
        }   
    });                 
}); 


$(function(){
    $('#score_form').on('submit', function(e){
        e.preventDefault();
        document.getElementById("score_form").classList.toggle('toggle_form');
                
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



function enter_scores(){
    document.getElementById("score_form").classList.toggle('toggle_form');
}