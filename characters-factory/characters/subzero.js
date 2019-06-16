'use strict';

const {characters} = require('../../constants');
const BaseCharacter = require('./base-character');

module.exports = class Subzero extends BaseCharacter {
    constructor() {
        super();
        this._name = characters.SUBZERO;
        this._sounds = ['I WILL FROST YOU!', 'COME HERE!', 'I WILL FROST YOUR MOM'];
        this._strength = 100;
        this._health = 370;
        this._hitCoefficient = 0.8;
        this._missCoefficient = 0.3;
        this._vampirismCoefficient = 0.15;
        this._criticalChance = 0.3;
        this._criticalMultiplier = 1;
    }
};
