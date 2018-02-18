var rover = require('../src/rover');

let roverNewState;

const roverInitialState = {
    x_pos: 0, 
    y_pos: 0,
    heading: 'N'
};

describe('running tests', () => {
    describe('move rover nowhere', () => {

        roverNewState = rover.move('');
    
        it('SHOULD remain at inital state', () => {
            expect(roverNewState).toEqual(roverInitialState);
        })
    })
});