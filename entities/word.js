"use strict";

const assert = require("assert");

const Word = module.exports = function(src, coor) {
    this.source = src.split("");
    assert(coor instanceof Array, "coor is invaild.");
    this.coors = [coor];
};

Word.prototype = {
    constructor: Word,
    getLastCoor: function() {
        return this.coors[this.coors.length - 1];
    },
    getCurrent: function() {
        return this.source[this.coors.length];
    },
    isVaild: function() {
        return this.source.length === this.coors.length;
    },
    clone: function(coor) {
        assert(coor instanceof Array, "coor is invaild.");
        const cloner = new Word(this.source.join(""), []);
        cloner.coors = this.coors.concat([coor]);
        return cloner;
    },
    hasBackLetter: function(coor) {
        let isBack = false;
        for (let i = 0; i < this.coors.length; i++) {
            const cur = this.coors[i];
            isBack = cur[0] === coor[0] &&
                cur[1] === coor[1];
            if (isBack) break;
        }
        return isBack;
    }
};