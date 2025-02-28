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

function playRound(humanChoice, computerChoice) {
  let winner = "";
  if (humanChoice === computerChoice) {
    //same answer
    console.log("Same choice. No winner.");
  } else if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      winner = "human";
      console.log("You win! Rock beats scissors!");
    } else {
      winner = "computer";
      console.log("You lose! Paper beats rock!");
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      winner = "human";
      console.log("You win! Paper beats rock!");
    } else {
      winner = "computer";
      console.log("You lose! Scissors beat paper!");
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      winner = "human";
      console.log("You win! Scissors beat paper!");
    } else {
      winner = "computer";
      console.log("You lose! Rock beats scissors!");
    }
  } else {
    console.log("Invalid input");
  }

  return winner;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    let roundWinner = playRound(humanSelection, computerSelection);
    if (roundWinner === "human") {
      humanScore++;
    } else if (roundWinner === "computer") {
      computerScore++;
    }
  }

  if (humanScore < computerScore) {
    console.log("You lose! " + humanScore + " to " + computerScore);
  } else if (humanScore > computerScore) {
    console.log("You win! " + humanScore + " to " + computerScore);
  } else {
    console.log("Tied game! " + humanScore + " to " + computerScore);
  }
}

playGame();
