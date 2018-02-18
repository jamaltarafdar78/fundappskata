const initialState = {
    x_pos: 0, 
    y_pos: 0,
    heading: 'N'
}

const move = (moveComm) => {
    if(moveComm === '' || !moveComm) return initialState;

    let newState = initialState;

    const movements = moveComm.split();
    movements.forEach(movement => {
        newState = handleMove(movement, newState)
    });

    return newState;
}

const handleMove = (movement, state) => {

    const {x_pos, y_pos} = state;

    let newState = state;

    switch (movement.toLowerCase()) {
        case 'f':
            newState = {
                x_pos: x_pos,
                y_pos: y_pos + 1,
                heading: 'N'
            }
            break;
        case 'r':
            newState = {
                x_pos: x_pos + 1,
                y_pos: y_pos,
                heading: 'E'
            }
            break;
        default:
            break;
    }

    return newState;
}

module.exports = {
    F: 'f',
    B: 'b',
    L: 'l',
    R: 'r',
    move: move
}