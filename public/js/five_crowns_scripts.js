var current = 3;
var numberOfPlayers;

// Function to read number of players and build the form dynamically
$(function(){
    $('#player_number_form').on('submit', function(e){
    e.preventDefault();
        
    // Turn off the form as it is no longer needed
    document.getElementById("player_number_form").classList.toggle('display_block');
    document.getElementById("player_number_form").classList.toggle('display_none');
        
    // Set the number of players based on user input
    numberOfPlayers = document.getElementById("number_of_players").value;
        
    //Build the player name header
    var scoreHTML = "<div class='full_row'><div class='round'></div>";
    for(var i=1; i<= numberOfPlayers; i++){
        scoreHTML+="<div class='player' id='P"+i+"'>Plyr. "+i+"</div>";
    }
    scoreHTML+="</div>";
        
    // Build the entire scorecard
    // Outer loop for number of rounds in a five crowns game
    for(var j=3; j<=13; j++){
        scoreHTML+="<div id='row_round_"+j+"' class='full_row'><div id='round_"+j+"' class='fc_round'>"+j+"</div>";
        // Inner Loop based on how many players are playing
        for(var k=1; k<=numberOfPlayers; k++){
            scoreHTML+="<div class='score_cont'><div class='this_score' id='p"+k+"_"+j+"_n'></div><div class='this_update' id='p"+k+"_"+j+"_u'></div></div>"
        }
        scoreHTML+="</div>";  
    }
        
    // Populate HTML for the name form
    var nameFormHTML;
    for(var l=1; l<=numberOfPlayers; l++){
        nameFormHTML+="<input class='name_input' id='PN_"+l+"' type='text' placeholder='Player "+l+"'/><br>";
    }
        
    // Set the HTML for the name form
    document.getElementById("name_form_input").innerHTML=nameFormHTML;
        
    // Set the form HTML on the page 
    document.getElementById("scorecard_master_container").innerHTML=scoreHTML;
       
    // Enable the name form to gather player's names
    document.getElementById("name_form_cont").classList.toggle('display_block');
    document.getElementById("name_form_cont").classList.toggle('display_none');
        
    // Set column width based on number of players
    var scoreColumnWidth = round(90 / numberOfPlayers);
    $("<style/>", {text: ".score_cont {width:"+scoreColumnWidth+"%;}"}).appendTo('head');    
    });                 
}); 
 

// Function to add player's names to scorecard
$(function(){
    $('#name_form').on('submit', function(e){
        e.preventDefault();
        document.getElementById("name_form_cont").classList.toggle('display_block');
        document.getElementById("name_form_cont").classList.toggle('display_none');
        
        for(var i=0; i<numberOfPlayers; i++){
            
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


// Function to update player's score
function column_update(round_number, player, score){
    console.log("Round "+round_number+" | Player "+player+" | Score "+score);
    
    // ID of cell for player's score this round
    var s_new_cell = 'p'+player+'_'+round_number+'_n';
                    
    // ID of cell for player's cumulative score after this round
    var s_upd_cell = 'p'+player+'_'+round_number+'_u';
    
    // If not the first (third) round, need to know the current cumulative score for player
    if(round_number != 3){
        // ID of cell holdin player's current cumulative score from last round
        var s_old_total;
        s_old_total = 'p'+player+'_'+(round_number - 1)+'_u';
    }
    
    // If this is not a correction, update the score for current round
    if(round_number == current){
        
        // Enter the player's score for this round
        document.getElementById(s_new_cell).innerHTML = Number(score);
        
        if(round_number == 3 ){
            // Cumulative score is the same as round score since round one
            document.getElementById(s_upd_cell).innerHTML = Number(score);
        } else{
            // Add this round score to cumulative score         
            document.getElementById(s_upd_cell).innerHTML = Number(score) + Number(document.getElementById(s_old_total).innerHTML);
        }   
    // If not a score correction, this player is all set. Move onto next player
        
    // Else this is a correction
    } else{
        // Enter the corrected round score 
        document.getElementById(s_new_cell).innerHTML = Number(score);
        
        // Start with round 3, set round equal to cumulative
        var roundThreeScoreID = 'p'+player+'_3_n';
        var roundThreeCumulID = 'p'+player+'_3_u';
        document.getElementById(roundThreeCumulID).innerHTML = Number(document.getElementById(roundThreeScoreID).innerHTML);
        
        // Loop through player's scorecard to update cumulative score
        for( var i=3; i<(current-1); i++){
            
            // Cell ID for last cumulative score
            var lastCumulScore = 'p'+player+'_'+i+'_u';
            // Cell ID for round score of next round
            var nextRoundScore = 'p'+player+'_'+(i+1)+'_n';
            // Cell ID for cumulative score after next round
            var nextRoundCumul = 'p'+player+'_'+(i+1)+'_u';
            
            // Update Score
            document.getElementById(nextRoundCumul).innerHTML = Number(document.getElementById(lastCumulScore).innerHTML) + Number(document.getElementById(nextRoundScore).innerHTML);
        
        } 
    }
}


// Submit the score form
$(function(){
    $('#score_form').on('submit', function(e){
        e.preventDefault();
        
    // Hide the form
    document.getElementById("score_form_cont").classList.toggle('display_block');
    document.getElementById("score_form_cont").classList.toggle('display_none');
     
    // Get the round number of form being submitted
    var this_round = document.getElementById("hid_round").value;
    console.log("Score update for round: "+this_round);
        
    // Loop over all players for score updates
    for(var i=1; i<=numberOfPlayers; i++){
            
        // ID Variable to read scores out of submitted form
        var formPlayerID = 'P_'+i;
                
        // Populate the score for the player
        var playerScore = document.getElementById(formPlayerID).value;
             
        // If score is not empty, update player's score
        if( playerScore != ""){
            column_update(this_round, i, playerScore);
        }
               
                       
    }
      
    // Remove values from the score form for next round
    $('#score_form').children('input').val('')
        
    if((this_round < 13) && (this_round == current)){
        var this_row;
        var next_row;
        this_row = "row_round_"+this_round;
        next_row = "row_round_"+(Number(this_round) + 1);
        document.getElementById(this_row).style.backgroundColor = "#FFFFFF";
        document.getElementById(next_row).style.backgroundColor = "#C494D2";
        current++;
    }
        
    });    
}); 


// Display the Score form 
$('#scorecard_master_container').on("click", ".fc_round", function(){
    document.getElementById("score_form_cont").classList.toggle('display_block');
        document.getElementById("score_form_cont").classList.toggle('display_none');
    var this_id = $(this).attr('id');
    var splt = this_id.split("_");
    var new_id = Number(splt[1]);
    document.getElementById("hid_round").value = new_id; 
});

