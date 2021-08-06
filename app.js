let userScore = 0;
let computerScore = 0;
//let counter = 5000;
let flash = true;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const prompt = document.getElementById("msgId");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(Letter) {
  if (Letter == "r") return "Rock";
  if (Letter == "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(2).sub();
  const smallCompWord = "comp".fontsize(2).sub();
  const userChoice_div = document.getElementById(userChoice);

  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  userScore_span.classList.add("text-glow-user");
  setTimeout(() => userScore_span.classList.remove("text-glow-user"), 500);

  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord}beats  ${convertToWord(
    computerChoice
  )}${smallCompWord}.  You Win!!`;

  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 500);
  console.log(`${userChoice}`);
}

function lose(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(2).sub();
  const smallCompWord = "comp".fontsize(2).sub();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  computerScore_span.classList.add("text-glow-comp");
  setTimeout(() => computerScore_span.classList.remove("text-glow-comp"), 500);

  result_p.innerHTML = `${convertToWord(
    computerChoice
  )}${smallCompWord}  beats ${convertToWord(
    userChoice
  )}${smallUserWord}. You Lose!!`;

  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 500);
  console.log(`${userChoice}`);
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(2).sub();
  const smallCompWord = "comp".fontsize(2).sub();
  const userChoice_div = document.getElementById(userChoice);

  computerScore_span.classList.add("text-glow-comp");
  setTimeout(() => computerScore_span.classList.remove("text-glow-comp"), 500);

  userScore_span.classList.add("text-glow-user");
  setTimeout(() => userScore_span.classList.remove("text-glow-user"), 500);

  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = " It's a Draw";

  userChoice_div.classList.add("grey-glow");
  setTimeout(() => userChoice_div.classList.remove("grey-glow"), 500);
  console.log(`${userChoice}`);
}

function game(userChoice) {
  flash = false;
  computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

counter = new Date().getSeconds();

console.log(counter);
function main() {
  rock_div.addEventListener("click", () => game("r"));

  scissors_div.addEventListener("click", () => game("s"));

  paper_div.addEventListener("click", () => game("p"));

  if (flash && counter % 5 == 0) {
    console.log("progress");
    prompt.classList.add("text-glow-comp");
    setTimeout(() => prompt.classList.remove("text-glow-comp"), 500);
    flash = true;
  }
}

main();
