let buttonColours = ["red", "blue", "green", "yellow"];

//store user button clicks sequence
let userClickedPattern = [];

//stores game button sequence
let gamePattern = [];

//game level
let level = 0;

//is set to false (game has'nt started) until any key is pressed using the function below
let gameStarted = false;


//Detection of first keypress to start the game
$(document).keypress(function () {

  if (!gameStarted) {
    $("#level-title").text("level " + level);
    nextSequence();
    gameStarted = true;
  }
})


//detection of button clicks giving them animation to the press and sound depending on the clicked button
$(".btn").click(function() {
  //storing the user's clicked button in a variable
  let userChosenColour = $(this).attr("id");
  //Adding the user's clicked button into userClickedPattern array
  userClickedPattern.push(userChosenColour);
  //play sound according to the button
  playSound(userChosenColour);
  //flash animation when the button is clicked
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
})


function nextSequence() {
  //reset the userClickedPattern to an empty array ready for the next level.
  userClickedPattern = [];

  level ++;
  $("#level-title").text("level " + level);

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  //Use jQuery to select the button with the same id
  let button = $("#" + randomChosenColour);

  //element flash in jQuery
  $(button).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
  //play sound according to the button
  let audio = new Audio("sounds/" + name + '.mp3');
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}


function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");

    //if the user got the most recent answer right check that they have finished their sequence
    if (userClickedPattern.length === gamePattern.length) {
      //Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }

  }else {
    console.log("wrong");
    let audio = new Audio("sounds/wrong.mp3");
    audio.play();
    //adding the red flash effect for game over
    $("body").addClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart")

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    //call the startOver function when the user gets the sequence wrong
    startOver();
  }
}

//Restart game
function startOver() {
  level = 0;
  gamePattern = [];
  gameStarted = false;
}
