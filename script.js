function getComputerChoice (){
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice (){
    let choices = ["rock", "paper", "scissors"];
    let choice = prompt("Enter rock, paper or scissors: ").toLowerCase();
    if (!choices.includes(choice)) {
        alert("Invalid choice! Please try again.");
        return getHumanChoice();
    }
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    console.log("Welcome to Rock, Paper, Scissors! Let's play 5 rounds.");
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const roundResult = playRound(humanSelection, computerSelection);
        humanScore += roundResult.human;
        computerScore += roundResult.computer;
    }

    console.log(`Final Score: You ${humanScore} - Computer ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry! You lose the game.");
    } else {
        console.log("It's a draw!");
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return { human: 0, computer: 0 };
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        return { human: 1, computer: 0 };
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        return { human: 0, computer: 1 };
    }
}

// Start the game
playGame();