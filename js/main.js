/*----- constants -----*/

// Store puzzle solution
const solution = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // column 0
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0], // column 1
    [0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0], // column 2
    [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0], // column 3
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0], // column 4
    [0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0], // column 5
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // column 6
    [0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1], // column 7
    [0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1], // column 8
    [0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], // column 9
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0] // column 10
];

/*----- app's state variables -----*/
var board;

/*----- cached element references -----*/
var headline = document.getElementById("headline");

/*----- event listeners -----*/
document.getElementById('gameBoard')
  .addEventListener('mousedown', handleClick);

/*----- functions -----*/
initialize();

function handleClick(evt) {
    const marker = evt.target;
    var markerString = marker.id;
    var rowArr = markerString.split('r');
    var rowIdx = rowArr[rowArr.length - 1];
    rowArr.pop();
    var colIdx = rowArr.join('').replace('c', '');
    if (colIdx != 0) {
        if (!marker.style.backgroundColor) {
            marker.style.backgroundColor = 'black'
            board[rowIdx][colIdx] = 1;
        } else if (marker.style.backgroundColor = 'black') {
            marker.style.backgroundColor = ''
            board[rowIdx][colIdx] = 0;
        }
    }
    checkWin()
}

// Check if current board array matches solution array
function checkWin() {
    if (board.toString() === solution.toString()) {
        headline.innerHTML = "You Win!";
        headline.style.fontSize = "70px";
    }
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
}