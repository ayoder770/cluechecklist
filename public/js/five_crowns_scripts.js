 var this_round = 3;

$(function(){
            $('#score_form').on('submit', function(e){
            e.preventDefault();
              //   var P1_score = document.getElementById("P_1").value;
              //   var P2_score = document.getElementById("P_2").value;
              //   var P3_score = document.getElementById("P_3").value;
              //   var P4_score = document.getElementById("P_4").value;
              //   var P5_score = document.getElementById("P_5").value;
         
//alert(P1_score);
              //  alert(P2_score);

               document.getElementById("P1").innerHTML = "Andrew";
                
                for(var i=0; i<5; i++){
                   
                    var s_new_cell;
                    s_new_cell = 'p' + (i+1) + '_' + this_round + '_n';
                    var s_upd = 'p' + (i+1) + "_" + this_round + "_u";
                 //   alert(s_new);
                    
                    
                    var s_get;
                    s_get = 'P_'+(i+1);
                    alert(s_get);
                
                    document.getElementById(s_new_cell).innerHTML = document.getElementById(s_get).value;
                    
                    
                  //  $(s_new).innerHTML = "P"+(i+1)+"_score";
                    
                    
                  //  $(s_new).innerHTML = "P";
                    
                    
                }
                
                
                
      
});
                   
}); 