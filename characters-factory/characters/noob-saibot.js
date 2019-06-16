'use strict';

const BaseCharacter = require('./base-character');

module.exports = class NoobSaibot extends BaseCharacter {
    constructor() {
        super();
        this._name = 'Noob Saibot';
        this._sounds = ['FEAR ME!', 'YOU ARE WEAK', 'YES. IT IS I'];
        this._strength = 90;
        this._health = 300;
        this._hitCoefficient = 0.5;
        this._missCoefficient = 0.3;
        this._vampirismCoefficient = 0.5;
        this._criticalChance = 0.25;
        this._criticalMultiplier = 2;
    }
};
