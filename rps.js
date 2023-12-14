//Random number to select computer choice from array length.

let playerChoice = "";
let compChoice = "";

let screen = document.querySelector('.choiceText')

//Set playerChoice to rock & compChoice to random
let rocket = document.querySelector('.fa-hand-rock')
rocket.addEventListener('click', rockChoice);

function rockChoice () {
    playerChoice = 'rock';
    computerChoice()
    screen.textContent = `| Player: ${playerChoice} | ** | Computer: ${compChoice} |`;
    gameRound()
    return playerChoice
}

//Set playerChoice to paper & compChoice to random
let paper = document.querySelector('.fa-paper-plane')
paper.addEventListener('click', paperChoice);

function paperChoice () {
    playerChoice = 'paper';
    computerChoice()
    screen.textContent = `| Player: ${playerChoice} | ** | Computer: ${compChoice} |`;
    gameRound()
    return playerChoice
}

//Set playerChoice to scissors & compChoice to random
let scissors = document.querySelector('.fa-scissors')
scissors.addEventListener('click', scissorChoice);

function scissorChoice () {
    playerChoice = 'scissors';
    computerChoice()
    screen.textContent = `| Player: ${playerChoice} | ** | Computer: ${compChoice} |`;
    gameRound()
    return playerChoice
}

//Set compChoice to random either rock, paper, or scissors
function computerChoice() {
    let choice = ['rock', 'paper', 'scissors']
    compChoice = choice[Math.floor(Math.random() * 3)]
    return compChoice
}

//Assigns both scores to 0
let playerScore = 0;
let computerScore = 0;

//Links above variables to html
let pScore = document.querySelector('.playerScore');
let cScore = document.querySelector('.compScore');

//Game logic - function called when either button choice is clicked and scores are updated
function gameRound() {

    if (playerChoice === compChoice) {
        boo()

        playerScore = 0
        pScore.textContent = playerScore

        computerScore = 0
        cScore.textContent = computerScore

    } else if (playerChoice === "rock" && compChoice === "scissors") {
        
        playerScore++ 
        pScore.textContent = playerScore

        cScore.textContent = computerScore

        if (playerScore >= 3) {
            woo()
            playerScore = 0
            pScore.textContent = playerScore

            computerScore = 0
            cScore.textContent = computerScore
        }

    } else if (playerChoice === "paper" && compChoice === "rock") {
        
        playerScore++
        pScore.textContent = playerScore

        cScore.textContent = computerScore

        if (playerScore >= 3) {
            woo()
            playerScore = 0
            pScore.textContent = playerScore

            computerScore = 0
            cScore.textContent = computerScore
        }

    } else if (playerChoice === "scissors" && compChoice === "paper") {
        
        playerScore++
        pScore.textContent = playerScore

        cScore.textContent = computerScore

        if (playerScore >= 3) {
            woo()
            playerScore = 0
            pScore.textContent = playerScore

            computerScore = 0
            cScore.textContent = computerScore
        }

    } else {

        pScore.textContent = playerScore

        computerScore++
        cScore.textContent = computerScore

        if (computerScore >= 3) {
            foo()
            playerScore = 0
            pScore.textContent = playerScore

            computerScore = 0
            cScore.textContent = computerScore
        }
    }
}

//Ghost easter eggs
let ghostie = document.querySelector('.fa-ghost')
    
    ghostie.addEventListener('click', boo2);

function boo(){
    alert("A tie!!? Ghostie says boo! Scores reset!");
}

function woo(){
    alert("Three points!!? Ghostie says woo! Player wins!");
}

function foo(){
    alert("Ekkk!! Ghostie says this is awks! Computer wins!");
}

function boo2(){
    alert("Hello I'm Ghostie!");
}
