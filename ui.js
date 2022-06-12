const buttons = document.querySelectorAll('.button-container');
const round = document.getElementById('round');
const tracker = document.querySelector('.tracker');
const message = document.getElementById('message');
const player = document.getElementById('player');
const computer = document.getElementById('computer');
const final = document.getElementById('final');
const resetBtn = document.getElementById('reset');
const buttonContainer = document.querySelector('.button-container')

let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let rounds = 0;

buttons.forEach((button) => {
  button.addEventListener('click', function (e) { 
    playerSelection = e.target.id;
    final.textContent = "";
    tracker.style.visibility = "visible";
    round.textContent = `Round: ${rounds + 1}`;
    game();
    });
});

resetBtn.addEventListener('click', e => {
  buttonContainer.style.visibility="visible";
  resetBtn.style.visibility="hidden";
  computerSelection = 0;
  playerSelection = 0;
  playerScore = 0;
  computerScore = 0;
  rounds = 0;
  round.textContent = "Round:";
  player.textContent = "Player:";
  computer.textContent = "Computer:"
  message.textContent = "";
  final.textContent = "";
});

function computerPlay () {
  let options = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();

  if (playerSelection === computerSelection) {
    message.textContent = "It's a tie!";
    message.style.color="black";
    return ("tie");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    message.textContent = "You Win! Rock crushes scissors";
    message.style.color="green";
    return ("player");
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    message.textContent = "You Lose! Rock crushes scissors";
    message.style.color="red";
    return ("computer");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    message.textContent = "You Win! Paper covers rock";
    message.style.color="green";
    return ("player");
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    message.textContent = "You Lose! Paper covers rock";
    message.style.color="red";
    return ("computer");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    message.textContent = "You Win! Scissors cut paper";
    message.style.color="green";
    return ("player");
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    message.textContent = "You Lose! Scissors cut paper";
    message.style.color="red";
    message.style.color="green";
    return ("computer");
  } else {
    message.textContent = "It went terribly wrong";
    return 0;
  }
}

function game() {
  let winner = playRound(playerSelection, computerSelection);
  player.textContent = `Player: ${playerScore}`;
  computer.textContent = `Computer: ${computerScore}`;

  if (winner === "player") {
    playerScore++;
    player.textContent = `Player: ${playerScore}`;
  } else{ 
    computerScore++;
    computer.textContent = `Computer: ${computerScore}`;
  } 
  
  if (playerScore === 5 || computerScore === 5) {
    result();
    buttonContainer.style.visibility="hidden";
    resetBtn.style.visibility="visible";
  } else {
    rounds++;
  }
}


function result() {
  if (playerScore > computerScore) {
    final.textContent = "YOU WIN :)";
    final.style.color="green";
  } else {
    final.textContent = "GAME OVER :(";
    final.style.color="red";
  }
  message.textContent = "Click reset to play new game!";
  message.style.color = "blue";
}


