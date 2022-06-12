const buttons = document.querySelectorAll('.button-container');
const round = document.getElementById('round');
const tracker = document.querySelector('.tracker');
const endMsg = document.getElementById('endMsg');
const player = document.getElementById('player');
const computer = document.getElementById('computer');
const midMsg = document.getElementById('midMsg');
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
    midMsg.textContent = "";
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
  endMsg.textContent = "";
  midMsg.textContent = "";
});

function styleButton() {

}

function computerPlay () {
  let options = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();

  if (playerSelection === computerSelection) {
    endMsg.textContent = "It's a tie!";
    endMsg.style.color="black";
    return ("tie");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    endMsg.textContent = "You Win! Rock crushes scissors";
    endMsg.style.color="green";
    return ("player");
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    endMsg.textContent = "You Lose! Scissors are crushed by rock";
    endMsg.style.color="red";
    return ("computer");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    endMsg.textContent = "You Win! Paper covers rock";
    endMsg.style.color="green";
    return ("player");
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    endMsg.textContent = "You Lose! Rock is covered by paper";
    endMsg.style.color="red";
    return ("computer");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    endMsg.textContent = "You Win! Scissors cut paper";
    endMsg.style.color="green";
    return ("player");
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    endMsg.textContent = "You Lose! Paper is cut by scissors";
    endMsg.style.color="red";
    endMsg.style.color="green";
    return ("computer");
  } else {
    endMsg.textContent = "It went terribly wrong";
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
    midMsg.textContent = "YOU WIN :)";
    midMsg.style.color="green";
  } else {
    midMsg.textContent = "GAME OVER :(";
    midMsg.style.color="red";
  }
  endMsg.textContent = "Click reset to play new game!";
  endMsg.style.color = "blue";
}


