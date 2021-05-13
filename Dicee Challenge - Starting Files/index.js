var randomNumber1= Math.floor(Math.random() * 6)+1;
var randomImage="dice"+randomNumber1+".png";
var imageSource="images/"+randomImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imageSource);
var secondRandomNumber= Math.floor(Math.random() * 6)+1;
var secondRandomImage="dice"+secondRandomNumber+".png";
var secondImageSource="images/"+secondRandomImage;
var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src",secondImageSource);
if (randomNumber1>secondRandomNumber){
  document.querySelector("h1").innerHTML="🚩player 1 wins";
}
else if (randomNumber1<secondRandomNumber){
  document.querySelector("h1").innerHTML="player 2 wins🚩";
}
else {
  document.querySelector("h1").innerHTML="🚩It's a draw🚩";
};
