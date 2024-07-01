console.log("Let's play rock paper scissors! Best out of 5 wins!");

let humanScore = 0;
let computerScore = 0;
const validChoices = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice () {
    //randomNum = Math.random();
    // let computerChoice = "computer choice";
    // if (randomNum <.33) {
    //     computerChoice = "ROCK";
    // }else if (randomNum >=.33 && randomNum <.66) {
    //     computerChoice = "PAPER";
    // }else {
    //     computerChoice = "SCISSORS";
    // }
    const choice = Math.floor( Math.random() * 3)
    return validChoices[choice];
}
function getHumanChoice () {
    let userEntry = prompt("ROCK!PAPER!SCISSORS!   SHOOT!(enter your choice pls)");
    userChoice = userEntry.toUpperCase();
    
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
function isThereWinner () {
    if (humanScore >=3){
        return true;
    }else if (computerScore >=3){
        return true;
    }else{
        return false;
    }
}

function playGame () {
    //let round=1;
    //console.log(`Round ${round}`);
    let humanSelection = null;
    let computerSelection = null;

    // do {
    //     playRound(humanSelection, computerSelection);
    //     console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
    //     //round+=1;
    //     //console.log(`Round ${round}`);
    //     humanSelection = getHumanChoice();
    //     computerSelection = getComputerChoice();
    // } while (computerScore<3 && humanScore<3);
    while (!(isThereWinner())){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();        
        
        playRound(humanSelection, computerSelection);
        console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
        //round+=1;
        //console.log(`Round ${round}`);

    }

    
    if (humanScore > computerScore){
        console.log("Woohoo! You win!");
    }else {
        console.log("BOOO! YOU LOSE! Stinky loser!!! >:p");
    }
}
playGame()

    