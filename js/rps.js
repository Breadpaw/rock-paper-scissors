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

userPlay gets the user Input and returns an lower case String

*/

function userPlay() {
  let userInput;

  // in case player selected "cancel"
  if ((userInput = prompt("What'll it be, muchacho?") == null)) {
    console.log(
      "Well...if you don't wanna play, that's fine I guess...-sniff-"
    );
    return "Well...if you don't wanna play, that's fine I guess...-sniff-";
  } else {
    userInput = userInput.toLowerCase();

    return userInput;
  }
}

/*

winOrLose

takes a String argument, evaluates Win or Lose and returns a winning or losing String

*/

function winOrLose(x) {
  if (x == "win") {
    console.log("You win. You are awesome.");
    return "You win. You are awesome.";
  } else {
    console.log("You tried. You failed. Tough cookie.");
    return "You tried. You failed. Tough cookie.";
  }
}

/*

playRound

Asks input from the user and computes that of the computer and compares them, then calls the winOrLose function

returns nothing

*/

function playRound(playerSelection) {
  const computerSelection = computerPlay();
  // const playerSelection = userPlay();

  console.log(
    "Player: " + playerSelection + " | Computer: " + computerSelection
  );

  switch (playerSelection) {
    case computerSelection:
      console.log("TIE! Play again!");
      break;
    case "rock":
      if (computerSelection == "paper") {
        winOrLose("win");
      } else {
        winOrLose("lose");
      }
      break;
    case "paper":
      if (computerSelection == "rock") {
        winOrLose("win");
      } else {
        winOrLose("lose");
      }
      break;
    case "scissors":
      if (computerSelection == "rock") {
        winOrLose("lose");
      } else {
        winOrLose("win");
        break;
      }
    default:
      console.log("Yeah...that's not a valid option.");
      return "Yeah...that's not a valid option.";
  }
}

export {
  playRound 
}