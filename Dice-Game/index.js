//Dice 1

const randomNumber1 = Math.floor(Math.random() * 6 + 1); // number between 1-6

const randomDiceImage = "dice" + randomNumber1 + ".png"; // string referring to the dice image

const randomImageSource = "images/" + randomDiceImage; // string referring to the image folder

const image1 = document.querySelectorAll("img")[0]; // selecting the first dice

image1.setAttribute("src", randomImageSource); // rolling dice

// Dice 2

const randomNumber2 = Math.floor(Math.random() * 6 + 1);

const randomDiceImage2 = "dice" + randomNumber2 + ".png";

const randomImageSource2 = "images/" + randomDiceImage2

const image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

// Winning condition

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
