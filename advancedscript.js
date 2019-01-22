var userwins = 0
var computerwins = 0
var games = 0

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
        return "tie"
    }
    if (computer === "rock" && userplay === "paper") {
        return "user"
    }
    if (computer === "rock" && userplay === "scissors") {
        return "computer"
    }
    if (computer === "paper" && userplay === "scissors") {
        return "user"
    }
    if (computer === "paper" && userplay === "rock") {
        return "computer"
    }
    if (computer === "scissors" && userplay === "paper") {
        return "computer"
    }
    if (computer === "scissors" && userplay === "rock") {
        return "user"
    }

}

function displayWinner(event) {
    event.preventDefault()
    if (games === 3){
        var r = confirm("Would you like to play again?")
        if (r){
            userwins = 0
            computerwins = 0
            games = 0
            $("#result").html("")
            $("#scoreboard").html("")
            return null
        }
    }
    var currentPlay = document.querySelector('input[name = "options"]:checked').id;
    var thisround = checkForWin(pickComputersPlay(), currentPlay);
    games++
    if (thisround === "computer"){
        computerwins++
        $("#scoreboard").append(`
        <div class="row">
        <div class="col-xs-4">x</div>
        <div class="col-xs-4"></div>
        <div class="col-xs-4"></div>
        </div>
        `)
    }
    if (thisround === "user"){
        userwins++
        $("#scoreboard").append(`
        <div class="row">
        <div class="col-xs-4"></div>
        <div class="col-xs-4">x</div>
        <div class="col-xs-4"></div>
        </div>
        `)
    }
    if (thisround === "tie"){
        $("#scoreboard").append(`
        <div class="row">
        <div class="col-xs-4"></div>
        <div class="col-xs-4"></div>
        <div class="col-xs-4">x</div>
        </div>
        `)
    }
    if (games === 3){
        if (computerwins > userwins) {
            $("#result").html("The Computer Has Won")
        } else if (computerwins === userwins) {
            $("#result").html("Game was a Tie!")
        } else {
            $("#result").html("You Win!")
        }
    }
}