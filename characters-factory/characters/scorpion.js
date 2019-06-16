'use strict';

const BaseCharacter = require('./base-character');

module.exports = class Scorpion extends BaseCharacter {
    constructor() {
        super();
        this._name = 'Scorpion';
        this._sounds = ['GET OVER HERE!', 'COME HERE!', 'I AM SCORPION'];
        this._strength = 120;
        this._health = 400;
        this._hitCoefficient = 0.5;
        this._missCoefficient = 0.3;
        this._vampirismCoefficient = 0.2;
        this._criticalChance = 0.4;
        this._criticalMultiplier = 0.5;
    }
};
