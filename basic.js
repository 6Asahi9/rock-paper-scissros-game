const choices =[`rock`, `paper`, `scissors`];
const playerDisplay = document.getElementById(`playerDisplay`);
const computerDisplay = document.getElementById(`ComputerDisplay`);
const resultDisplay = document.getElementById(`ResultDisplay`);
const playerScoreDisplay = document.getElementById(`playerScoreDisplay`)
const computerScoreDisplay = document.getElementById(`computerScoreDisplay`)

let playerScore = 0;
let computerScore = 0;

//this is from the onclick playgame function
function playgame(playerChoice){
    let computerChoice = choices[Math.floor(Math.random()*3)];
    console.log(computerChoice);
    let result =" ";

    if(playerChoice === computerChoice){
        result = `Its a tie!!`
    }
    else{
        switch(playerChoice){
            case `rock`:
                result = (computerChoice === `scissors`) ? `You won!!` : `You Lose`
            break;// make sure to add break in this 

            case `paper`:
                result = (computerChoice === `rock`) ? `You won!!` : `You Lose`
            break;

            case `scissors`:
                result = (computerChoice === `paper`) ? `You won!!` : `You Lose`
            break;
        }
    }
    playerDisplay.textContent =`PLAYER: ${playerChoice}`
    computerDisplay.textContent =`COMPUTER: ${computerChoice}`
    resultDisplay.textContent = result;

    //this is to add so the color wont get stuck
    resultDisplay.classList.remove(`greenText`, `redText`);

    //to change the color of text when won and lose
    switch(result){
        case `You won!!`:
            resultDisplay.classList.add(`greenText`)
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
        break;

        case `You Lose`:// pay attention to the capital letters
            resultDisplay.classList.add(`redText`)
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
        break;
    }
}


