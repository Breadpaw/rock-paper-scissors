// Variables

let playerWins = 0;
let computerWins = 0;

let playerWon = false;
let josephWon = false;

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
  // If someone hasn't won yet, play the game
  if (!anyoneWon()) {
    if (x == "win") {
      playerWins++;

      if (playerWins < 5) {
        return "Cometh hither and I'll bite your leg off!";
      } else {
        playerWon = true;
        return "Curse ye! Thy are victorious!";
      }
    }

    if (x == "lose") {
      computerWins++;

      if (computerWins < 5) {
        return "I outclassed thee, rapscallion! Bringeth it!";
      } else {
        josephWon = true;
        return "Make off, thy scallywag, I have triumphed!";
      }
    }
  }
}

/**
 * check if anyone won the match
 */

function anyoneWon() {
  if (playerWon) {
    return true;
  } else if (josephWon) {
    return true;
  } else {
    return false;
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
      }
  }
}

/**
 * THIS IS WHERE THE DOM STARTS
 * Add listener events to all img objects, add the function
 */

const images = document.querySelectorAll("img");

/**
 * add event listener to all images
 */
images.forEach((image) => {
  image.addEventListener("click", function weaponClick(e) {
    if (!anyoneWon()) {
      let res = playRound(e.target.id);

      // Update Joseph's response
      let response = document.querySelector("#response");
      response.textContent = res;

      // Update the score board
      let playerScore = document.querySelector("#player-score");
      let josephScore = document.querySelector("#joseph-score");

      playerScore.textContent = playerWins;
      josephScore.textContent = computerWins;
    } else if (anyoneWon()) {
      images.forEach((element) => {
        element.style.cursor = "unset";
      });
    }
  });
});
