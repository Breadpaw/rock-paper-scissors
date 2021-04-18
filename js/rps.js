// Variables

let playerNumberOfWins = 0;
let josephNumberOfWins = 0;

let playerWon = false;
let josephWon = false;

/*

josephChoosesWeapon

Randomly picks rock, paper or scissors and returns a String value

*/

function josephChoosesWeapon() {
  // array with weaponOptions
  const weaponOptions = ["rock", "paper", "scissors"];

  // generate random number 0-2
  // random = between 0 and 1 so multiply by range and round it
  const randNum = Math.round(Math.random() * 2);

  return weaponOptions[randNum];
}

/*

winOrLose

takes a String argument, evaluates Win or Lose and returns a winning or losing String

*/

function winOrLose(x) {
  // If someone hasn't won yet, play the game
  if (!ifAnyoneWon()) {
    if (x == "win") {
      playerNumberOfWins++;

      if (playerNumberOfWins < 5) {
        return "Cometh hither and I'll bite your leg off!";
      } else {
        playerWon = true;
        return "Curse ye! Thy are victorious!";
      }
    }

    if (x == "lose") {
      josephNumberOfWins++;

      if (josephNumberOfWins < 5) {
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

function ifAnyoneWon() {
  if (playerWon) {
    return true;
  } else if (josephWon) {
    return true;
  } else {
    return false;
  }
}

/*

playTheGame

Asks input from the user and computes that of the computer and compares them, then calls the winOrLose function

returns nothing

*/

function playTheGame(playerSelection) {
  const computerSelection = josephChoosesWeapon();

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

const images = document.querySelectorAll("img");

images.forEach((image) => {
  image.addEventListener("click", function weaponClick(e) {
    if (!ifAnyoneWon()) {
      const gameOutcome = playTheGame(e.target.id);

      const responseElement = document.querySelector("#response");
      responseElement.textContent = gameOutcome;

      const playerScore = document.querySelector("#player-score");
      const josephScore = document.querySelector("#joseph-score");

      playerScore.textContent = playerNumberOfWins;
      josephScore.textContent = josephNumberOfWins;
    } else if (ifAnyoneWon()) {
      images.forEach((element) => {
        element.style.cursor = "unset";
      });
    }
  });
});
