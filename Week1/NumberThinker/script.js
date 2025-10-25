"use strict";

let guess;
let min = 1;
let max = 100;
let iterations;

window.addEventListener("DOMContentLoaded", main);

function main() {
  document.querySelector("#btn_guess").addEventListener("click", startGame);
  document.querySelector("#btn_high").addEventListener("click", tooHigh);
  document.querySelector("#btn_low").addEventListener("click", tooLow);
  document.querySelector("#btn_correct").addEventListener("click", correct);
}

function startGame() {
  min = 1;
  max = 100;
  iterations = 0;

  document.querySelector("#guesses").innerHTML = "";
  document.querySelector("#buttons").style.display = "block";
  document.querySelector("#btn_guess").style.display = "none";

  makeGuess();
}

function makeGuess() {
  if (min > max) {
    document
      .querySelector("#guesses")
      .insertAdjacentHTML(
        "beforeend",
        `<li>Your answers are conflicting. No numbers left in the interval>`
      );
    endGame();
    return;
  }

  if (min == max) {
    guess = min;
    iterations++;
    document
      .querySelector("#guesses")
      .insertAdjacentHTML("beforeend", `<li>Only one option left ${guess}`);
    document
      .querySelector("#guesses")
      .insertAdjacentHTML("beforeend", `<li>${winGame()}`);
    endGame();
    return;
  }

  guess = Math.floor((min + max) / 2);
  iterations++;

  document
    .querySelector("#guesses")
    .insertAdjacentHTML(
      "beforeend",
      `<li>Min: ${min}, Mid: ${guess}, Max: ${max}`
    );

  document
    .querySelector("#guesses")
    .insertAdjacentHTML("beforeend", `<li>My guess is ${guess}</li>`);
}

function tooHigh() {
  document
    .querySelector("#guesses")
    .insertAdjacentHTML("beforeend", `<li>${guess} was too high</li>`);
  max = guess - 1;
  makeGuess();
}

function tooLow() {
  document
    .querySelector("#guesses")
    .insertAdjacentHTML("beforeend", `<li>${guess} was too low</li>`);
  min = guess + 1;
  makeGuess();
}

function correct() {
  const guessesList = document.querySelector("#guesses");
  guessesList.insertAdjacentHTML("beforeend", `<li>${winGame()}</li>`);
  endGame();
}

function winGame() {
  let comment = "Meh";
  if (iterations <= 3) {
    comment = "EXTRAORDINARY!";
  } else if (iterations <= 5) {
    comment = "Amazing!";
  }
  return `Correct! The number is ${guess} (used ${iterations} guesses) — ${comment}.`;
}

function endGame() {
  document.querySelector("#buttons").style.display = "none";
  document.querySelector("#btn_guess").textContent = "Try again";
  document.querySelector("#btn_guess").style.display = "inline-block";
}
