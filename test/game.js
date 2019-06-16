'use strict';

const Game = require('../game');

describe('Game class', () => {
    describe('Constructor', () => {
        let game;
        beforeEach(() => {
            let stub = sinon.stub();
            game = new Game(stub, stub);
        });

        it('should set _firstPlayer value of firstPlayer argument', () => {
            let firstPlayer = new Object();
            let secondPlayer = new Object();
            game = new Game(firstPlayer, secondPlayer);
            assert.strictEqual(game._firstPlayer, firstPlayer);
        });

        it('should set _secondPlayer value of secondPlayer argument', () => {
            let firstPlayer = new Object();
            let secondPlayer = new Object();
            game = new Game(firstPlayer, secondPlayer);
            assert.strictEqual(game._secondPlayer, secondPlayer);
        });

        it('should create variable _started and initialize it with value false', () => {
            assert.isFalse(game._started);
        });

        it('should create variable _finished and initialize it with value false', () => {
            assert.isFalse(game._finished);
        });
    });

    describe('Method _mkStrike', () => {
        let game;
        let defenceObj, offenceObj;
        beforeEach(() => {
            defenceObj = {name: 'defence', health: 100};
            offenceObj = {name: 'offence', health: 100};
            defenceObj.getStrike = sinon.stub();
            offenceObj.makeStrike = sinon.stub();
            defenceObj.isAlive = sinon.stub();
            game = new Game(defenceObj, offenceObj);
            console.info = sinon.stub();
        });
        afterEach(() => {
            delete console.info;
        });

        it('should no call any function (return from method) when _finished is true', () => {
            game._finished = true;
            let makeStrikeStub = offenceObj.makeStrike;
            let getStrikeStub = defenceObj.getStrike;
            let isAliveStub = defenceObj.isAlive;
            game._mkStrike(offenceObj, defenceObj);
            assert.isTrue(makeStrikeStub.notCalled);
            assert.isTrue(getStrikeStub.notCalled);
            assert.isTrue(isAliveStub.notCalled);
        });

        it('should call offencive.makeStrike and deffencive.getStrike when _finished is false', () => {
            game._finished = false;
            let makeStrikeStub = offenceObj.makeStrike;
            let getStrikeStub = defenceObj.getStrike;
            game._mkStrike(offenceObj, defenceObj);
            assert.isTrue(makeStrikeStub.calledOnce);
            assert.isTrue(getStrikeStub.calledOnce);
        });

        it('should call deffencive.getStrike with argument offencive.makeStrike()', () => {
            const MAKE_STRIKE_RETURN_VALUE = 10;
            offenceObj.makeStrike.returns(MAKE_STRIKE_RETURN_VALUE);
            let getStrikeStub = defenceObj.getStrike;
            game._mkStrike(offenceObj, defenceObj);
            assert.isTrue(getStrikeStub.calledWith(MAKE_STRIKE_RETURN_VALUE));
        });

        it('should set _finished true when deffencive.isAlive return false', () => {
            defenceObj.isAlive.returns(false);
            game._mkStrike(offenceObj, defenceObj);
            assert.isTrue(game._finished);
        });
    });

    describe('Method move', () => {
        let game;
        let firstPlayer, secondPlayer;
        beforeEach(() => {
            console.info = sinon.stub();
            firstPlayer = {name: 'first', health: 10};
            secondPlayer = {name: 'second', health: 100};
            game = new Game(firstPlayer, secondPlayer);
            game._mkStrike = sinon.stub();
        });
        afterEach(() => {
            delete console.info;
        });

        it('should set _started true when _started is false', () => {
            game.move();
            assert.isTrue(game._started);
        });

        it('should two times call _mkStrike function', () => {
            const CALL_COUNT = 2;
            let mkStrikeStub = game._mkStrike;
            game.move();
            assert.equal(mkStrikeStub.callCount, CALL_COUNT);
        });

        it('should call _mkStrike function with arguments (firstPlayer, secondPlayer)', () => {
            let mkStrikeStub = game._mkStrike;
            game.move();
            assert.isTrue(mkStrikeStub.calledWith(game._firstPlayer, game._secondPlayer));
        });

        it('should call _mkStrike function with arguments (secondPlayer, firstPlayer)', () => {
            let mkStrikeStub = game._mkStrike;
            game.move();
            assert.isTrue(mkStrikeStub.calledWith(game._secondPlayer, game._firstPlayer));
        });
    });

    describe('Method isFinished', () => {
        let game;
        beforeEach(() => {
            game = new Game();
        });

        it('should return false when _finished is false', () => {
            game._finished = false;
            assert.isFalse(game.isFinished());
        });

        it('should return true when _finished is true', () => {
            game._finished = true;
            assert.isTrue(game.isFinished());
        });
    });
});
