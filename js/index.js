//scores start at zero
let humanScore = 0;
let rounds = 0;
let computerScore = 0;
let gameComplete = false;

function restartGame(){
    humanScore = 0;
    rounds = 0;
    computerScore = 0;
    gameComplete = false;

    document.getElementById("restartButton").disabled = true;
    document.getElementById("Rock").disabled = false;
    document.getElementById("Paper").disabled = false;
    document.getElementById("Scissors").disabled = false;
    playerScoreDiv.innerHTML = "<p>YOU</p>" + humanScore;
    roundDiv.innerHTML = "<p>ROUNDS</p>"  + rounds;
    computerSelectionDiv.innerHTML = "<p>COM</p>"  + computerScore;
    winnerDiv.innerHTML = "Winner: " + winner;  
    resultsDiv.innerHTML = "Results: "; 
}

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
        rounds++;
        roundDiv.innerHTML = "<p>ROUNDS</p>"  + rounds;
        let results = ("TIE!");
        resultsDiv.innerHTML = "Results: " +  results; 
    } 
    else if (x === "Rock" && y === "Scissors"){
        humanScore++;
        rounds++;
        playerScoreDiv.innerHTML = "<p>YOU</p>" + humanScore;
        roundDiv.innerHTML = "<p>ROUNDS</p>"  + rounds;

        let results = ("(WIN) ROCK VS SCISSORS = ROCK WIN");
        resultsDiv.innerHTML = "Results: " +  results; 

    }
    else if (x === "Rock" && y === "Paper"){
        computerScore++;
                rounds++;
        computerSelectionDiv.innerHTML = "<p>COM</p>"  + computerScore;
        roundDiv.innerHTML = "<p>ROUNDS</p>"  + rounds;
        let results = ("(LOSS) ROCK VS PAPER = ROCK LOSS");
        resultsDiv.innerHTML = "Results: " +  results; 

    }
    else if (x === "Paper" && y === "Rock"){
        humanScore++;
                rounds++;
        playerScoreDiv.innerHTML = "<p>YOU</p>" + humanScore;
        roundDiv.innerHTML = "<p>ROUNDS</p>"  + rounds;
        let results = ("(WIN) PAPER VS ROCK = PAPER WIN");
        resultsDiv.innerHTML = "Results: " +  results; 

    }
    else if (x === "Paper" && y === "Scissors"){
        computerScore++;
                rounds++;
        computerSelectionDiv.innerHTML = "<p>COM</p>"  + computerScore;
        roundDiv.innerHTML = "<p>ROUNDS</p>"  + rounds;
        let results = ("(LOSS) PAPER VS SCISSORS = PAPER LOSS");
        resultsDiv.innerHTML = "Results: " +  results; 

    }
    else if (x === "Scissors" && y === "Paper"){
        humanScore++;
        rounds++;
        playerScoreDiv.innerHTML = "<p>YOU</p>" + humanScore;
        roundDiv.innerHTML = "<p>ROUNDS</p>"  + rounds;
        let results = ("(WIN) SCISSORS VS PAPER = SCISSORS WIN");
        resultsDiv.innerHTML = "Results: " +  results; 

    }
    else if (x === "Scissors" && y === "Rock"){
        computerScore++;
        rounds++;
        computerSelectionDiv.innerHTML = "<p>COM</p>"  + computerScore;
        roundDiv.innerHTML = "<p>ROUNDS</p>"  + rounds;
        let results = ("(LOSS) SCISSORS VS ROCK = SCISSORS LOSS");
        resultsDiv.innerHTML = "Results: " +  results; 

    }
    if(humanScore >= 5) {
        let winner = "YOU! :)"
        winnerDiv.innerHTML = "Winner: " + winner;
        gameComplete = true;
    } 
    if(computerScore >= 5) {
        let winner = "THE BOT! :("
        winnerDiv.innerHTML = "Winner: " + winner;  
        gameComplete= true;
    } 
    if(!gameComplete){
        document.getElementById("restartButton").disabled = true;
    }
    if(gameComplete){
        document.getElementById("restartButton").disabled = false;
        document.getElementById("Rock").disabled = true;
        document.getElementById("Paper").disabled = true;
        document.getElementById("Scissors").disabled = true;
    }
}

let winner = "";
let reults = "";

document.getElementById("Rock").addEventListener("click", function(){
    playRound('Rock');
});
document.getElementById("Paper").addEventListener("click", function(){
    playRound('Paper');
});
document.getElementById("Scissors").addEventListener("click", function(){
    playRound('Scissors');
});

const card = document.createElement("div");
card.setAttribute("id", "card");
document.body.appendChild(card);

const scoreCard = document.createElement("div");
scoreCard.setAttribute("id", "scoreCard");
card.appendChild(scoreCard)

const playerScoreDiv = document.createElement("div");
playerScoreDiv.setAttribute("id", "pDiv");
playerScoreDiv.innerHTML = "<p>YOU</p>" + humanScore;
scoreCard.appendChild(playerScoreDiv)

const roundDiv = document.createElement("div");
roundDiv.setAttribute("id", "roundDiv");
roundDiv.innerHTML = "<p>ROUNDS</p>"  + rounds;
scoreCard.appendChild(roundDiv)

const computerSelectionDiv = document.createElement("div");
computerSelectionDiv.setAttribute("id", "cDiv");
computerSelectionDiv.innerHTML = "<p>COM</p>"  + computerScore;
scoreCard.appendChild(computerSelectionDiv)

const buttons = document.getElementById("buttons")
card.appendChild(buttons);

const resultsDiv = document.createElement("div");
resultsDiv.setAttribute("id", "resultsDiv");
resultsDiv.innerHTML = "Results: " + reults;
card.appendChild(resultsDiv)

const winnerDiv = document.createElement("div");
winnerDiv.setAttribute("id", "wDiv");
winnerDiv.innerHTML = "Winner: " + winner;
card.appendChild(winnerDiv)

const restartButtonDiv = document.createElement("div");
restartButtonDiv.setAttribute("id", "restartButtonDiv");
card.appendChild(restartButtonDiv);

const restartButton = document.createElement("button");
restartButton.setAttribute("id", "restartButton");
restartButton.innerHTML = "RESTART";
restartButtonDiv.appendChild(restartButton);
document.getElementById("restartButton").disabled = true;
document.getElementById("restartButton").addEventListener("click", function(){
    restartGame();
});