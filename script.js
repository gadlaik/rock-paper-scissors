const choices = document.querySelector(".container");
const won = document.querySelector("#won");
const lost = document.querySelector("#lost");
const draw = document.querySelector("#draw");
const result = document.querySelector("#result");
const pcSelected = document.querySelector("#pcSelected");
const yourScore = document.querySelector("#yourScore");
const pcScore = document.querySelector("#pcScore");
const btns = document.querySelectorAll(".btn");
const again = document.querySelector("#again");

// random 1-9 number generator
function rndNum() {
  let num = Math.round(Math.random() * 10);
  while (num < 1 || num > 9) {
    num = Math.round(Math.random() * 10);
  }
  return num;
}

let playerScore = 0;
let computerScore = 0;

// game
choices.addEventListener("click", (e) => {
  e.preventDefault();
  let selectedTarget = e.target.id;

  result.style.display = "none";

  if (playerScore == 5 || computerScore == 5) selectedTarget = null;

  switch (selectedTarget) {
    case "rock":
      if (rndNum() < 4) {
        pcSelected.textContent = "Computer selected paper";
        lost.style.display = "block";
        won.style.display = "none";
        draw.style.display = "none";
        pcScore.textContent = computerScore += 1;
      } else if (rndNum() > 3 && rndNum() < 7) {
        pcSelected.textContent = "Computer selected scissors";
        won.style.display = "block";
        lost.style.display = "none";
        draw.style.display = "none";
        yourScore.textContent = playerScore += 1;
      } else {
        pcSelected.textContent = "Computer selected rock";
        draw.style.display = "block";
        won.style.display = "none";
        lost.style.display = "none";
      }
      break;
    case "paper":
      if (rndNum() < 4) {
        pcSelected.textContent = "Computer selected paper";
        lost.style.display = "none";
        won.style.display = "none";
        draw.style.display = "block";
      } else if (rndNum() > 3 && rndNum() < 7) {
        pcSelected.textContent = "Computer selected scissors";
        won.style.display = "none";
        lost.style.display = "block";
        draw.style.display = "none";
        pcScore.textContent = computerScore += 1;
      } else {
        pcSelected.textContent = "Computer selected rock";
        draw.style.display = "none";
        won.style.display = "block";
        lost.style.display = "none";
        yourScore.textContent = playerScore += 1;
      }
      break;
    case "scissors":
      if (rndNum() < 4) {
        pcSelected.textContent = "Computer selected paper";
        lost.style.display = "none";
        won.style.display = "block";
        draw.style.display = "none";
        yourScore.textContent = playerScore += 1;
      } else if (rndNum() > 3 && rndNum() < 7) {
        pcSelected.textContent = "Computer selected scissors";
        won.style.display = "none";
        lost.style.display = "none";
        draw.style.display = "block";
      } else {
        pcSelected.textContent = "Computer selected rock";
        draw.style.display = "none";
        won.style.display = "none";
        lost.style.display = "block";
        pcScore.textContent = computerScore += 1;
      }
      break;
  }
  if (playerScore == 5 || computerScore == 5) {
    again.style.display = "flex";
    btns.forEach((btn) => (btn.style.cursor = "default"));
  }
});

// again button even listener
again.addEventListener("click", (e) => {
  yourScore.textContent = playerScore = 0;
  pcScore.textContent = computerScore = 0;
  pcSelected.textContent = "";
  lost.style.display = "none";
  won.style.display = "none";
  draw.style.display = "none";
  result.style.display = "block";
  again.style.display = "none";
  btns.forEach((btn) => (btn.style.cursor = "pointer"));
});
