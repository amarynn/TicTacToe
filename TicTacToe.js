var mainDisplay = document.querySelector("main")
var winnerDisplay = document.querySelector(".winner")
var resetMatch = document.querySelector(".clear-scores")
var newGame = document.querySelector(".clear-gameboard")
var xScore = document.querySelector("#X-score")
var oScore = document.querySelector("#O-score")
var turnDisplay = document.querySelector(".player-turn-display")
var topLeft = document.querySelector("#top-left")
var topMiddle = document.querySelector("#top-middle")
var topRight = document.querySelector("#top-right")
var middleLeft = document.querySelector("#middle-left")
var middleMiddle = document.querySelector("#middle-middle")
var middleRight = document.querySelector("#middle-right")
var bottomLeft = document.querySelector("#bottom-left")
var bottomMiddle = document.querySelector("#bottom-middle")
var bottomRight = document.querySelector("#bottom-right")
var playerTurn = "X"
turnDisplay.textContent = playerTurn + "'s Turn"
var winner = ""
var turnCount = 0

function winCheck(){

    if (topLeft.className === "player-X" && topMiddle.className === "player-X" && topRight.className === "player-X") {
        winner = "X"
        winDisplay()
    } else if (middleLeft.className === "player-X" && middleMiddle.className === "player-X" && middleRight.className === "player-X") {
        winner = "X"
        winDisplay()
    } else if (bottomLeft.className === "player-X" && bottomMiddle.className === "player-X" && bottomRight.className === "player-X") {
        winner = "X"
        winDisplay()
    } else if (topLeft.className === "player-X" && middleLeft.className === "player-X" && bottomLeft.className === "player-X") {
        winner = "X"
        winDisplay()
    } else if (topMiddle.className === "player-X" && middleMiddle.className === "player-X" && bottomMiddle.className === "player-X") {
        winner = "X"
        winDisplay()
    } else if (topRight.className === "player-X" && middleRight.className === "player-X" && bottomRight.className === "player-X") {
        winner = "X"
        winDisplay()
    } else if (topLeft.className === "player-X" && middleMiddle.className === "player-X" && bottomRight.className === "player-X") {
        winner = "X"
        winDisplay()
    } else if (topRight.className === "player-X" && middleMiddle.className === "player-X" && bottomLeft.className === "player-X") {
        winner = "X"
        winDisplay()
    } else if (topLeft.className === "player-O" && topMiddle.className === "player-O" && topRight.className === "player-O") {
        winner = "O"
        winDisplay()
    } else if (middleLeft.className === "player-O" && middleMiddle.className === "player-O" && middleRight.className === "player-O") {
        winner = "O"
        winDisplay()
    } else if (bottomLeft.className === "player-O" && bottomMiddle.className === "player-O" && bottomRight.className === "player-O") {
        winner = "O"
        winDisplay()
    } else if (topLeft.className === "player-O" && middleLeft.className === "player-O" && bottomLeft.className === "player-O") {
        winner = "O"
        winDisplay()
    } else if (topMiddle.className === "player-O" && middleMiddle.className === "player-O" && bottomMiddle.className === "player-O") {
        winner = "O"
        winDisplay()
    } else if (topRight.className === "player-O" && middleRight.className === "player-O" && bottomRight.className === "player-O") {
        winner = "O"
        winDisplay()
    } else if (topLeft.className === "player-O" && middleMiddle.className === "player-O" && bottomRight.className === "player-O") {
        winner = "O"
        winDisplay()
    } else if (topRight.className === "player-O" && middleMiddle.className === "player-O" && bottomLeft.className === "player-O") {
        winner = "O"
        winDisplay()
    } else if (turnCount === 9) {
        draw()
    }
}

function winDisplay() {
    winnerDisplay.textContent = "The Winner is " + winner + "!"
    if (winner === "X") {
        xScore.textContent = Number(xScore.textContent) + 1
    } else {
        oScore.textContent = Number(oScore.textContent) + 1
    }
}

function draw() {
    winnerDisplay.textContent = "Its a draw!!"
}

function clearBoard() {
    topLeft.classList.remove("player-X", "player-O")
    topMiddle.classList.remove("player-X", "player-O")
    topRight.classList.remove("player-X", "player-O")
    middleLeft.classList.remove("player-X", "player-O")
    middleMiddle.classList.remove("player-X", "player-O")
    middleRight.classList.remove("player-X", "player-O")
    bottomLeft.classList.remove("player-X", "player-O")
    bottomMiddle.classList.remove("player-X", "player-O")
    bottomRight.classList.remove("player-X", "player-O")
    topLeft.textContent = ""
    topMiddle.textContent = ""
    topRight.textContent = ""
    middleLeft.textContent = ""
    middleMiddle.textContent = ""
    middleRight.textContent = ""
    bottomLeft.textContent = ""
    bottomMiddle.textContent = ""
    bottomRight.textContent = ""
    turnCount = 0
    winner = ""
    playerTurn = "X"
    turnDisplay.textContent = playerTurn + "'s Turn"
    winnerDisplay.textContent = ""
}

function resetScores() {
    xScore.textContent = 0
    oScore.textContent = 0
}

newGame.addEventListener("click", function() {
    clearBoard()
})

resetMatch.addEventListener("click", function () {
    resetScores()
    clearBoard()
})

mainDisplay.addEventListener("click", function(event) {
    var clickTarget = event.target
    
    if (winner === "") {
        if (clickTarget.tagName === "LI" && clickTarget.className !== "player-X" || clickTarget.className !== "player-O") {
            if (playerTurn === "X" && clickTarget.className !== "player-O") {
                clickTarget.classList.add("player-X")
                clickTarget.textContent = "X"
                turnCount += 1
                winCheck()
                playerTurn = "O"
                turnDisplay.textContent = playerTurn + "'s Turn"
            } else if (playerTurn === "O" && clickTarget.className !== "player-X") {
                clickTarget.classList.add("player-O")
                clickTarget.textContent = "O"
                turnCount += 1
                winCheck()
                playerTurn = "X"
                turnDisplay.textContent = playerTurn + "'s Turn"
            }
        }
    }
})