 var  desc_1 = "Move from Start of move forward 1.";
 var  desc_2 = "Move from Start or move forward 2. DRAW AGIN";
 var  desc_3 = "Move forward 3.";
 var  desc_4 = "Move backward 4.";
 var  desc_5 = "Move forward 5.";
 var  desc_7 = "Move forward 7 or split between two pawns.";
 var  desc_8 = "Move forward 8.";
 var desc_10 = "Move forward 10 or move backward 1.";
 var desc_11 = "Move forward 11 or change places with an opponent.";
 var desc_12 = "Move forward 12.";
 var  desc_50 = "Move from Start and switch places with an opponent, who you bump back to start.";

var deck = [1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 50]
 
function draw_next_card(){
    var x = Math.floor((Math.random() * 11) + 0);
   var c = deck[x];
    var next = "desc_"+c;
    document.getElementById("top_numb").innerHTML = c;
    document.getElementById("big_numb").innerHTML = c;
    document.getElementById("bot_numb").innerHTML = c;
    
    document.getElementById("top_desc").innerHTML = next;
    document.getElementById("bot_desc").innerHTML = next;
}