// player one
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage1 = "dice" + randomNumber1 + ".png";
let imageSrc1 = "images/" + randomDiceImage1;

//change src attribute to pick random image for player 1
let imageOne = document.querySelectorAll("img")[0];
imageOne.setAttribute("src", imageSrc1);

// player two
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage2 = "dice" + randomNumber2 + ".png";
let imageSrc2 = "images/" + randomDiceImage2;

//change src attribute to pick random image for player 2
let imageTwo = document.querySelectorAll("img")[1];
imageTwo.setAttribute("src", imageSrc2);

// who is the winner
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🏆Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🏆Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
