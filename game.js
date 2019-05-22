'use strict';

module.exports = class Game {
    constructor(firstPlayer, secondPlayer) {
        this._firstPlayer = firstPlayer;
        this._secondPlayer = secondPlayer;
        this._started = false;
        this._finished = false;
    }

    _mkStrike(offencive, deffencive) {
        if (this._finished) {
            return;
        }

        deffencive.getStrike(offencive.makeStrike());
        console.info(`${deffencive.name}: ${deffencive.health} left`);

        if (!deffencive.isAlive()) {
            console.info(`${offencive.name} wins!`);

            this._finished = true;
        }
    }

    move() {
        if (!this._started) {
            console.info(`${this._firstPlayer.name} vs ${this._secondPlayer.name}`);
            console.info(`${this._firstPlayer.name}: ${this._firstPlayer.health} hp `);
            console.info(`${this._secondPlayer.name}: ${this._secondPlayer.health} hp`);

            console.info('FIGHT!\n');
            this._started = true;
        }

        this._mkStrike(this._firstPlayer, this._secondPlayer);
        this._mkStrike(this._secondPlayer, this._firstPlayer);
    }

    isFinished() {
        return this._finished;
    }
};
