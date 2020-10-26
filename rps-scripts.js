const header = document.querySelector('h1');
const display = document.querySelector('#game-display');
const scoreboard = document.querySelector('#scoreboard');
const docPlayerScore = document.querySelector('#player-score');
const docCompScore = document.querySelector('#comp-score');
const docRoundNum = document.querySelector('#round-num');
const docRoundResult = document.querySelector('#round-result');
const newGame = document.querySelector('#ng-btn');
const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
const matchResult = document.querySelector('#match-result');
const docPlayerChoice = document.querySelector('#player-choice');
const docCompChoice = document.querySelector('#comp-choice');
const firstToBtns = document.getElementsByName('firstTo');

let goalScore = 5;
let roundNum = 1;
let playerScore = 0;
let compScore = 0;
let roundResult;
let holdCompChoice;

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
    docCompChoice.textContent = choiceStr;
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

clickRound = (select) => {
    playRound(select, computerPlay());
    setScore();
    docPlayerChoice.textContent = select;
    if (playerScore == goalScore || compScore == goalScore) {
        if (playerScore > compScore) {
            matchResult.textContent = 'You win! Congrats!'
        } else {
            matchResult.textContent = 'You lose. Oof.'
        }
    }
    roundNum += 1;
}

resetScore = () => {
    roundNum = 1;
    playerScore = 0;
    compScore = 0;
    roundResult = '';
    setScore();
}

setScore = () => {
    docRoundNum.textContent = roundNum;
    docRoundResult.textContent = roundResult;
    docCompScore.textContent = compScore;
    docPlayerScore.textContent = playerScore;
};

rockBtn.addEventListener('click',  () => {
    clickRound('rock');
});
scissorsBtn.addEventListener('click', () => {
    clickRound('scissors');
});
paperBtn.addEventListener('click', () => {
    clickRound('paper');
});
newGame.addEventListener('click', () => {
    resetScore();
    matchResult.textContent = '';
})

firstToBtns.forEach(btn => {
    btn.addEventListener('click', () =>{
     goalScore = btn.value
    })
})

setScore();
