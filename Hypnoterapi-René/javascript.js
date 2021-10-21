let targetNumber = () => {
    let target = Math.floor(Math.random() * 10);
    return target;
  }; // TargetNumber randomly generated


let gameRound = targetNumber()
let computerGuess = targetNumber();

let round = 0; //Round of the game
let humanScore = 0; // humanScore points
let computerScore = 0; //Computer --- || ---

const winnerGame = (computerGuess, humanGuess, gameRound) => {
    console.log(gameRound)
    console.log(computerGuess)

    const humanReach = humanGuess + gameRound;
    const computerReach = computerGuess + gameRound;
    if (computerGuess === humanGuess) {
      return "It's a Draw";
    } else if (computerReach > humanReach) {
      humanScore += 1;
      round += 1;
      return "Human Wins";
    } else if (computerReach < humanReach) {
      computerScore += 1;
      round += 1;
      return "Computer Wins";
    }
  };


  console.log(winnerGame(computerGuess, 3, gameRound))
  console.log(round)
  console.log(computerScore)
  console.log(humanScore)
// make a random target for human and computer to guess
//make a round counter
//make a scoreboard for human /computer
//make human/computer guess and store the values
// find out who is the closest to targetNumber.
//push in the player who is the closest and print winner name
