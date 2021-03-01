const choices = document.querySelector(".container");
const won = document.querySelector("#won");
const lost = document.querySelector("#lost");
const draw = document.querySelector("#draw");
const result = document.querySelector("#result");
const pcSelected = document.querySelector("#pcSelected");
const yourScore = document.querySelector("#yourScore");
const pcScore = document.querySelector("#pcScore");

function rndNum() {
  let num = Math.round(Math.random() * 10);
  while (num < 1 || num > 9) {
    num = Math.round(Math.random() * 10);
  }
  return num;
}

let playerScore = 0;
let computerScore = 0;

choices.addEventListener("click", (e) => {
  e.preventDefault();
  result.style.display = "none";

  switch (e.target.id) {
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
  }
});
