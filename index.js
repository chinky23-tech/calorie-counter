//scores
let playerScore = { value : '0'};
let computerScore = {value: '0'};
//computer's random choice
function getComputerChoice(){
    const Choices = ['Rock','Paper','Scissors'];
    return Choices[Math.floor(Math.random()*Choices.length)];
}
//check if the player wins the round
function hasPlayerWonTheRound(playerChoice,computerChoice){
    return(
        (playerChoice === 'Rock' && computerChoice=== 'Scissors')||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper' )
    );
}
//get the round results
function getRoundResults(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        return `It's a tie! Both chose ${playerChoice}`;
    }else if (hasPlayerWonTheRound(playerChoice,computerChoice)){
        playerScore.value++;
        return `player wins! ${playerChoice} beats ${computerChoice}`;
    }else {
        computerScore.value++;
        return `Computer wins! ${computerChoice} beats ${playerChoice}`;
    }
}
// Update UI and handle game logic
function playGame(playerChoice){
    const computerChoice = getComputerChoice();
    const result = getRoundResults(playerChoice,computerChoice);
    // Update scores in UI
   document.getElementById('player1').textContent = `player: ${playerScore.value}`;
   document.getElementById('computer').textContent = `computer: ${computerScore.value}`;

    // Display round result
    document.getElementById('move1').textContent = result;
}

