/*----- constants -----*/
    // Value Color pairs for each cell
const COLORS = {
    '0': 'white',
    '1': 'black',
};

    // Store puzzle solution
const solution = [
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // column 
[0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0], // column 1
[0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0], // column 2
[0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0], // column 3
[0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0], // column 4
[0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1], // column 5
[0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1], // column 6
[0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0], // column 7
[0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0], // column 8
[0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0], // column 9
[0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0] // column 10
];

/*----- app's state variables -----*/
var board, winner, turn;

/*----- cached element references -----*/

/*----- event listeners -----*/

document.getElementById('gameBoard')
  .addEventListener('click', handleClick);


/*----- functions -----*/
initialize();

    // process shading activity
function handleClick(evt) {
   const marker = evt.target;
   const colIdx = marker.id.replace('col', '');
    // IF USING ABOVE AND NO ID'S FOR KEYS - ADD PARSEINT AND::: 
      // if (isNaN(colIdx)) return;
    // UPDATE TO FIND EXACT POSITION INSTEAD OF FIRST ZERO::: 
      // const rowIdx = board[colIdx].indexOf(zero);
    board[colIdx][rowIdx] = turn;
    turn = -1;
    render();
}

    // check if current board array === solution array
function checkWin() {
    if (board === solution) {
        alert('You win!');
    }
}

function render() {
    // Display the board
    board.forEach(function(colArr, colIdx) {
        colArr.forEach(function(cell, rowIdx) {
    // Access the correct div in the section
            const div = document.getElementById(`c${colIdx}r${rowIdx}`);
            div.style.backgroundColor = COLORS[cell];
        });
    });
    // Display win message
    if (winner) {} else {}
}

    // Initialize board
function initialize() {
    board = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // column 
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // column 1
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // column 2
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // column 3
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // column 4
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // column 5
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // column 6
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // column 7
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // column 8
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // column 9
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  // column 10
    ];
    winner = null;
    turn = 1;
    render();
}