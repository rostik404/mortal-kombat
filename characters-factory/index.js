'use strict';

const {characters} = require('../constants');
const Scorpion = require('./characters/scorpion');
const Subzero = require('./characters/subzero');
const NoobSaibot = require('./characters/noob-saibot');

module.exports = ({
    getCharacter: (character) => {
        if (character === characters.SUBZERO) {
            return new Subzero();
        }

        if (character === characters.SCORPION) {
            return new Scorpion();
        }

        if (character === characters.NOOB_SAIBOT) {
            return new NoobSaibot();
        }

        throw new Error(`Character ${character} is not supported`);
    }
});
