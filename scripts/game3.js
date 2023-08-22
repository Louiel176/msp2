let game = {
    score: 0,
    current: [],
    pMoves: [],
    turn: 0,
    lastButton: "",
    tInProgress: false,
    choices: ["btn1", "btn2", "btn3", "btn4", "btn5", "btn6"]
};

function newGame() {
    game.current = []; /*takes the game object and selects specific objects from the game object and assigns a new value*/
    game.pMoves = [];
    game.score = 0;

    for (let circle of document.getElementsByClassName("circle")) {
        if (circle.getAttribute("data-listener") !== "true") {
            circle.addEventListener("click", (e) => {
                if (game.current.length > 0 && !game.tInProgress) {
                    let move = e.target.getAttribute("id");
                    game.lastButton = move;
                    game.pMoves.push(move);
                    lights(move);
                    userTurn();
                }
            });
            circle.setAttribute("data-listener", "true");
        }
    }
    Score();
    addTurn();

}

function addTurn(num) {
    game.pMoves = [];
    game.current.push(game.choices[(Math.floor(Math.random() * 6))]);
    turns();
}

function turns() {
    game.tInProgress = true;
    game.tNumber = 0;
    let t = setInterval(function () {
        lights(game.current[game.tNumber]);
        game.tNumber++;
        if (game.tNumber >= game.current.length) {
            clearInterval(t);
            game.tInProgress = false;
        }
    }, 1000);
}

function lights(a) {
    document.getElementById(a).classList.add("flash");
    setTimeout(function () {
        document.getElementById(a).classList.remove("flash");
    }, 400);
}

function userTurn() {
    let i = game.pMoves.length - 1;
    if (game.current[i] === game.pMoves[i]) {
        if (game.current.length === game.pMoves.length) {
            game.score++;
            Score();
            addTurn();
        }
    } else {
        alert("Nope!! try to beat your previous score of" + game.score);
        newGame();
    }
}

function Score() {
    document.getElementById("score").innerText = game.score;
}
