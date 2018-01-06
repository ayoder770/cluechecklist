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
        a_pts = a_pts + 1;
        var update = a_pts;
    } else{
        b_pts = b_pts + 1;
        var update = b_pts;
    }
    document.getElementById(up_cont).innerHTML = update;
}

function sub_pts(){
    if(whosup == "a"){
        a_pts = a_pts - 1;
        var update = a_pts;
    } else{
        b_pts = b_pts - 1;
        var update = b_pts;
    }
    document.getElementById(up_cont).innerHTML = update;
}

function taboo(){
    console.log("hello from taboo");
}

function pass(){
    console.log("hello from pass");
}