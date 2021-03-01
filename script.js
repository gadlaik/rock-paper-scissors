const choices = document.querySelector(".container");
const won = document.querySelector("#won");
const lost = document.querySelector("#lost");

function rndNum() {
  let num = Math.round(Math.random() * 10);
  while (num < 1) {
    num = Math.round(Math.random() * 10);
  }
  return num;
}

choices.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(e.target.id);
  switch (e.target.id) {
    case "rock":
      console.log(rndNum());
  }
});
