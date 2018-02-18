const initialState = {
    x_pos: 0, 
    y_pos: 0,
    heading: 'N'
}

const move = (moveComm) => {
    if(moveComm==='' || !moveComm) return initialState;

    let newState = initialState;

    const movements = moveComm.split('');
    
    return movements.reduce(moveReducer, initialState);
}

const moveReducer = (acc, current) => handleSingleMove(current, acc)

const handleSingleMove = (movement, state) => {

    const {x_pos, y_pos, heading} = state;

    let newState = state;

    switch (movement.toLowerCase()) {
        case 'f':
            newState = {
                x_pos: determineNewXPos(heading, x_pos),
                y_pos: determineNewYPos(heading, y_pos),
                heading
            }
            break;
        case 'r':
            newState = {
                x_pos: x_pos,
                y_pos: y_pos,
                heading: 'E'
            }
            break;
        default:
            break;
    }

    return newState;
}

const determineNewXPos = (heading, x_pos) => {

    const headingL = heading.toLowerCase();

    return  headingL ==='e' ? x_pos + 1 :
            headingL ==='w' ?  x_pos - 1 :  
            x_pos
}


const determineNewYPos = (heading, y_pos) => {

    const headingL = heading.toLowerCase()

    return  headingL ==='n' ? y_pos + 1 :
            headingL ==='s' ?  y_pos - 1 :  
            y_pos
}

module.exports = {
    F: 'f',
    B: 'b',
    L: 'l',
    R: 'r',
    move: move,
    moveOneCommand: handleSingleMove
}