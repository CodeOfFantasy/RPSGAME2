 var playerScore = 0;
        var computerScore = 0;
        var roundsPlayed = 0;
        var playerChoice;
        var computerChoice;

        const resultElement = document.getElementById("result");

        function startGame(mode) {
    if (mode === "endless") {
        document.getElementById("interface").style.display = "none";
        document.getElementById("gameContainer").style.display = "block";
        playerScore = 0;
        computerScore = 0;
        updateScore();
        roundsPlayed = 0;
        startEndlessRound(); 
    } else if (mode === "combative") {
        roundsPlayed = 0;
        startCombativeRound();
    }
}

        function updateScore() {
            document.getElementById("player-score").textContent = playerScore;
            document.getElementById("computer-score").textContent = computerScore;
        }

        function showInterface() {
            document.getElementById("interface").style.display = "block";
            document.getElementById("gameContainer").style.display = "none";
        }

        function startEndlessRound(choice) {
    const choices = ["rock", "paper", "scissors"];
    const playerChoice = choice;
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const playerImage = document.getElementById("playerImage");
    const computerImage = document.getElementById("computerImage");

    playerImage.src = playerChoice + ".png"; 
    computerImage.src = computerChoice + ".png";

    setTimeout(function() {
        if (playerChoice === computerChoice) {
            resultElement.textContent = "It's a tie!";
            resultElement.style.color = "orange";
            resultElement.style.border = "2px solid orange";
            resultElement.style.height = "22px";
        } else if ((playerChoice === "rock" && computerChoice === "scissors") ||
                (playerChoice === "paper" && computerChoice === "rock") ||
                (playerChoice === "scissors" && computerChoice === "paper")) {
            resultElement.textContent = "You win!";
            resultElement.style.color = "green";
            resultElement.style.border = "2px solid green";
            resultElement.style.height = "22px";
            playerScore++;
        } else {
            resultElement.textContent = "You lose!";
            resultElement.style.color = "red";
            resultElement.style.border = "2px solid red";
            resultElement.style.height = "22px";
            computerScore++;
        }

        updateScore();

        roundsPlayed++;
    }, 1100);

    
}

// Add event listeners for endless mode
document.getElementById("rock").addEventListener("click", function() {
    startEndlessRound("rock");
});

document.getElementById("paper").addEventListener("click", function() {
    startEndlessRound("paper");
});

document.getElementById("scissors").addEventListener("click", function() {
    startEndlessRound("scissors");
});

        function startCombativeRound() {
            document.getElementById("interface").style.display = "none";
            document.getElementById("gameContainer").style.display = "block";

            document.getElementById("rock").addEventListener("click", function() {
                playCombativeRound("rock");
            });

            document.getElementById("paper").addEventListener("click", function() {
                playCombativeRound("paper");
            });

            document.getElementById("scissors").addEventListener("click", function() {
                playCombativeRound("scissors");
            });
        }

        showInterface();

        function playCombativeRound(choice) {
            const choices = ["rock", "paper", "scissors"];
            const playerChoice = choice;
            const computerChoice = choices[Math.floor(Math.random() * 3)];

            const playerImage = document.getElementById("playerImage");
            const computerImage = document.getElementById("computerImage");

            playerImage.src = "" + playerChoice + ".png"; 
            computerImage.src = "" + computerChoice + ".png";

            setTimeout(function() {
    if (playerChoice === computerChoice) {
        resultElement.textContent = "It's a tie!";
        resultElement.style.color = "orange";
        resultElement.style.border = "2px solid orange";
        resultElement.style.height = "22px";
    } else if ((playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")) {
        resultElement.textContent = "You win!";
        resultElement.style.color = "green";
        resultElement.style.border = "2px solid green";
        resultElement.style.height = "22px";
        playerScore++;
    } else {
        resultElement.textContent = "You lose!";
        resultElement.style.color = "red";
        resultElement.style.border = "2px solid red";
        resultElement.style.height = "22px";
        computerScore++;
    }

    updateScore();

    roundsPlayed++;

    if (roundsPlayed >= 10) {
        declareWinner();
    }
}, 1100);
        function declareWinner() {
            if (playerScore > computerScore) {
                alert("You win the Combative Mode!");
            } else if (computerScore > playerScore) {
                alert("You lose the Combative Mode.");
            } else {
                alert("It's a tie in the Combative Mode.");
            }

            showInterface();
        } 
        }