'use strict';

const {characters} = require('./constants');
const CharactersFactory = require('./characters-factory');
const Game = require('./game');

const delay = ms => new Promise(_ => setTimeout(_, ms));
const GAME_PAUSE = 5000;

(async () => {
    const subzero = CharactersFactory.getCharacter(characters.SUBZERO);
    const scorpion = CharactersFactory.getCharacter(characters.SCORPION);
    const game = new Game(subzero, scorpion);

    while(!game.isFinished()) {
        game.move();

        await delay(GAME_PAUSE);

        console.info('>>>>>>>>>>>>>>>>>>>>>\n');
    }
})();
