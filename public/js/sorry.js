var deck = [1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 50];

var  desc= [ "Move from Start or move forward 1.", "Move from Start or move forward 2. DRAW AGAIN", "Move forward 3.", "Move backward 4.", "Move forward 5.", "Move forward 7 or split between two pawns.", "Move forward 8.", "Move forward 10 or move backward 1.", "Move forward 11 or change places with an opponent.", "Move forward 12.", "Move from Start and switch places with an opponent, who you bump back to start." ];

var one_deck = 45;
var count_up = 0;
var deck_count = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
//1-5, all else - 4...
 

function draw_next_card(){
    document.getElementById("card").classList.toggle('flipped');
    setTimeout(changeText, 300);
}


 function changeText(){
    var x = Math.floor((Math.random() * 11) + 0);

    if(x == (deck.length - 1)){
        document.getElementById("top_numb").innerHTML = "<div style='text-align:center;'>SORRY!</div>";
        document.getElementById("big_numb").innerHTML = "";
        document.getElementById("bot_numb").innerHTML = "<div style='text-align:center;'>SORRY!</div>"
    
        document.getElementById("top_desc").innerHTML = desc[deck.length - 1];
        document.getElementById("bot_desc").innerHTML = desc[deck.length - 1];   
    } else{
        document.getElementById("top_numb").innerHTML = deck[x];
        document.getElementById("big_numb").innerHTML = deck[x];
        document.getElementById("bot_numb").innerHTML = deck[x];
    
        document.getElementById("top_desc").innerHTML = desc[x];
        document.getElementById("bot_desc").innerHTML = desc[x];
    }
     
     update_deck(x);
}


function update_deck(index){
    
    
}

function shuffle_deck(){
    
    
}