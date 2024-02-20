let playerScore = 0;
let aiScore = 0;
let useKey = true;
let firstMove = true;
const playerScore_span = document.getElementById("user-score");
const aiScore_span = document.getElementById("ai-score");
const scoreboard_div = document.querySelector(".scoreboard");
const msg_div = document.querySelector(".msg > p");
const choicesMsg_div = document.querySelector(".choices-msg > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const make_your_move = document.getElementById("make-your-move");
const aiMoves = ['r', 'p', 's'];
const GLOW_MILLISECONDS = 300;
const KEY_WAIT_COEFFICIENT = 3;
const KEY_WAIT_MILLISECONDS = GLOW_MILLISECONDS / KEY_WAIT_COEFFICIENT;
const DO_NOT_SPAM_MILLISECONDS = 10 * KEY_WAIT_MILLISECONDS;
const CONTROLS = "Rock (Q) - Paper (W) - Scissors (E)";

function userChoiceToElementID(choice) {
    if (choice === "R" ) return "rock";
    else if (choice === "P") return "paper";
    return "scissors";
}

function choiceToWord(choice) {
    if (choice === "R" || choice === 'r') return "Rock";
    else if (choice === "P" || choice === 'p') return "Paper";
    return "Scissors";
}

/*
    1  = Player win
    0  = Tie
    -1 = AI win
*/
function decideR(aiOption) {
    switch (aiOption) {
        case 'r':
            return 0;
            break;
        case 'p':
            return -1;
            break;
        case 's':
            return 1;
            break;
    }
}

/*
    1  = Player win
    0  = Tie
    -1 = AI win
*/
function decideP(aiOption) {
    switch (aiOption) {
        case 'r':
            return 1;
            break;
        case 'p':
            return 0;
            break;
        case 's':
            return -1;
            break;
    }
}

/*
    1  = Player win
    0  = Tie
    -1 = AI win
*/
function decideS(aiOption) {
    switch (aiOption) {
        case 'r':
            return -1;
            break;
        case 'p':
            return 1;
            break;
        case 's':
            return 0;
            break;
    }
}

function gameState(state, playerChoice, compChoice) {
    if (firstMove) {
        make_your_move.innerHTML = CONTROLS;
        firstMove = false;
    }

    playerC = choiceToWord(playerChoice);
    compC = choiceToWord(compChoice);

    switch (state) {
        case -1:
            // PLAYER LOSS
            aiScore++;
            aiScore_span.innerHTML = aiScore;
            choicesMsg_div.innerHTML = "<b>You:</b> " + playerC + "<br><b>AI:</b> " + compC;
            msg_div.innerHTML = "<u>" + playerC + "</u> loses to <u>" + compC + "</u>. You lose, I win!!!";
            document.getElementById(userChoiceToElementID(playerChoice)).classList.add('choice-red-glow');
            scoreboard_div.classList.add('scoreboard-red-glow');
            setTimeout(
                function() { 
                    document.getElementById(userChoiceToElementID(playerChoice)).classList.remove('choice-red-glow');
                    scoreboard_div.classList.remove('scoreboard-red-glow');
                }, GLOW_MILLISECONDS);
            break;
            // PLAYER LOSS END
        case 0:
            // TIE
            choicesMsg_div.innerHTML = "<b>You:</b> " + playerC + "<br><b>AI:</b> " + compC;
            msg_div.innerHTML = "We both chose <u>" + playerC + "</u>. It's a tie.";
            document.getElementById(userChoiceToElementID(playerChoice)).classList.add('choice-yellow-glow');
            scoreboard_div.classList.add('scoreboard-yellow-glow');
            setTimeout(
                function() { 
                    document.getElementById(userChoiceToElementID(playerChoice)).classList.remove('choice-yellow-glow');
                    scoreboard_div.classList.remove('scoreboard-yellow-glow');
                }, GLOW_MILLISECONDS);
            break;
            // TIE END
        case 1:
            // PLAYER WIN
            playerScore++;
            playerScore_span.innerHTML = playerScore;
            choicesMsg_div.innerHTML = "<b>You:</b> " + playerC + "<br><b>AI:</b> " + compC;
            msg_div.innerHTML = "<u>" + playerC + "</u> beats <u>" + compC + "</u>. I lost... But you won!";
            document.getElementById(userChoiceToElementID(playerChoice)).classList.add('choice-green-glow');
            scoreboard_div.classList.add('scoreboard-green-glow');
            setTimeout(
                function() { 
                    document.getElementById(userChoiceToElementID(playerChoice)).classList.remove('choice-green-glow');
                    scoreboard_div.classList.remove('scoreboard-green-glow');
                }, GLOW_MILLISECONDS);
            break;
            // PLAYER END
        case 2:
            // ERROR
            console.log("ERROR: decideX function failed.");
            break;
            // ERROR END
    }
}

function aiMove() {
    const aiChoice = Math.floor(Math.random() * 3);
    return aiMoves[aiChoice];
}

function play(playerMove) {
    const aiMoveChoice = aiMove();
    let result = 2; // 2 = ERROR: decideX function failed.

    switch (playerMove) {
        case "R":
            result = decideR(aiMoveChoice);
            break;
        case "P":
            result = decideP(aiMoveChoice);
            break;
        case "S":
            result = decideS(aiMoveChoice);
            break;
    }

    gameState(result, playerMove, aiMoveChoice);
}

function controlKeys(key) {
    if (!useKey) {
        make_your_move.innerHTML = "<u>Please do not spam the keys!</u>";
        setTimeout(() => make_your_move.innerHTML = CONTROLS, DO_NOT_SPAM_MILLISECONDS);
        return;
    }

    switch (key) {
        case "q":
        case "Q":
            useKey = false;
            setTimeout(() => useKey = true, KEY_WAIT_MILLISECONDS);
            play("R")
            break;
        case "w":    
        case "W":
            useKey = false;
            setTimeout(() => useKey = true, KEY_WAIT_MILLISECONDS);
            play("P")
            break;
        case "e":    
        case "E":
            useKey = false;
            setTimeout(() => useKey = true, KEY_WAIT_MILLISECONDS);
            play("S")
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => play("R"));
    rock_div.addEventListener('mouseenter', () => document.getElementById("rock").classList.add('choice-hover'));
    rock_div.addEventListener('mouseleave', () => document.getElementById("rock").classList.remove('choice-hover'));

    paper_div.addEventListener('click', () => play("P"));
    paper_div.addEventListener('mouseenter', () => document.getElementById("paper").classList.add('choice-hover'));
    paper_div.addEventListener('mouseleave', () => document.getElementById("paper").classList.remove('choice-hover'));

    scissors_div.addEventListener('click', () => play("S"));
    scissors_div.addEventListener('mouseenter', () => document.getElementById("scissors").classList.add('choice-hover'));
    scissors_div.addEventListener('mouseleave', () => document.getElementById("scissors").classList.remove('choice-hover'));

    document.body.addEventListener('keydown', (event) => controlKeys(event.key));
}

main();