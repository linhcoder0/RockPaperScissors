//scores start at zero
let humanScore = 0;
let tieScore = 0;
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

//RPS logic
//Increase human/computer score depending on who won
function playRound(x, y){
    y = getComputerChoice();
    if (x === y){
        tieScore++;
        tieScoreDiv.innerHTML = "<p>Tie Score:</p>" + tieScore;
        console.log("TIE!" + " P: " + humanScore + " T: " + tieScore + " C: " + computerScore);
    } 
    else if (x === "Rock" && y === "Scissors"){
        humanScore++;
        playerScoreDiv.innerHTML = "<p>Human Score:</p>" + humanScore;
        console.log("(WIN) ROCK VS SCISSORS = ROCK WIN" + " P: " + humanScore + " T: " + tieScore + " C: " + computerScore)
    }
    else if (x === "Rock" && y === "Paper"){
        computerScore++;
        computerSelectionDiv.innerHTML = "<p>Computer Score:</p>" + computerScore;
        console.log("(LOSS) ROCK VS PAPER = ROCK LOSS" + " P: " + humanScore + " T: " + tieScore + " C: " + computerScore);
    }
    else if (x === "Paper" && y === "Rock"){
        humanScore++;
        playerScoreDiv.innerHTML = "<p>Human Score:</p>" + humanScore;
        console.log("(WIN) PAPER VS ROCK = PAPER WIN" + " P: " + humanScore + " T: " + tieScore + " C: " + computerScore);

    }
    else if (x === "Paper" && y === "Scissors"){
        computerScore++;
        computerSelectionDiv.innerHTML = "<p>Computer Score:</p>" + computerScore;
        console.log("(LOSS) PAPER VS SCISSORS = PAPER LOSS" + " P: " + humanScore + " T: " + tieScore + " C: " + computerScore);

    }
    else if (x === "Scissors" && y === "Paper"){
        humanScore++;
        playerScoreDiv.innerHTML = "<p>Human Score:</p>" + humanScore;
        console.log("(WIN) SCISSORS VS PAPER = SCISSORS WIN" + " P: " + humanScore + " T: " + tieScore + " C: " + computerScore);

    }
    else if (x === "Scissors" && y === "Rock"){
        computerScore++;
        computerSelectionDiv.innerHTML = "<p>Computer Score:</p>" + computerScore;
        console.log("(LOSS) SCISSORS VS ROCK = SCISSORS LOSS" + " P: " + humanScore + " T: " + tieScore + " C: " + computerScore);
    }
    if(humanScore >= 5) {
        let winner = "YOU! :)"
        winnerDiv.innerHTML = "Winner: " + winner;  
    } 
    if(computerScore >= 5) {
        let winner = "THE BOT! :("
        winnerDiv.innerHTML = "Winner: " + winner;  
    } 
}

//logs the score
// function playGame(){
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     playRound(humanSelection,computerSelection);

//     if (computerScore > humanScore){
//         console.log("You lost!");
//         console.log("You: " + humanScore + " Computer: " + computerScore);
//     } else if (computerScore < humanScore){
//         console.log("You won!")
//         console.log("You: " + humanScore + " Computer: " + computerScore);
//     }
//     if (computerScore == humanScore){
//         console.log("TIE!!!");
//     }
// }
let winner = "";
document.getElementById("Rock").addEventListener("click", function(){
    playRound('Rock');
});
document.getElementById("Paper").addEventListener("click", function(){
    playRound('Paper');
});
document.getElementById("Scissors").addEventListener("click", function(){
    playRound('Scissors');
});

const playerScoreDiv = document.createElement("div");
playerScoreDiv.setAttribute("id", "pDiv");
playerScoreDiv.style.color = "red";
playerScoreDiv.innerHTML = "<p>Human Score: </p>" + humanScore;
document.body.appendChild(playerScoreDiv)

const tieScoreDiv = document.createElement("div");
tieScoreDiv.setAttribute("id", "tDiv");
tieScoreDiv.style.color = "black";
tieScoreDiv.innerHTML = "<p>Tie Score:</p>"  + tieScore;
document.body.appendChild(tieScoreDiv)

const computerSelectionDiv = document.createElement("div");
computerSelectionDiv.setAttribute("id", "cDiv");
computerSelectionDiv.style.color = "blue";
computerSelectionDiv.innerHTML = "<p>Computer Score:</p>"  + computerScore;
document.body.appendChild(computerSelectionDiv)

const winnerDiv = document.createElement("div");
winnerDiv.setAttribute("id", "wDiv");
winnerDiv.style.color = "yellow"
winnerDiv.innerHTML = "Winner: " + winner;
document.body.appendChild(winnerDiv)
