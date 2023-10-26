var colo = [ "#4deeea" ,"#74ee15" ,"#ffe700" , "#f000ff" , "#001eff" ,"orange" , "blue", "#5d0ae2","pink"];
var i=0;

var div_arr = document.getElementsByClassName("divt");
var ab =0;

function func1()
{
    div_arr[ab].style.backgroundColor=colo[i];
    ab++;
    i++;   
    if(i==9) 
    i=0;
    if(ab==3)
    ab=0;
}