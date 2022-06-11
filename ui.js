const buttons = document.querySelectorAll('.button-container');
const resultOfRound = document.getElementById('round');
const score = document.getElementById('score');
const final = document.getElementById('final');
const reset = document.getElementById('reset');

let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let rounds = 0;

buttons.forEach((button) => {
  button.addEventListener('click', function (e) { 
    playerSelection = e.target.id;
    resultOfRound.textContent = `Round: ${rounds + 1}`;
    game();
    });
});

reset.addEventListener('click', e => {
  buttons.forEach((button) => {
    button.style.visibility = "visible";
  });
  reset.style.visibility = "hidden";
  computerSelection = 0;
  playerSelection = 0;
  playerScore = 0;
  computerScore = 0;
  rounds = 0;
  resultOfRound.textContent = "";
  score.textContent = "";
  final.textContent = "";
});

function computerPlay () {
  let options = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  console.log(playerSelection);
  console.log(computerSelection);

  if (playerSelection === computerSelection) {
    resultOfRound.textContent += " - It's a tie!";
    return ("tie");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    resultOfRound.textContent += " - You Win! Rock crushes scissors";
    return ("player");
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    resultOfRound.textContent += " - You Lose! Rock crushes scissors";
    return ("computer");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    resultOfRound.textContent += " - You Win! Paper covers rock";
    return ("player");
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    resultOfRound.textContent += " - You Lose! Paper covers rock";
    return ("computer");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    resultOfRound.textContent += " - You Win! Scissors cut paper";
    return ("player");
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    resultOfRound.textContent += " - You Lose! Scissors cut paper";
    return ("computer");
  } else {
    resultOfRound.textContent += " - it went terribly wrong";
    return 0;
  }
}

function game() {
  let winner = playRound(playerSelection, computerSelection);
  
  if (winner === "player") {
    playerScore++;
  } else if (winner === "computer") {
    computerScore++;
  }

  score.textContent = `Player score: ${playerScore} vs Computer score: ${computerScore}`;
  
  if (playerScore === 5 || computerScore === 5) {
    result();
    buttons.forEach((button) => {
      button.style.visibility = "hidden";
    });
    reset.style.visibility = "visible";
  }
  else {
    rounds++;
  }
}

function result() {
  if (playerScore > computerScore) {
    final.textContent = "YOU WIN";
  } else if (computerScore > playerScore) {
    final.textContent = "GAME OVER!";
  } else {
    final.textContent = "IT'S A TIE!"; 
  }
}



