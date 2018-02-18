var rover = require('../src/rover')

let roverNewState

let expectedNewState

const roverInitialState = {
    x_pos: 0, 
    y_pos: 0,
    heading: 'N'
}

describe('running tests', () => {
    describe('move rover nowhere', () => {

        roverNewState = rover.move('');
        expectedNewState = roverInitialState;
    
        it('SHOULD remain at inital state', () => {
            expect(roverNewState).toEqual(expectedNewState);
        })
    })
    
    describe('move rover F', () => {

        roverNewState = rover.move('f');
        
        expectedNewState = {
            x_pos: 0,
            y_pos: 1, 
            heading: 'N'
        }
    
        it('SHOULD be at expected position (0, 1) heading N', () => {
            expect(roverNewState).toEqual(expectedNewState);
        })
    })

    describe('move rover R', () => {

        roverNewState = rover.move('r');
        
        expectedNewState = {
            x_pos: 1,
            y_pos: 0, 
            heading: 'E'
        }
    
        it('SHOULD be at expected position (1, 0) heading E', () => {
            expect(roverNewState).toEqual(expectedNewState);
        })
    })
});