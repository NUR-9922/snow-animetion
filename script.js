let click = true;
function myFun(){
    if(click === true){
    document.getElementById("animated-snowfall").style.visibility = 'visible';
        click = false;
}
else{
    document.getElementById("animated-snowfall").style.visibility = 'hidden';
    click =  true;
}

}