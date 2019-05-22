'use strict';

const {characters} = require('../constants');
const Scorpion = require('./characters/scorpion');
const Subzero = require('./characters/subzero');

module.exports = ({
    getCharacter: (character) => {
        if (character === characters.SUBZERO) {
            return new Subzero();
        }

        if (character === characters.SCORPION) {
            return new Scorpion();
        }

        throw new Error(`Character ${character} is not supported`);
    }
});
