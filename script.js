
function pickComputersPlay() {
    // Make an array of options
    var picks = ["rock", "paper", "scissors"]
    // Find a random number between 0 to 2
    var random = Math.floor(Math.random() * 3)
    // Return computers pick.
    return picks[random]
}

function checkForWin(computer, userplay) {
    // ENTER ALL THE CODE HERE!!!
    if (computer === userplay) {
        return "The game was a TIE, Friendship Won!"
    }
    if (computer === "rock" && userplay === "paper") {
        return "Computer picked rock, You win!"
    }
    if (computer === "rock" && userplay === "scissors") {
        return "Computer picked rock, computer wins."
    }
    if (computer === "paper" && userplay === "scissors") {
        return "Computer picked paper, You win!"
    }
    if (computer === "paper" && userplay === "rock") {
        return "Computer picked paper, computer wins."
    }
    if (computer === "scissors" && userplay === "paper") {
        return "Computer picked scissors, computer wins."
    }
    if (computer === "scissors" && userplay === "rock") {
        return "Computer picked scissors, You win!"
    }
    // This function will take in the computer and players choice.
    // It will return a string stating the winner.
    return "Please change this!"
}

function displayWinner(event) {
    event.preventDefault()
    var currentPlay = document.querySelector('input[name = "options"]:checked').id;
    var message = checkForWin(pickComputersPlay(), currentPlay);
    $("#result").html(message)
}
