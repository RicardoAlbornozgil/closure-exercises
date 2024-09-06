function guessingGame() {
    const secretNumber = Math.floor(Math.random() * 100);
    let gameOver = false;
    let guesses = 0;

    return function (guess) {
        if (gameOver) return "The game is over, you already won!";
        guesses++;
        if (guess < secretNumber) return `${guess} is too low!`;
        if (guess > secretNumber) return `${guess} is too high!`;
        gameOver = true;
        return `You win! You found ${guess} in ${guesses} guesses.`;
    };
}

module.exports = { guessingGame };
