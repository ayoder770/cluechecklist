 var this_round = 3;

$(function(){
            $('#score_form').on('submit', function(e){
            e.preventDefault();
                 var P1_score = $("P_1").val();
                 var P2_score = $("P_2").val();
                 var P3_score = $("P_3").val();
                 var P4_score = $("P_4").val();
                 var P5_score = $("P_5").val();
         
             //   console.log("Hello");

               document.getElementById("P1").innerHTML = "Andrew";
                
                for(var i=0; i<5; i++){
                    var one = "#p";
                    var s_new = one + (i+1) + "_" + this_round + "_n";
                    var s_upd = one + (i+1) + "_" + this_round + "_u";
                    alert(s_new);
                    $(s_new).innerHTML = "P"+(i+1)+"_score";
                    
                    
                    $(s_new).innerHTML = "P";
                    
                    
                }
                
                
                
      
});
                   
}); 