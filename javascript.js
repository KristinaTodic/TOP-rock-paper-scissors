console.log("Let's play rock paper scissors! Best out of 5 wins!");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    randomNum = Math.random();
    let computerChoice = "computer choice";
    if (randomNum <.33) {
        computerChoice = "ROCK";
    }else if (randomNum >=.33 && randomNum <.66) {
        computerChoice = "PAPER";
    }else {
        computerChoice = "SCISSORS";
    }
    return computerChoice;
}
function getHumanChoice () {
    let userEntry = prompt("ROCK!PAPER!SCISSORS!   SHOOT!(enter your choice pls)");
    userChoice = userEntry.toUpperCase();
    const validChoices = ["ROCK", "PAPER", "SCISSORS"];
    if (validChoices.includes(userChoice)){
        return(userChoice);
    }else{
        console.log("Pls pick a valid choice next time....");
        return "MAJOR L";
    }
}
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }else if (humanChoice ==="ROCK" && computerChoice ==="SCISSORS"){
        console.log("You win! Rock beats scissors!");
        humanScore+=1;
    } else if (humanChoice ==="PAPER" && computerChoice ==="ROCK"){
        console.log("You win! Paper beats rock!");
        humanScore+=1;
    } else if (humanChoice ==="SCISSORS" && computerChoice ==="PAPER"){
        console.log("You win! Scissors beats paper!");
        humanScore+=1;
    }else{
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore+=1;
    }
    
}


function playGame () {
    //let round=1;
    //console.log(`Round ${round}`);
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    do {
        playRound(humanSelection, computerSelection);
        console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
        //round+=1;
        //console.log(`Round ${round}`);
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
    } while (computerScore<3 && humanScore<3);

    if (humanScore > computerScore){
        console.log("Woohoo! You win!");
    }else {
        console.log("BOOO! YOU LOSE! Stinky loser!!! >:p");
    }
}
playGame()

    