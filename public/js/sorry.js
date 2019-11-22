// JavaScript For Sorry deck

// Initialize the deck
var deck = [1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 1];

// Full Deck
var deckFull = 45;

// Empty Deck
var deckEmpty = 0;

// Number to represent a Sorry Card
var sorryCard = 13;

// Array to hold the description/instructions of each card
var  desc= [ "NULL", "Move from Start or move forward 1.", "Move from Start or move forward 2.<br /><b>DRAW AGAIN</b>", "Move forward 3.", "Move backward 4.", "Move forward 5.","NULL", "Move forward 7 or split between two pawns.", "Move forward 8.", "NULL", "Move forward 10 or move backward 1.", "Move forward 11 or change places with an opponent.", "Move forward 12.", "Move from Start and switch places with an opponent, who you bump back to start." ];


// Function when card is tapped to draw the next card
function draw_next_card(){
    
    // Full deck
    if(deck.length != deckEmpty){
   
         document.getElementById("card_front").style.transform = "rotateY( 0deg )";
         document.getElementById("card_back").style.transform = "rotateY( 180deg )";
         document.getElementById("card").classList.toggle('flipped');
         setTimeout(changeText, 150);
        
    // Deck is empty and ready to be reset/shuffled
    } else if( deck.length === deckEmpty ){
         document.getElementById("rs_overlay").style.display = "block";
    }
    
}


// Function to change the text of the card after the card has been drawn
function changeText(){
    
    // Get random number between 0 and length of the deck
    var x = Math.floor((Math.random() * (deck.length)) + 0);
     
    // 13 represents a Sorry card
    if( deck[x] === sorryCard ){
        document.getElementById("top_numb").innerHTML = "<div class='sorry'>SORRY!</div>";
        document.getElementById("big_numb").innerHTML = "";
        document.getElementById("bot_numb").innerHTML = "<div class='sorry'>SORRY!</div>"
    
        document.getElementById("top_desc").innerHTML = desc[sorryCard];
        document.getElementById("bot_desc").innerHTML = desc[sorryCard];   
    } else{
        document.getElementById("top_numb").innerHTML = deck[x];
        document.getElementById("big_numb").innerHTML = deck[x];
        document.getElementById("bot_numb").innerHTML = deck[x];
    
        document.getElementById("top_desc").innerHTML = desc[deck[x]];
        document.getElementById("bot_desc").innerHTML = desc[deck[x]];
    }
    
    // Remove the card that was drawn from the desk
    deck.splice(x, 1);
    
}


// Function to shuffle deck (reset cards)
function shuffle_deck(){
     deck = [1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 1];
     document.getElementById("rs_overlay").style.display = "none";
     document.getElementById("card_front").style.transform = "rotateY( 180deg )";
     document.getElementById("card_back").style.transform = "rotateY( 0deg )";
}