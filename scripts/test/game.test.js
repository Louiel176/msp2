const {game, newGame, addTurn, turns, lights, playerTurn, score} = require("../game") //Loads modules that are being passed into the file from exports



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