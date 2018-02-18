var rover = require('../src/rover')

const roverInitialState = {
    x_pos: 0, 
    y_pos: 0,
    heading: 'N'
}

describe('running tests', () => {
    describe('move rover nowhere', () => {

       const roverNewState = rover.move('');
    
        it('SHOULD remain at inital state', () => {
            expect(roverNewState).toEqual(roverInitialState);
        })
    })
    
    describe('move rover F', () => {

        describe('using move api', () => {
            const roverNewState = rover.move('f');
        
            const expectedNewState = {
                x_pos: 0,
                y_pos: 1, 
                heading: 'N'
            }
        
            it('SHOULD be at expected position (0, 1) heading N', () => {
                expect(roverNewState).toEqual(expectedNewState);
            })
        })

        describe('using single move api', () => {
            const roverNewState = rover.moveOneCommand('f', roverInitialState);
            
            const expectedNewState = {
                x_pos: 0,
                y_pos: 1, 
                heading: 'N'
            }
        
            it('SHOULD be at expected position (0, 1) heading N', () => {
                expect(roverNewState).toEqual(expectedNewState);
            })
        })
    })

    describe('move rover R', () => {

        const roverNewState = rover.move('r');
        
        const expectedNewState = {
            x_pos: 0,
            y_pos: 0, 
            heading: 'E'
        }
    
        it('SHOULD be at expected position (0, 0) heading E', () => {
            expect(roverNewState).toEqual(expectedNewState);
        })
    })

    describe('move rover RF', () => {

        const roverNewState = rover.move('RF');
        
        const expectedNewState = {
            x_pos: 1,
            y_pos: 0, 
            heading: 'E'
        }
    
        it('SHOULD be at expected position (1, 0) heading E', () => {
            expect(roverNewState).toEqual(expectedNewState);
        })
    })
});