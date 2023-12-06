//Input to allow the player selection.
let playerSelection = String(prompt("Select either 'Rock', 'Paper' or 'Scissors': ")).toLowerCase()
    
//Random number to select computer choice from array length.

function computerChoice() {
    let choice = ['rock', 'paper', 'scissors']
    return choice[Math.floor(Math.random() * 3)]
}

    let playerScore = 0;
    let computerScore = 0;
    
    //Function which takes two selections and plays the game:
    function playRound(playerSelection) {

        let computerSelection = computerChoice();

        if (playerSelection === computerSelection) {
            console.log(`There was a tie, P: ${playerSelection} and C: ${computerSelection}. Please select again!`)
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            console.log(`Player has won, P: ${playerSelection} and C: ${computerSelection}`)
            playerScore++
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            console.log(`Player has won, P: ${playerSelection} and C: ${computerSelection}`)
            playerScore++
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            console.log(`Player has won, P: ${playerSelection} and C: ${computerSelection}`)
            playerScore++
        } else {
            console.log(`Computer has won, P: ${playerSelection} and C: ${computerSelection}`)
            computerScore++
        };
    
    }

    function game() {
    
        for (i = 1; i<=4; i++) {
            playRound(playerSelection);
            playerSelection = (prompt("Choose again, player: "));
        
            if (playerScore >= 3) {
                console.log(`The player has won! P:${playerScore} and C: ${computerScore}`)
            } else if (computerScore >= 3) {
                console.log(`The computer has won! P:${playerScore} and C: ${computerScore}`)
            } 
        }
        console.log(`The final scores were! P:${playerScore} and C: ${computerScore}`)
    }

    game()
//playRound(playerSelection, computerSelection)
