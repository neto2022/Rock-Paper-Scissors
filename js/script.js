// A program thats get rock, paper or scissors from the user and 
// the computer returns randomically rock, paper or scissors
// and checks who won or ended up on a draw!

function getComputerChoice() {
    let computerTurn;
    while (1) {
        computerTurn = Math.random()*10;
        if (computerTurn >= 1 && computerTurn<=3) {
            computerTurn =  Math.round(computerTurn, 3);

            switch (computerTurn) {
                case 1:
                    computerTurn = 1;//Rock
                break;
                case 2:
                    computerTurn = 2; //Paper
                break;
                case 3:
                    computerTurn = 3; //Scissors
                break;
                default:
                break;
            }
            break;
        }
    }
    return computerTurn;
}

let playerSelection = 3;

function playRound() {
    computerSeletion = getComputerChoice();
    console.log(computerSeletion);
    if (playerSelection == 1 && computerSeletion == 1 ) {
        console.log("Draw! Nobody Wins...");
    } else if (playerSelection == 1 && computerSeletion == 2) {
        console.log("Lose! Paper beats Rock");
    } else if (playerSelection == 1 && computerSeletion == 3) {
        console.log("Win! Rock beats Scissor");

    } else if (playerSelection == 2 && computerSeletion == 1 ) {
        console.log("Win! Papers beats Rock");
    } else if (playerSelection == 2 && computerSeletion == 2) {
        console.log("Draw! Nobody Wins...");
    } else if (playerSelection == 2 && computerSeletion == 3) {
        console.log("Lose! Papers beats rock");

    } else if (playerSelection == 3 && computerSeletion == 1 ) {
        console.log("Lose! Rock beats Scissor");
    } else if (playerSelection == 3 && computerSeletion == 2) {
        console.log("Win! Rock beats Paper");
    } else if (playerSelection == 3 && computerSeletion == 3) {
        console.log("Draw! Nobody Wins...");
    }
}
playRound();