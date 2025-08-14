//scores start at zero
let humanScore = 0;
let computerScore = 0;

//Randomly return Rock, paper or scissors.
function getComputerChoice(){
    let x = Math.floor(Math.random() * 3) + 1; 
    if (x == 1){ 
        return x = "Rock";
    }
    if (x == 2){
        return x = "Paper";
    }    
    if (x == 3){
        return x = "Scissors";
    }
}

//Get user's input and make first letter capitalized
//and the rest lowercase
function getHumanChoice(){
    let x = (prompt("Rock, Paper, Scissors, SHOOT: "));
    return x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();
}

//RPS logic
//Increase human/computer score depending on who won
function playRound(x, y){
    if (x === y){
        console.log("TIE!");
    } 
    else if (x === "Rock" && y === "Scissors"){
        console.log("You win! Rock beats Scissors")
        humanScore++;
    }
    else if (x === "Rock" && y === "Paper"){
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }
    else if (x === "Paper" && y === "Rock"){
        console.log("You win! Paper beats Rock");
        humanScore++;
    }
    else if (x === "Paper" && y === "Scissors"){
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }
    else if (x === "Scissors" && y === "Paper"){
        console.log("You win! Scissors beats Paper");
        humanScore++;
    }
    else if (x === "Scissors" && y === "Rock"){
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    }
}

//loops playround 5 times. 
//logs the score
function playGame(){
    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    } 
    if (computerScore > humanScore){
        console.log("You lost!");
        console.log("You: " + humanScore + " Computer: " + computerScore);
    } else if (computerScore < humanScore){
        console.log("You won!")
        console.log("You: " + humanScore + " Computer: " + computerScore);
    }
    if (computerScore == humanScore){
        console.log("TIE!!!");
    }
}

