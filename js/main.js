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
var cells = document.querySelectorAll('div');
var headline = document.getElementById('headline');
var gameBoard = document.getElementById('gameboard');
var restartButton = document.getElementById('restart');

/*----- event listeners -----*/
gameBoard.addEventListener('mousedown', handleClick);
restartButton.addEventListener('click', cleanBoard);

/*----- functions -----*/
initialize();

// Make all cells white on restart
function cleanBoard() {
    initialize()
    cells.forEach(function (el) {el.style.backgroundColor = ''})
    headline.innerHTML = 'Nonogram Game';
}

// Make tiles toggle white/black AND toggle cell value 0/1
function handleClick(evt) {
    const marker = evt.target;
    var markerString = marker.id;
    var rowArr = markerString.split('r');
    var rowIdx = rowArr[rowArr.length - 1];
    rowArr.pop();
    var colIdx = rowArr.join('').replace('c', '');
    if (colIdx != 0) {
        if (evt.altKey === false) {
            if (!marker.style.backgroundColor) {
                marker.style.backgroundColor = 'black'
                board[rowIdx][colIdx] = 1;
            } else if (marker.style.backgroundColor = 'black') {
                marker.style.backgroundColor = ''
                board[rowIdx][colIdx] = 0;
            } 
        } else {
            marker.style.backgroundColor = 'red'
            board[rowIdx][colIdx] = 0;
        }
    }
    checkWin()
}

// Check if current board array matches solution array
function checkWin() {
    if (board.toString() == solution.toString()) {
        headline.innerHTML = 'You Win!';
    } else if (board.toString() !== solution.toString()) {
        headline.innerHTML = 'Nonogram Game';
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