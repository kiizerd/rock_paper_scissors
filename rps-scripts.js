const header = document.querySelector('h1');
const display = document.querySelector('#game-display');
const scoreboard = document.querySelector('#scoreboard');
const docPlayerScore = document.querySelector('#player-score');
const docCompScore = document.querySelector('#comp-score');
const roundNum = document.querySelector('#round-num');
const newGame = document.querySelector('#ng-btn');
const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');



let totalRounds = 5;
let playerScore = 0;
let compScore = 0;

function randChoice(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
    //random number between min(included) and max(exlcuded)
}

function computerPlay() {
    let compChoice = randChoice(1, 4);
    let choiceStr;
    switch(compChoice) {
        case 1:
            choiceStr = 'rock'
            break;
        case 2:
            choiceStr = 'paper'
            break;
        case 3:
            choiceStr = 'scissors'
            break;    
    }
    return choiceStr;
    //selects randomly between 1, 2, and 3, and assigns choiceStr with 
    // 'rock', 'paper', or 'scissors', respectively and returns it.
}

function playRound(playerSelect, compSelect) {
    let roundResult;
    switch(playerSelect) {
        case 'rock':
            switch(compSelect) {
                case 'rock':
                    roundResult = 'Tie! Try Again.'
                    break;
                case 'paper':
                    roundResult = 'Paper beats Rock. You lose!';
                    compScore += 1;
                    break;
                case 'scissors':
                    roundResult = 'Rock beats Scissors! You win!';
                    playerScore += 1;
                    break;
            }
            break;
        case 'paper':
            switch(compSelect) {
                case 'rock':
                    roundResult = 'Paper beats rock! You win!';
                    playerScore += 1;
                    break;
                case 'paper':
                    roundResult = 'Tie! Try Again.';
                    break;
                case 'scissors':
                    roundResult = 'Scissors beats Paper. You lose!';
                    compScore += 1;
                    break;
            }
            break;
        case 'scissors':
            switch(compSelect) {
                case 'rock':
                    roundResult = 'Rock beats Scissors. You lose!';
                    compScore += 1;
                    break;
                case 'paper':
                    roundResult = 'Scissors beats Paper. You win!';
                    playerScore += 1;
                    break;
                case 'scissors':
                    roundResult = 'Tie! Try Again.';
                    break;
            }
            break;
        default:
            roundResult = 'Error. Player Choice invalid.'  
            break;  
    }
    return roundResult;
    // Compares computers random selection with players manual one
    // Decides winner and returns roundResult with a string description
}

console.log(playRound(computerPlay(), computerPlay()));

function game() {
    for (let i = 1; i < totalRounds; i++) {
        let = playerChoice = prompt('Rock, Paper, or Scissors?', '');
        let finalChoice = playerChoice.toLowerCase()
        playRound(finalChoice, computerPlay());
    }
}
