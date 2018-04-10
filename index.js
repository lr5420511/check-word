"use strict";

const assert = require("assert");
const Board = require("./entities/board");
const Word = require("./entities/word");

function checkWord(board, word) {
    board = new Board(board);
    const words = board.getCoors(word[0])
        .map(cur => new Word(word, cur));
    return (function handler(words, board) {
        if (words.length <= 0) return false;
        if (words[0].isVaild()) return true;
        let ar = [];
        words.forEach(cur => {
            const letter = cur.getCurrent(),
                coors = board.getRounds(cur.getLastCoor())
                .filter(coor => {
                    return board.getLetters(coor)[0] === letter &&
                        !cur.hasBackLetter(coor);
                });
            ar = ar.concat(
                coors.map(coor => cur.clone(coor))
            );
        });
        return handler(ar, board);
    })(words, board);
}