<<<<<<< HEAD
const totalScore = { computerScore: 0, playerScore: 0 };

// // ** getComputerChoice randomly selects between `rock` `paper` `scissors` and return that string **
// // getcomputerChoice() 👉 'Rock'
// // getcomputerChoice() 👉 'Scissors'

const getComputerChoice = () => {
  const rpsChoice = ["Rock", "Paper", "Scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  return rpsChoice[randomChoice];
};

// **getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult ("Rock", "Scissors") 👉 1
// human loses - getResult ("Scissors", "Rock") 👉 -1
// human draws - getResult ("Rock", "Rock") 👉 0
const getResult = (playerChoice, computerChoice) => {
  // return the result of the Score based on if you won, drew, or tie
  let score;
  if (playerChoice == computerChoice) {
    score = 0;
  } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    score = 1;
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    score = 1;
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    score = 1;
  } else {
    score = -1;
  }
  return score;
};

// ** showResult updates the DOM to `You Win` or `You Lose` or `it's a Draw!` based on the score. Also shows Player Choice vs Computer Choice **

const showResult = (score, playerChoice, computerChoice) => {
  // You should do result.innerText = "You Lose"
  // Don't forget to grabb the div the "result" id!

  const resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const playerScoreDiv = document.getElementById("player-score");

  if (score == -1) {
    resultDiv.innerText = "You Lose!";
  } else if (score == 0) {
    resultDiv.innerText = "It's a tie!";
  } else {
    resultDiv.innerText = "You Won!";
  }

  handsDiv.innerText = ` 🧔${playerChoice} vs 🤖${computerChoice}`;
  playerScoreDiv.innerText = ` Your Score: ${totalScore["playerScore"]}  vs Computer Score : ${totalScore["computerScore"]}`;
};
// ** Calculate who won and show it on the screen **
const onClickRPS = (playerChoice) => {
  console.log({ playerChoice });
  const computerChoice = getComputerChoice();
  console.log({ computerChoice });
  const score = getResult(playerChoice, computerChoice);
  totalScore["playerScore"] += score;
  totalScore["computerScore"] -= score;
  console.log({ score });
  console.log(totalScore);
  console.log(totalScore);
  showResult(score, playerChoice, computerChoice);
};
//  ** Make the RPS buttons actively listen for a click and do something  once a click is detected **

const playGame = () => {
  // use querySelector to select all RPS buttons

  const rpsButtons = document.querySelectorAll(".rpsButton");
  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value);
  });
  const endGameButton = document.getElementById("endGameButton");
  endGameButton.onclick = () => endGame(totalScore);
};

// // ** endGame function clears all the text on the DOM **
const endGame = (totalScore) => {
  totalScore["playerScore"] = 0;
  totalScore["computerScore"] = 0;
  const resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const playerScoreDiv = document.getElementById("player-score");
  resultDiv.innerText = "";
  handsDiv.innerText = "";
  playerScoreDiv.innerText = "";
};

playGame();
=======
const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotalDiv = document.getElementById("perPersonTotal");

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {
  const bill = Number(billInput.value);
  const tip = Number(tipInput.value) / 100;
  const tipAmount = bill * tip;
  const total = bill + tipAmount;
  const perPersonTotal = total / numberOfPeople;
  perPersonTotalDiv.innerText = `$${perPersonTotal.toLocaleString("en-us")}`;
  numberOfPeopleDiv.innerText = numberOfPeople;
};

const increasePeople = () => {
  // increment the number of people by clicking the "-" button
  numberOfPeople += 1;
  numberOfPeopleDiv.innerText = numberOfPeople;
  calculateBill();
};
const decreasePeople = () => {
  // decrement the number of people by clicking the "-" button
  // give a condition that limits the number of people decreased to one when the "-" button is clicked
  if (numberOfPeople <= 1) {
    alert("Hey! you can't choose less than one 😀");
    return;
  }
  numberOfPeople -= 1;
  numberOfPeopleDiv.innerText = numberOfPeople;
  calculateBill();
};
>>>>>>> 9ecf094 (initial commit)
