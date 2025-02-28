function getComputerChoice() {
    const randNum = Math.floor(Math.random() * 3);
    let computerChoice = '';
    
    if(randNum == 0) {
        computerChoice = 'rock';
    } else if (randNum == 1) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper, or scissors.");
    
    return humanChoice;
}

console.log(getHumanChoice());