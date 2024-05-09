let score1 = 0;
let score2 = 0;
let currentPlayer = 1;

function rollDice(player) {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const scoreElement = document.getElementById(`score${player}`);
    const diceElement = document.getElementById(`dice${player}`);

    diceElement.textContent = randomNumber;
    if (player === 1) {
        score1 += randomNumber;
    } else {
        score2 += randomNumber;
    }

    scoreElement.textContent = player === 1 ? score1 : score2;
    checkWin();
}

function checkWin() {
    if (score1 >= 100) {
        displayWinMessage(1);
    } else if (score2 >= 100) {
        displayWinMessage(2);
    }
}

function displayWinMessage(player) {
    document.getElementById("winner").textContent = `Player ${player} wins!`;
    document.getElementById("roll1").disabled = true;
    document.getElementById("roll2").disabled = true;
}

function restartGame() {
    score1 = 0;
    score2 = 0;
    document.getElementById("score1").textContent = "0";
    document.getElementById("score2").textContent = "0";
    document.getElementById("dice1").textContent = "";
    document.getElementById("dice2").textContent = "";
    document.getElementById("winner").textContent = "";
    document.getElementById("roll1").disabled = false;
    document.getElementById("roll2").disabled = false;
}