const buttons = document.querySelectorAll('.button-container');
const round = document.getElementById('round');
const message = document.getElementById('message');
const player = document.getElementById('player');
const computer = document.getElementById('computer');
const final = document.getElementById('final');
const resetContainer = document.querySelectorAll('.reset-container');

let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let rounds = 0;

buttons.forEach((button) => {
  button.addEventListener('click', function (e) { 
    playerSelection = e.target.id;

    round.textContent = `Round: ${rounds + 1}`;
    game();
    });
});

resetContainer.forEach((item) => {
  item.addEventListener('click', e => {
    buttons.forEach((button) => {
      button.style.display="block";
    });
    resetContainer.forEach((item) => {
      item.style.display="none";
    });
    computerSelection = 0;
    playerSelection = 0;
    playerScore = 0;
    computerScore = 0;
    rounds = 0;
    round.textContent = "Round:";
    player.textContent = "Player:";
    computer.textContent = "Computer:"
    final.textContent = "";
  });
})



function computerPlay () {
  let options = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();

  if (playerSelection === computerSelection) {
    message.textContent = "It's a tie!";
    return ("tie");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    message.textContent = "You Win! Rock crushes scissors";
    return ("player");
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    message.textContent = "You Lose! Rock crushes scissors";
    return ("computer");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    message.textContent = "You Win! Paper covers rock";
    return ("player");
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    message.textContent = "You Lose! Paper covers rock";
    return ("computer");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    message.textContent = "You Win! Scissors cut paper";
    return ("player");
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    message.textContent = "You Lose! Scissors cut paper";
    return ("computer");
  } else {
    message.textContent = "It went terribly wrong";
    return 0;
  }
}

function game() {
  let winner = playRound(playerSelection, computerSelection);
  

  if (winner === "player") {
    playerScore++;
    player.textContent = `Player: ${playerScore}`;
  }

  else if (winner === "computer") {
    computerScore++;
    computer.textContent = `Computer: ${computerScore}`;
  }
  
  if (playerScore === 5 || computerScore === 5) {
    result();
    swapBoxes();
    buttons.forEach((button) => {
      button.style.display="none";
    });
    resetContainer.forEach((item) => {
      item.style.visibility="visible";
    });
  } else {
    rounds++;
  }
}

function swapBoxes() {
  
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