const initialState = {
    x_pos: 0, 
    y_pos: 0,
    heading: 'N'
}

const move = (moveComm) => {
    if(moveComm === '') return initialState;
}

module.exports = {
    F: 'f',
    B: 'b',
    L: 'l',
    R: 'r',
    move: move
}