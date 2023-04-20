var playerTurn = "X"
var mainDisplay = document.querySelector("main")
var winnerDisplay = document.querySelector(".winner")
var winner = ""
var turnCount = 0

function winCheck(){
    var topLeft = document.querySelector("#top-left")
    var topMiddle = document.querySelector("#top-middle")
    var topRight = document.querySelector("#top-right")

    var middleLeft = document.querySelector("#middle-left")
    var middleMiddle = document.querySelector("#middle-middle")
    var middleRight = document.querySelector("#middle-right")

    var bottomLeft = document.querySelector("#bottom-left")
    var bottomMiddle = document.querySelector("#bottom-middle")
    var bottomRight = document.querySelector("#bottom-right")

    if (topLeft.className === "player-X" && topMiddle.className === "player-X" && topRight.className === "player-X"){
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
    } else if (topLeft.className === "player-O" && topMiddle.className === "player-O" && topRight.className === "player-O"){
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
    winnerDisplay.textContent = "The Winner is " + winner
    mainDisplay.removeEventListener("click", function(event){})
}

function draw() {
    winnerDisplay.textContent = "Its a draw!!"
}

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
            } else if (playerTurn === "O" && clickTarget.className !== "player-X") {
                clickTarget.classList.add("player-O")
                clickTarget.textContent = "O"
                turnCount += 1
                winCheck()
                playerTurn = "X"
            }
        }
    }
})