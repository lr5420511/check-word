"use strict";

const assert = require("assert");

const Board = module.exports = function(src) {
    this.map = src;
};

Board.prototype = {
    constructor: Board,
    getCoors: function(letter) {
        const coors = [];
        this.map.forEach((xCur, x) => {
            xCur.forEach((yCur, y) => {
                if (yCur === letter) {
                    coors.push([x, y]);
                }
            });
        });
        return coors;
    },
    getLetters: function() {
        const coors = [].slice.call(arguments);
        return coors.map(cur => {
            const row = this.map[cur[0]];
            return row ? row[cur[1]] : row;
        });
    },
    getRounds: function(coor) {
        const x = coor[0],
            y = coor[1];
        assert(x > -1 && x < this.map.length,
            "coor is invaild.");
        assert(y > -1 && y < this.map[0].length,
            "coor is invaild.");
        return [
            [x - 1, y],
            [x, y - 1],
            [x + 1, y],
            [x, y + 1],
            [x - 1, y - 1],
            [x + 1, y - 1],
            [x - 1, y + 1],
            [x + 1, y + 1]
        ].filter(cur => {
            return cur[0] > -1 &&
                cur[0] < this.map.length &&
                cur[1] > -1 &&
                cur[1] < this.map[0].length;
        });
    }
};