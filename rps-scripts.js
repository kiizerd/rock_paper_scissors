const header = document.querySelector('h1');
const display = document.querySelector('#game-display');
const scoreboard = document.querySelector('#scoreboard');
const docPlayerScore = document.querySelector('#player-score');
const docCompScore = document.querySelector('#comp-score');
const docRoundNum = document.querySelector('#round-num');
const newGame = document.querySelector('#ng-btn');
const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');



let totalRounds = 5;
let roundNum = 0;
let playerScore = 0;
let compScore = 0;
let roundResult;

function randChoice(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
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
}

function playRound(playerSelect, compSelect) {
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
}

console.log(playRound(computerPlay(), computerPlay()));

function game() {
    compScore = 0;
    playerScore = 0;
    roundNum = 0;
    //player choice
    //comp choice
    setScore();
    for (let i = 1; i <= totalRounds; i++) {
        let compFinal = computerPlay();
        let playerChoice = 'rock'; //prompt('Rock, Paper, or Scissors?', '');
        let playerFinal = playerChoice
        playRound(playerFinal, compFinal);
        roundNum += 1;
        setScore();
        document.getElementById('player-choice').innerHTML = playerFinal;
        document.getElementById('comp-choice').innerHTML = compFinal;
        console.log(roundResult)

    };   
};

function setScore() {
    document.getElementById('round-num').innerHTML = roundNum;
    document.getElementById('comp-score').innerHTML = compScore;
    document.getElementById('player-score').innerHTML = playerScore;
    document.getElementById('round-num').innerHTML = roundNum;
    document.getElementById('round-result').innerHTML = roundResult;
};

