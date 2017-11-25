var deck = [1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 1];

var  desc= [ "NULL", "Move from Start or move forward 1.", "Move from Start or move forward 2.<br /><b>DRAW AGAIN</b>", "Move forward 3.", "Move backward 4.", "Move forward 5.","NULL", "Move forward 7 or split between two pawns.", "Move forward 8.", "NULL", "Move forward 10 or move backward 1.", "Move forward 11 or change places with an opponent.", "Move forward 12.", "Move from Start and switch places with an opponent, who you bump back to start." ];

function draw_next_card(){
    if(deck.length === 45){
         document.getElementById("card").classList.className('flipped_half'); 
         document.getElementById("card").classList.remove('flipped_half'); 
         setTimeout(changeText, 300);    
     } else if( ( deck.length > 0 ) && ( deck.length < 45 ) ){
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
    
        document.getElementById("top_desc").innerHTML = desc[13];
        document.getElementById("bot_desc").innerHTML = desc[13];   
    } else{
        document.getElementById("top_numb").innerHTML = deck[x];
        document.getElementById("big_numb").innerHTML = deck[x];
        document.getElementById("bot_numb").innerHTML = deck[x];
    
        document.getElementById("top_desc").innerHTML = desc[deck[x]];
        document.getElementById("bot_desc").innerHTML = desc[deck[x]];
    }
     deck.splice(x, 1);
}


function shuffle_deck(){
    alert("DECK IS EMPTY...RESHUFFLE");
     deck = [1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 1];
}