'use strict';

const {characters} = require('./constants');
const CharactersFactory = require('./characters-factory');
const Game = require('./game');
const _ = require('lodash');

const delay = ms => new Promise(_ => setTimeout(_, ms));
const GAME_PAUSE = 5000;

const charactersSelection = () => {
    const firstCharacter = _.sample(Object.keys(characters));
    let secondCharacter;
    do {
        secondCharacter = _.sample(Object.keys(characters));
    } while(secondCharacter === firstCharacter);
    return [
        CharactersFactory.getCharacter(characters[firstCharacter]), 
        CharactersFactory.getCharacter(characters[secondCharacter])
    ];
};

(async () => {
    const opponents = charactersSelection();
    // eslint-disable-next-line no-magic-numbers
    const game = new Game(opponents[0], opponents[1]);

    while(!game.isFinished()) {
        game.move();

        await delay(GAME_PAUSE);

        console.info('>>>>>>>>>>>>>>>>>>>>>\n');
    }
})();
