//For Dice 1
var randomNumber1=Math.floor(Math.random()*6)+1;
randomDiceImage1 ="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",randomDiceImage1);

//For Dice 2
var randomNumber2=Math.floor(Math.random()*6)+1;
randomDiceImage2 ="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",randomDiceImage2);


//Display Winner
if(randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML="Player 1 wins!🚩";
}

else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 2 wins!";
}

else{
    document.querySelector("h1").innerHTML="Draw";
}
