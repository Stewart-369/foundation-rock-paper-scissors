let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
      return `It's a tie! You both chose ${humanChoice}`;
  } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
  ) {
      humanScore++;
      return `You Win! ${humanChoice} beats ${computerChoice}`;
        
  } else {
      computerScore++;
      return `You Lose! ${computerChoice} beats ${humanChoice}`;     
  }
}

function updateDisplay(message) {
  
  document.querySelector("#round-result").textContent = message;
  document.querySelector("#score").textContent = `You: ${humanScore} vs Computer: ${computerScore}`;
  
    if (humanScore === 5 || computerScore === 5) {
      let winner = humanScore > computerScore
      ? "You win the game!" : "Computer wins the game!";

  document.querySelector("#winner").textContent = winner;
    } 
}

let button = document.querySelectorAll("button");

button.forEach(button => {
  button.addEventListener("click", () => {
  let humanChoice = button.id;
  let message = playRound(humanChoice, getcomputerChoice());
  updateDisplay(message);
  });
});