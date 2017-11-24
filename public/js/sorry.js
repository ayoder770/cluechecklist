var deck = [1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 1];

var  desc= [ "Move from Start or move forward 1.", "Move from Start or move forward 2. DRAW AGAIN", "Move forward 3.", "Move backward 4.", "Move forward 5.","NULL", "Move forward 7 or split between two pawns.", "Move forward 8.","NULL", "Move forward 10 or move backward 1.", "Move forward 11 or change places with an opponent.", "Move forward 12.", "Move from Start and switch places with an opponent, who you bump back to start." ];

var one_deck = 45;
var count_up = 0;
var deck_count = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
//1 - 5, all else - 4...
 

function draw_next_card(){
    if(count_up === -1){
         document.getElementById("card").classList.toggle('flipped_half'); 
         setTimeout(changeText, 300);    
     } else if( deck.length < 45 && deck.length > 0 ){
        document.getElementById("card").classList.toggle('flipped');
        setTimeout(changeText, 300);
     } else if( deck.length === 0 ){
         shuffle_deck();
     }
}


 function changeText(){
    var x = Math.floor((Math.random() * (deck.length)) + 0);
     
     

     
    if( deck[x] === 13 ){
        document.getElementById("top_numb").innerHTML = "<div class='sorry'>SORRY!</div>";
        document.getElementById("big_numb").innerHTML = "";
        document.getElementById("bot_numb").innerHTML = "<div class='sorry'>SORRY!</div>"
    
        document.getElementById("top_desc").innerHTML = desc[12];
        document.getElementById("bot_desc").innerHTML = desc[12];   
    } else{
        document.getElementById("top_numb").innerHTML = deck[x];
        document.getElementById("big_numb").innerHTML = deck[x];
        document.getElementById("bot_numb").innerHTML = deck[x];
    
        document.getElementById("top_desc").innerHTML = desc[deck[x-1]];
        document.getElementById("bot_desc").innerHTML = desc[deck[x-1]];
    }
     
     update_deck(x);
}


function update_deck(index){
    
    deck.splice(index, 1);
  //  alert(deck.length);
}

function shuffle_deck(){
    alert("DECK IS EMPTY");
    
}