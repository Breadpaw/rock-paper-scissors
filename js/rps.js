// Variables

let playerWins = 0;
let computerWins = 0;

/*

computerPlay

Randomly picks rock, paper or scissors and returns a String value

*/

function computerPlay() {
  // array with options
  let options = ["rock", "paper", "scissors"];

  // generate random number 0-2
  // random = between 0 and 1 so multiply by range and round it
  let randNum = Math.round(Math.random() * 2);

  return options[randNum];
}

/*

winOrLose

takes a String argument, evaluates Win or Lose and returns a winning or losing String

*/

function winOrLose(x) {
  if (x == "win") {
    playerWins++;

    if (playerWins < 5) {
      return "Cometh hither and I'll bite your leg off!";
    } else {
      return "Curse ye! Thy are victorious!";
    }
  }

  if ((x = "lose")) {
    computerWins++;

    if (computerWins < 5) {
      return "I outclassed you, rapscallion! Bringeth it!";
    } else {
      return "Make off, thy scallywag, I have vanquished ye!";
    }
  }
}

/*

playRound

Asks input from the user and computes that of the computer and compares them, then calls the winOrLose function

returns nothing

*/

function playRound(playerSelection) {
  const computerSelection = computerPlay();

  switch (playerSelection) {
    case computerSelection:
      return "'Tis a draw! En garde!";
      break;
    case "rock":
      if (computerSelection == "paper") {
        return winOrLose("win");
      } else {
        return winOrLose("lose");
      }
      break;
    case "paper":
      if (computerSelection == "rock") {
        return winOrLose("win");
      } else {
        return winOrLose("lose");
      }
      break;
    case "scissors":
      if (computerSelection == "rock") {
        return winOrLose("lose");
      } else {
        return winOrLose("win");
        break;
      }
  }
}

/**
 * THIS IS WHERE THE DOM STARTS
 * Add listener events to all img objects, add the function
 */

const images = document.querySelectorAll("img");

images.forEach((image) => {
  image.addEventListener("click", (e) => {
    playRound(e.target.id);
  });
});
