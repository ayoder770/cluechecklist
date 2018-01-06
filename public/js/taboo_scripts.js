var a_pts = 0;
var b_pts = 0;
var whosup;
var notup;
var up_cont;
var not_cont;

function team_a_turn(){
    whosup = "a";
    up_cont = "team_a_pts";
    not_cont = "team_b_pts";
    notup = "b";
    begin_game();
    
}

function team_b_turn(){
    whosup = "b";
    notup = "a";
    up_cont = "team_b_pts";
    not_cont = "team_a_pts";
    begin_game();
    
}

function begin_game(){
    console.log(whosup);
    console.log(notup);
    document.getElementById("turn_pick").classList.toggle('hide_turn_cover');
}

function add_pts(){
    if(whosup == "a"){
        var update = a_pts +1;
    } else{
        var update = b_pts +1;
    }
    document.getElementById(up_cont).value = update;
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