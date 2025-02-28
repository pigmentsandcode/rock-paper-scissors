function getComputerChoice() {
  const randNum = Math.floor(Math.random() * 3);
  let computerChoice = "";

  if (randNum == 0) {
    computerChoice = "rock";
  } else if (randNum == 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Enter rock, paper, or scissors.");

  return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  let winner = "";
  if (humanChoice === computerChoice) {
    //same answer
    console.log("Same choice. No winner.");
  } else if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      humanScore++;
      console.log("You win! Rock beats scissors!");
    } else {
      computerScore++;
      console.log("You lose! Paper beats rock!");
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore++;
      console.log("You win! Paper beats rock!");
    } else {
      computerScore++;
      console.log("You lose! Scissors beat paper!");
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      humanScore++;
      console.log("You win! Scissors beat paper!");
    } else {
      computerScore++;
      console.log("You lose! Rock beats scissors!");
    }
  } else {
    console.log("Invalid input");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
