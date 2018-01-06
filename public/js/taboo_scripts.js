var a_pts = 0;
var b_pts = 0;
var whosup;
var notup;

function team_a_turn(){
    whosup = "a";
    notup = "b";
    begin_game();
    
}

function team_b_turn(){
    whosup = "b";
    notup = "a";
    begin_game();
    
}

function begin_game(){
    console.log(whosup);
    console.log(notup);
    document.getElementById("turn_pick").classList.toggle('hide_turn_cover');
}

function add_pts(){
    document.getElementById('team_'+whosup+'_pts').value = this[whosup+'_pts']+1;
    console.log("hello from add points");
}

function sub_pts(){
    console.log("hello from sub points");
}

function taboo(){
    console.log("hello from taboo");
}

function pass(){
    console.log("hello from pass");
}