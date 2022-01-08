var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource = "images/" + randomDiceImage;
var randomImageSource2 = "images/" + randomDiceImage2;

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];


image1.setAttribute("src", randomImageSource);
image2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2) {
  document.querySelector("#title").innerHTML = "😆Dorutu Wins😔";
}

if(randomNumber1 < randomNumber2) {
  document.querySelector("#title").innerHTML = "😔Denisa Wins😆";
}

if(randomNumber1 === randomNumber2) {
  document.querySelector("#title").innerHTML = "😏Draw😏";
}
