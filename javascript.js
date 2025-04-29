function getcomputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);

    switch (randomNum) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getHumanChoice() {
    return prompt("Please choose rock, paper or scissors").toLowerCase();
}

function playGame() {

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
        console.log("It's a tie!");
  } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
  ) {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
  } else {
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
  }
}

  for (let i = 1; i <= 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getcomputerChoice();
    playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > humanScore) {
    console.log("You lose the game!");
  } else {
    console.log("Its a tie!");
  }
}