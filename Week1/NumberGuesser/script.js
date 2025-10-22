"use strict";

window.addEventListener("DOMContentLoaded", main);

const number = 42;

function main() {
  console.log("JavaScript is running!");

  document.querySelector("#btn_guess").addEventListener("click", buttonClicked);
  console.log("We have resgistered us");
}

function buttonClicked() {
  console.log("The button was pressed");

  const guess = document.querySelector("#guess").valueAsNumber;
  console.log(guess);

  if (guess > number) {
    console.log("Too high - please try again.");

    document
      .querySelector("#guesses")
      .insertAdjacentHTML(
        "beforeend",
        `<li>You guessed ${guess} - too high</li>`
      );
  }
  if (guess < number) {
    console.log("Too low - please try again.");
    document
      .querySelector("#guesses")
      .insertAdjacentHTML(
        "beforeend",
        `<li>You guessed ${guess} - too low</li>`
      );
  }
  if (guess == number) {
    document
      .querySelector("#btn_guess")
      .removeEventListener("click", buttonClicked);
  }
}
