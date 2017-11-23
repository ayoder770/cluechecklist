 var  desc= [ "Move from Start of move forward 1.", "Move from Start or move forward 2. DRAW AGIN", "Move forward 3.", "Move backward 4.", "Move forward 5.", "Move forward 7 or split between two pawns.", "Move forward 8.", "Move forward 10 or move backward 1.", "Move forward 11 or change places with an opponent.", "Move forward 12.", "Move from Start and switch places with an opponent, who you bump back to start." ]

var deck = [1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 50]
 
function draw_next_card(){
    var x = Math.floor((Math.random() * 11) + 0);

    document.getElementById("top_numb").innerHTML = deck[x];
    document.getElementById("big_numb").innerHTML = deck[x];
    document.getElementById("bot_numb").innerHTML = deck[x];
    
    document.getElementById("top_desc").innerHTML = desc[x];
    document.getElementById("bot_desc").innerHTML = desc[x];
}