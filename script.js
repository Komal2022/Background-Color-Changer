var colo = [ "red" ,"black" ,"green" , "yellow" , "maroon" ,"orange" , "blue", "#5d0ae2","pink"];
var i=0;

var div_arr = document.getElementsByClassName("divt");
var ab =0;
console.log(ab);

//var but_arr = document.getElementsByClassName("buttons");

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




// function func2()
// {
//     document.getElementById("div2").style.backgroundColor="black";
// }
// function func3()
// {
//     document.getElementById("div3").style.backgroundColor="green";
// }
// function func4()
// {
//     document.getElementById("div1").style.backgroundColor="yellow";
// }
// function func5()
// {
//     document.getElementById("div2").style.backgroundColor="maroon";
// }
// function func6()
// {
//     document.getElementById("div3").style.backgroundColor="orange";
// }
// function func7()
// {
//     document.getElementById("div1").style.backgroundColor="blue";
// }
// function func8()
// {
//     document.getElementById("div2").style.backgroundColor="#5d0ae2";
// }
// function func9()
// {
//     document.getElementById("div3").style.backgroundColor="pink";
// }