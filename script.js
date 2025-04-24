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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        roundResult.textContent = `It's a tie!`;
        return { human: 0, computer: 0 };
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        return { human: 1, computer: 0 };
    } else {
        roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        return { human: 0, computer: 1 };
    }
}

const score = { human: 0, computer: 0 };
let playedRounds = 0;
const maxRounds = 5;
const buttons = document.querySelectorAll("button");

const roundResult = document.createElement("div");
roundResult.classList.add("round-result");

const scoreText = document.createElement("div");
scoreText.classList.add("score-text");

const br = document.createElement("br");
document.body.appendChild(br);

document.body.appendChild(br);
document.body.appendChild(roundResult);
document.body.appendChild(scoreText);

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const humanChoice = button.id;
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);

        score.human += result.human;
        score.computer += result.computer;
        playedRounds += 1;

        if (playedRounds == maxRounds) {
            if (score.human > score.computer) {
                scoreText.textContent = `You win the game! Final Score: You ${score.human} - Computer ${score.computer}`;
            } else if (score.human < score.computer) {
                scoreText.textContent = `You lose the game! Final Score: You ${score.human} - Computer ${score.computer}`;
            } else {
                scoreText.textContent = `It's a tie! Final Score: You ${score.human} - Computer ${score.computer}`;
            }
            playedRounds = 0;
            score.human = 0;
            score.computer = 0;
        }
        else {
            scoreText.textContent = `[Round ${playedRounds}] Score: You ${score.human} - Computer ${score.computer}`;
        }
    });
});