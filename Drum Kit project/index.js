//Detecting button press code part

//saving the number of drum buttons in a variable
let drumBottonsNum = document.querySelectorAll(".drum").length;
for (let i = 0; i < drumBottonsNum; i++) {

  //select our button
  //brackets are not used when calling a function in an event listener unless it is a function without a name (anonymous func)
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //(this) is used to know which of all drum classes is clicked

    let buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimaton(buttonInnerHTML);

  });

}

// Detecting keyboard press code part
//N.B console.log event shows the key pressed as one of the options that is why we use event.key
//N.B event here passes the event that triggered the call back function
document.addEventListener("keypress", function(event) {

  makeSound(event.key)
  buttonAnimaton(event.key);
})

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

//function for an animation after a click or a keypress
function buttonAnimaton(currentKey) {
  //to get the class of each button whether clicked or pressed on a keyboard
  let activeButton = document.querySelector("." + currentKey);
  //adding css class to the pressed button
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100)
}
