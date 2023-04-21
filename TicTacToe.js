var musicStart = document.querySelector("html")
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

    if (topLeft.className === "player-X") {
        if (topMiddle.className === "player-X" && topRight.className === "player-X") {
            winner = "X"
            winDisplay()
        } else if ( middleLeft.className === "player-X" && bottomLeft.className === "player-X") {
            winner = "X"
            winDisplay()
        }
    }

    if (bottomRight.className === "player-X") {
        if (bottomMiddle.className === "player-X" && bottomLeft.className === "player-X") {
            winner = "X"
            winDisplay()
        } else if (middleRight.className === "player-X" && topRight.className === "player-X") {
            winner = "X"
            winDisplay()
        }
    }

    if (middleMiddle.className === "player-X") {
        if (middleLeft.className === "player-X" && middleRight.className === "player-X") {
            winner = "X"
            winDisplay()
        } else if ( topLeft.className === "player-X" && bottomRight.className === "player-X") {
            winner = "X"
            winDisplay()
        } else if (topMiddle.className === "player-X" && bottomMiddle.className === "player-X") {
            winner = "X"
            winDisplay()
        } else if (topRight.className === "player-X" && bottomLeft.className === "player-X") {
            winner = "X"
            winDisplay()
        }
    }

    if (topLeft.className === "player-O") {
        if (topMiddle.className === "player-O" && topRight.className === "player-O") {
            winner = "O"
            winDisplay()
        } else if ( middleLeft.className === "player-O" && bottomLeft.className === "player-O") {
            winner = "O"
            winDisplay()
        }
    }

    if (bottomRight.className === "player-O") {
        if (bottomMiddle.className === "player-O" && bottomLeft.className === "player-O") {
            winner = "O"
            winDisplay()
        } else if (middleRight.className === "player-O" && topRight.className === "player-O") {
            winner = "O"
            winDisplay()
        }
    }

    if (middleMiddle.className === "player-O") {
        if (middleLeft.className === "player-O" && middleRight.className === "player-O") {
            winner = "O"
            winDisplay()
        } else if ( topLeft.className === "player-O" && bottomRight.className === "player-O") {
            winner = "O"
            winDisplay()
        } else if (topMiddle.className === "player-O" && bottomMiddle.className === "player-O") {
            winner = "O"
            winDisplay()
        } else if (topRight.className === "player-O" && bottomLeft.className === "player-O") {
            winner = "O"
            winDisplay()
        }
    }

    if (turnCount === 9 && winner === "") {
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
    winner = "draw"
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
    winnerDisplay.textContent = " "
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
        if (clickTarget.tagName === "LI" && (clickTarget.className !== "player-X" || clickTarget.className !== "player-O")) {
            if (playerTurn === "X" && clickTarget.className !== "player-O") {
                clickTarget.classList.add("player-X")
                clickTarget.innerText = "X"
                turnCount += 1
                winCheck()
                playerTurn = "O"
                turnDisplay.textContent = playerTurn + "'s Turn"
            } else if (playerTurn === "O" && clickTarget.className !== "player-X") {
                clickTarget.classList.add("player-O")
                clickTarget.innerText = "O"
                turnCount += 1
                winCheck()
                playerTurn = "X"
                turnDisplay.textContent = playerTurn + "'s Turn"
            }
        }
    }
})

musicStart.addEventListener("click", function() {
    var audio = document.querySelector("audio")
    audio.volume = 0.05
    audio.loop = true
    audio.play()
})
  