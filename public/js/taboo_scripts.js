var a_pts = 0;
var b_pts = 0;
var whosup;
var notup;
var up_cont;
var not_cont;
var seconds = 10;
var clock_func;

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
    clock_func = setTimeout(count_down,1000);
}

function count_down(){
    console.log("Time: "+seconds);
    seconds = seconds - 1;
    document.getElementById("clock_time").innerHTML = seconds;
    if(seconds == 0){
        
    }
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

function taboo_or_pass(){
    if(whosup == "a"){
        b_pts = b_pts + 1;
        var update = b_pts;
    } else{
        a_pts = a_pts + 1;
        var update = a_pts;
    }
    document.getElementById(not_cont).innerHTML = update;
}