'use strict';

const _ = require('lodash');
const MIN_HEALTH = 0;
const MAX_PROBABILITY = 1;

module.exports = class BaseCharacter {
    makeStrike() {
        console.info(`${this._name} strikes: ${_.sample(this._sounds)}`);

        const baseDamage = this._strength * _.random(this._hitCoefficient, MAX_PROBABILITY);

        let criticalDamage = 0;
        if (_.random(true) <= this._criticalChance) {
            criticalDamage = baseDamage * this._criticalMultiplier;
        }

        return baseDamage + criticalDamage;
    }

    getStrike(damage) {
        this._health += this._health * _.random(this._vampirismCoefficient);
        this._health -= (damage - damage * _.random(this._missCoefficient));

        return this._health;
    }

    isAlive() {
        return this._health > MIN_HEALTH;
    }

    get health() {
        // eslint-disable-next-line no-magic-numbers
        return Math.max(Math.round(this._health, 2), MIN_HEALTH);
    }

    get name() {
        return this._name;
    }
};
