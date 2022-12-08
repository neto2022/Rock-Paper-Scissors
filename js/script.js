// A program thats get rock, paper or scissors from the user and 
// the computer returns randomically rock, paper or scissors
// and checks who won or ended up on a draw!
//Display the running score, and announce a winner of the game once one player reaches 5 points.
let playerSelection;

function getComputerChoice() {
    let computerTurn;
    while (1) {
        computerTurn = Math.random()*10;
        if (computerTurn >= 1 && computerTurn<=3) {
            computerTurn =  Math.round(computerTurn, 3);
            break;
        }
    }
    return computerTurn;
}

function playRound() {
    computerSeletion = getComputerChoice();
    if (playerSelection == 1 && computerSeletion == 1 ) {
        return result = "Draw! Nobody Wins...";
    } else if (playerSelection == 1 && computerSeletion == 2) {
        return result = "Lose! Paper beats Rock";
    } else if (playerSelection == 1 && computerSeletion == 3) {
        return result = "Win! Rock beats Scissor";

    } else if (playerSelection == 2 && computerSeletion == 1 ) {
        return result = "Win! Papers beats Rock";
    } else if (playerSelection == 2 && computerSeletion == 2) {
        return result = "Draw! Nobody Wins...";
    } else if (playerSelection == 2 && computerSeletion == 3) {
        return result = "Lose! Paper beats Rock";

    } else if (playerSelection == 3 && computerSeletion == 1 ) {
        return result = "Lose! Rock beats Scissor";
    } else if (playerSelection == 3 && computerSeletion == 2) {
        return result = "Win! Rock beats Paper";
    } else if (playerSelection == 3 && computerSeletion == 3) {
        return result = "Draw! Nobody Wins...";
    }
}
var result;

let logsOnDiv = document.getElementById("logs");
const p1 = document.createElement('p');


function game(arg) {
    console.log(arg)
    if (arg == 'Rock' ) {
        playerSelection = 1;
    } else if (arg == "Paper") {
        playerSelection = 2;
    } else if (arg == "Scissors") {
        playerSelection = 3;
    }
    playRound(playerSelection);
    console.log(result,'1')
    var contentp1 = document.createTextNode(result);
    p1.appendChild(contentp1);
    p1.setAttribute('id', 'score');
    logsOnDiv.appendChild(p1);
    document.body.insertBefore(p1, logsOnDiv);
}
game();



