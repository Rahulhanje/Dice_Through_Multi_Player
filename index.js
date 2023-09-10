// alert("Refresh Page Every time To Through Dice")
var number1=Math.floor(Math.random()*6)+1;
var randomimg="dice_"+number1+".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomimg);

var number2=Math.floor(Math.random()*6)+1;
var randomimg="dice_"+number2+".png";
var img1=document.querySelectorAll("img")[1];
img1.setAttribute("src",randomimg);
if(number1>number2){
    var stat=document.querySelector("h1");
    stat.innerHTML="Player 1 Own";
}
else{
    var stat=document.getElementsByTagName("h1")[0];
    stat.textContent="Player 2 Own";
}
if(number1===number2){
    document.querySelector("h1").innerHTML="Draw Match"
}