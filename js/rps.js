/*

- make function computerPlay that returns rock, paper or scissors randomly
- playerselection
- computerselection


*/

console.log("Function to run is playRound()");

function computerPlay() {
  // array with options
  let options = ["rock", "paper", "scissors"];

  // generate random number 0-2
  // random = between 0 and 1 so multiply by range and round it
  let randNum = Math.round(Math.random() * 2);

  return options[randNum];
}

function playRound(computerSelection, playerSelection) {
  // get the computer's selection
  const computerSelection = computerPlay;
  // get the player's selection
  const playerSelection = prompt("What'll it be, muchacho?");

  console.log(
    "Player: " + playerSelection + " | Computer: " + computerSelection
  );
}
