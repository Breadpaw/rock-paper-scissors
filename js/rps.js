/*

- make function computerPlay that returns rock, paper or scissors randomly
- playerselection
- computerselection


*/

function computerPlay() {
  // array with options
  let options = ["rock", "paper", "scissors"];

  // generate random number 0-2
  // random = between 0 and 1 so multiply by range and round it
  let randNum = Math.round(Math.random() * 2);

  return options[randNum];
}
