const { getSystemErrorName } = require("util");
const {game, newGame, addTurn, turns, lights, userTurn, Score} = require("../game") //Loads modules that are being passed into the file from exports



beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("game.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("current key exists", () => {
        expect("current" in game).toBe(true);
    })
    test("pMoves key exists", () => {
        expect("pMoves" in game).toBe(true);
    })
    test("turn key exists", () => {
        expect("turn" in game).toBe(true);
    })
    test("lastButton key exists", () => {
        expect("lastButton" in game).toBe(true);
    })
    test("tInProgress key exists", () => {
        expect("tInProgress" in game).toBe(true);
    })
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    })
    test("choices contain correct id", () => {
        expect(game.choices).toEqual(["btn1", "btn2", "btn3", "btn4"]);
    })
});

describe("New game starts a new game", () => {
    beforeAll(() => {
        game.score = 26;
        game.pMoves = ["btn1", "btn2"];
        game.current = ["btn1", "btn2"];
        document.getElementById("score").innerText = "26";
        newGame();
    });
    test("game score should be zero", () => {
        expect(game.score).toEqual(0);
    })
    test("expect data-listeners to be true", () => {
        const ele = document.getElementsByClassName("circle");
        for (let e of ele) {
            expect(e.getAttribute("data-listener")).toEqual("true");
        } 
    });
    test("display score with the id of score to be set to 0", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
    test("player moves should be reset to 0", () => {
        expect(game.pMoves.length).toBe(0);
    });
    test("current moves should be reset to 1", () => {
        expect(game.current.length).toBe(1);
    });
});

describe("game functions correctly", ()=> {
    beforeEach(() => {
        game.score = 0;
        game.current = [];
        game.pMoves = [];
        addTurn();
    });
    afterEach(() => {
        game.score = 0;
        game.current = [];
        game.pMoves = [];
    });
    test("addTurn function adds a new turn", () => {
        addTurn();
        expect(game.current.length).toBe(2);
    });
    test("lights function adds a new class to a button", () => {
        let button = document.getElementById(game.current[0]);
        lights(game.current[0]);
        expect(button.classList).toContain("flash");
    });
    test("turns should toggle tinprogress to true", () => {
        turns();
        expect(game.tInProgress).toBe(true);
    });
    test("turns should update turn numbers", () => {
        game.tNumber = 12;
        turns();
        expect(game.tNumber).toBe(0);
    });
    test("score should be incremented by one each time the user is correct", () => {
        game.pMoves.push(game.current[0]);
        userTurn();
        expect(game.score).toBe(1);
    });
    test("clicking during sequence will fail", () => {
        turns();
        game.lastButton = "";
        document.getElementById("btn2").click();
        expect(game.lastButton).toEqual("");
    });
});