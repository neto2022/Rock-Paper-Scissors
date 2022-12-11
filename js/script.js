// A program thats get rock, paper or scissors from the user and 
// the computer returns randomically rock, paper or scissors
// and checks who won or ended up on a draw!
//Display the running score, and announce a winner of the game once one player reaches 5 points.

var playerSelection;
var result = "Click Rock, Paper or Scisscors to play!";
var score = 0;
var p1 = document.getElementById('score');

function getComputerChoice() {
    let computerTurn;
    while (1) {
        computerTurn = Math.random()*3;
        if (computerTurn >= 1 && computerTurn<=3) {
            computerTurn =  Math.round(computerTurn, 3);
            break;
        }
    }
    return computerTurn;
}

function scores() {
    if (score < 5) {
        return score++
    }
}

function playRound() {
    
    computerSeletion = getComputerChoice();
    if (playerSelection == 1 && computerSeletion == 1 ) {
        return result = "Draw! Nobody Wins...";
    } else if (playerSelection == 1 && computerSeletion == 2) {
        return result = "Lose! Paper beats Rock";
    } else if (playerSelection == 1 && computerSeletion == 3) {
        scores(score);
        return result = "Win! Rock beats Scissor";

    } else if (playerSelection == 2 && computerSeletion == 1 ) {
        scores(score);
        return result = "Win! Papers beats Rock";
    } else if (playerSelection == 2 && computerSeletion == 2) {
        return result = "Draw! Nobody Wins...";
    } else if (playerSelection == 2 && computerSeletion == 3) {
        return result = "Lose! Paper beats Rock";

    } else if (playerSelection == 3 && computerSeletion == 1 ) {
        return result = "Lose! Rock beats Scissor";
    } else if (playerSelection == 3 && computerSeletion == 2) {
        scores(score);
        return result = "Win! Rock beats Paper";
    } else if (playerSelection == 3 && computerSeletion == 3) {
        return result = "Draw! Nobody Wins...";
    }
    
}


function game(arg) {
    if (arg == 'Rock' ) {
        playerSelection = 1;
    } else if (arg == "Paper") {
        playerSelection = 2;
    } else if (arg == "Scissors") {
        playerSelection = 3;
    }
    playRound(playerSelection);
    
    var p1 = document.getElementById('score');
    if (score == 5) {
        p1.textContent = "You Won! End of the game!" + " Score: "+ score;
    }else{
        p1.textContent = result + " Score: "+ score; 
    }
    
}
game();




