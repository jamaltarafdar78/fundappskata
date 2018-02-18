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

        const expectedNewState = {
            x_pos: 0,
            y_pos: 1, 
            heading: 'N'
        }

        describe('using move api', () => {
            const roverNewState = rover.move('f');  
        
            it('SHOULD be at expected position (0, 1) heading N', () => {
                expect(roverNewState).toEqual(expectedNewState);
            })
        })

        describe('using single move api, from initial state', () => {
            const roverNewState = rover.moveOneCommand('f', roverInitialState);
        
            it('SHOULD be at expected position (0, 1) heading N', () => {
                expect(roverNewState).toEqual(expectedNewState);
            })
        })
    })

    describe('move rover R', () => {

        const expectedNewState = {
            x_pos: 0,
            y_pos: 0, 
            heading: 'E'
        }
    
        describe('using move api', () => {
            const roverNewState = rover.move('r');
        
            it('SHOULD be at expected position (0, 0) heading E', () => {
                expect(roverNewState).toEqual(expectedNewState);
            })
        })

        describe('using single move api, from initial state', () => {
            const roverNewState = rover.moveOneCommand('r', roverInitialState);
        
            it('SHOULD be at expected position (0, 0) heading E', () => {
                expect(roverNewState).toEqual(expectedNewState);
            })
        })
        
    })

    describe('move rover RF', () => {

        const expectedNewState = {
            x_pos: 1,
            y_pos: 0, 
            heading: 'E'
        }

        describe('using move api', () => {
            const roverNewState = rover.move('RF');
        
            it('SHOULD be at expected position (1, 0) heading E', () => {
                expect(roverNewState).toEqual(expectedNewState);
            })
        })

        describe('using single move api, heading EAST', () => {
            const headingEast = {
                x_pos: 0, 
                y_pos: 0,
                heading: 'E'
            }
            
            const roverNewState = rover.moveOneCommand('f', headingEast);
        
            it('SHOULD be at expected position (1, 0) heading E', () => {
                expect(roverNewState).toEqual(expectedNewState);
            })
        })
    })

    describe('move rover FR', () => {

        const expectedNewState = {
            x_pos: 0,
            y_pos: 1, 
            heading: 'E'
        }

        describe('using move api', () => {
            const roverNewState = rover.move('FR');
        
            it('SHOULD be at expected position (0, 1) heading E', () => {
                expect(roverNewState).toEqual(expectedNewState);
            })
        })
    })
});