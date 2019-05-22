'use strict';

const {characters} = require('../../constants');
const CharatersFactory = require('../../characters-factory');
const Scorpion = require('../../characters-factory/characters/scorpion');

describe('Charaters Factory', () => {
    it('should return Scorpion', () => {
        assert.instanceOf(CharatersFactory.getCharacter(characters.SCORPION), Scorpion);
    })
});
