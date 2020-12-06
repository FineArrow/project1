let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10)
}

function compareGuesses(userGuess, compGuess, targetNum) {
    console.log("got to compare guesses")

    if (Math.abs(targetNum - userGuess) <= Math.abs(targetNum - compGuess)) {
        return true
    } else {
        return false
    }
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore++
    } else if (winner === 'computer') {
        computerScore++
    }
}

function advanceRound() {
    currentRoundNumber++
}
