document.addEventListener("DOMContentLoaded", function () {
    let userScore = 0;
    let compScore = 0;
    let msg = document.querySelector("#msg");
    const choices = document.querySelectorAll(".choice");
    const userScorepara = document.querySelector("#user-score");
    const compScorepara = document.querySelector("#comp-score");
    let compmove = document.querySelector("#compmove");
    let usermove = document.querySelector("#mymove");
    const scoreBoard = document.querySelector(".score-board"); // Select the score board

    const getCompChoice = () => {
        let option = ["rock", "paper", "scissors"];
        const randidx = Math.floor(Math.random() * 3);
        return option[randidx];
    };

    const drawGame = () => {
        msg.innerText = "Game is Draw Select Again";
        msg.style.backgroundColor = "black";
        msg.style.color = "white";
    };

    const showWinner = (userWin) => {
        if (userWin) {
            userScore++;
            userScorepara.innerText = "Your points:" + userScore;
            msg.innerText = "You Win!";
            msg.style.backgroundColor = "green";
            msg.style.color = "white";
        } else {
            compScore++;
            compScorepara.innerText = "Computer points:" + compScore;
            msg.innerText = "Computer Win!";
            msg.style.backgroundColor = "red";
            msg.style.color = "white";
        }
    };

    const showScoreBoard = () => {
        if (scoreBoard) {
            scoreBoard.style.display = "flex"; // Show the score board
        }
    };

    const playGame = (userChoice) => {
        console.log("user Choice", userChoice);

        usermove.innerText = "You select " + userChoice;
        const compChoice = getCompChoice();
        console.log("comp Choice", compChoice);
        compmove.innerText = "Computer select " + compChoice;
        if (userChoice === compChoice) {
            drawGame();
        } else {
            let userWin = true;
            if (userChoice === "rock") {
                userWin = compChoice === "paper" ? false : true;
            } else if (userChoice === "paper") {
                userWin = compChoice === "rock" ? false : true;
            } else {
                userWin = compChoice === "scissors" ? false : true;
            }
            showWinner(userWin);
        }
        showScoreBoard(); // Show the score board after each play
    };

    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id");
            playGame(userChoice);
        });
    });
});