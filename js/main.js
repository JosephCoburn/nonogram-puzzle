/*----- constants -----*/
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

var puzzleSolutions = [solution];
var currentPuzzle = 0;
var puzzleColumns = 11;
var puzzleRows = 11;

/*----- app's state variables -----*/
var board;

/*----- cached element references -----*/
var cells = document.querySelectorAll('div');
var headline = document.getElementById('headline');
var puzzleBoard = document.getElementById('puzzleboard');
var restartButton = document.getElementById('restart');
var nextButton = document.getElementById('next');
var fullPuzzle = document.getElementById('puzzle-full');
var fullInstructions = document.getElementById('instructions');

/*----- event listeners -----*/
puzzleBoard.addEventListener('click', handleClick);
restartButton.addEventListener('click', cleanBoard);
nextButton.addEventListener('click', nextPuzzle);

/*----- functions -----*/
initialize();

// Swap gameboard for instructions on click
function toggleInstructions() {
    if (!fullPuzzle.style.display) {
        fullPuzzle.style.display = 'none';
        fullInstructions.style.display = 'block'
    } else if (fullPuzzle.style.display == 'none') {
        fullPuzzle.style.display = 'block';
        fullInstructions.style.display = 'none'
    } else if (fullPuzzle.style.display == 'block') {
        fullPuzzle.style.display = 'none';
        fullInstructions.style.display = 'block'
    }
}

// Make all cells white on restart
function cleanBoard() {
    initialize()
    cells.forEach(function (el) {el.style.backgroundColor = ''})
    headline.innerHTML = 'nonogram puzzle' + ' ' + (currentPuzzle + 1);
}


function getRowHints(puzzleSolution) {
    // used to track how many consecutive cells in a row are filled in.
    var numberOfConsecutiveRowBlocks = 0;
    // a list of the hints for each row
    var rowHints = [];

    // Check each column in each row to determine hints based on which cells are filled in.
    for (var row = 1; row < puzzleRows; row++) {
        numberOfConsecutiveRowBlocks = 0;
        for (var col = 1; col < puzzleColumns; col++) {
            var cellValue = puzzleSolution[row][col];
            if (cellValue === 1) {
                numberOfConsecutiveRowBlocks++;
            }
            // if we found a zero or this is the last column in the row, add the hint.
            if (cellValue === 0 || col === puzzleColumns - 1) {
                if (numberOfConsecutiveRowBlocks > 0) {
                    if (!rowHints[row]) {
                        rowHints[row] = [];
                    }
                    // Add this hint to the list of hints for this row.
                    rowHints[row].push(numberOfConsecutiveRowBlocks);
                }
                numberOfConsecutiveRowBlocks = 0;
            }
        }
    }
    return rowHints;
}


function getColumnHints(puzzleSolution) {
    // used to track how many consecutive cells in a column are filled in.
    var numberOfConsecutiveColumnBlocks = 0;
    // a list of the hints for each column
    var colHints = [];

    // Check each row in each column to determine hints based on which cells are filled in.
    for (var col = 1; col < puzzleColumns; col++) {
        numberOfConsecutiveColumnBlocks = 0;
        for (var row = 1; row < puzzleRows; row++) {
            var cellValue = puzzleSolution[row][col];
            if (cellValue === 1) {
                numberOfConsecutiveColumnBlocks++;
            }
            // if we found a zero or this is the last row in the column, add the hint.
            if (cellValue === 0 || row === puzzleRows - 1) {
                if (numberOfConsecutiveColumnBlocks > 0) {
                    if (!colHints[col]) {
                        colHints[col] = [];
                    }
                    // Add this hint to the list of hints for this column.
                    colHints[col].push(numberOfConsecutiveColumnBlocks);
                }
                numberOfConsecutiveColumnBlocks = 0;
            }
        }
    }
    return colHints;
}

function updatePuzzleHints() {
    // Loop through the current puzzle solution, and find the blocks of 1s so we can
    // generate the hints from them.
    var currentSolution = puzzleSolutions[currentPuzzle];

    // get the number of filled in cell hints to show on the top and left
    var rowHints = getRowHints(currentSolution);
    var colHints = getColumnHints(currentSolution);

    // Now update the hints on the page.
    for (var row = 1; row < puzzleRows; row++) {
        var rowHint = rowHints[row] || [];
        // the id of the element in the HTML page that shows the hints for this row.
        var rowHintId = `c0r${row}`;
        // turn the list of numbers into text, with each number separated by a space
        var rowHintString = rowHint.join(' ');
        var rowHintElement = document.getElementById(rowHintId);
        rowHintElement.innerHTML = rowHintString;
    }
    for (var col = 1; col < puzzleColumns; col++) {
        var colHint = colHints[col] || [];
        // the id of the element in the HTML page that shows the hints for this column.
        var colHintId = `c${col}r0`;
        // since the column hints are vertical, we need a new line rather than a space.
        var colHintString = colHint.join('<br>');
        var colHintElement = document.getElementById(colHintId);
        colHintElement.innerHTML = colHintString;
    }
}

// This function is to be used for debugging. It shows the solution so you can check
// if the hints are correct. It also fills in the cells on the board with the solution
// if you call it with true, e.g showSolution(true);
function showSolution(fillInCells) {
    var currentSolution = puzzleSolutions[currentPuzzle];
    // Show the solution in the developer console.
    // console.log is a great way to debug your code as it will print out the value
    // of any variable in your code so you can confirm if it really is what you think it is.
    console.log(currentSolution);

    if (fillInCells) {
        // Show the solution on the board.
        for (var row = 1; row < puzzleRows; row++) {
            for (var col = 1; col < puzzleColumns; col++) {
                var cellValue = currentSolution[row][col];
                var cellId = `c${col}r${row}`;
                var cellElement = document.getElementById(cellId);
                if (cellValue == 1) {
                    cellElement.style.backgroundColor = 'grey';
                } else if (cellValue == 0) {
                    cellElement.style.backgroundColor = '';
                }
            }
        }
    }
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
                marker.style.backgroundColor = 'grey'
                board[rowIdx][colIdx] = 1;
            } else if (marker.style.backgroundColor = 'grey') {
                marker.style.backgroundColor = ''
                board[rowIdx][colIdx] = 0;
            } 
        } else {
            marker.style.backgroundColor = 'pink'
            board[rowIdx][colIdx] = 0;
        }
    }
    checkWin()
}

// Check if current board array matches solution array
function checkWin() {
    var currentSolution = puzzleSolutions[currentPuzzle];
    if (board.toString() == currentSolution.toString()) {
        headline.innerHTML = 'you win!';
    } else if (board.toString() !== currentSolution.toString()) {
        headline.innerHTML = 'nonogram puzzle';
    }
}


function nextPuzzle() {
    currentPuzzle++;
    if (currentPuzzle > puzzleSolutions.length - 1) {
        // They've solved all the manual puzzles, so let's generate a new one.
        var newSolution = generateNewSolution();
        // push adds a new item to the end of an array/list.
        // In this case, we're adding the new solution to the list of solutions.
        puzzleSolutions.push(newSolution);
    }
    updatePuzzleHints();
    cleanBoard();
}

function generateNewSolution() {
    // I'm too lazy to create solutions by hand, so Imma let the computer do it for me.

    // A grid is basically an array of arrays (or list of lists).
    // Each row in the array/list has a list of columns in it.
    var newSolution = [];

    // The for statement lets you do something until a certain condition is met.
    // In this case, we check the row number against the number of rows we want.
    // After each iteration, we increment the row number by 1. (that's what row++ means)
    for (var row = 0; row < puzzleRows; row++) {
        var newRow = [];
        for (var col = 0; col < puzzleColumns; col++) {
            // Randomly generate a 0 or 1
            var cellValue = 0;
            // The first column and row must always be 0. Otherwise, we choose a random
            // number between 0 and 1.
            if (row >=1 && col >= 1) {
                cellValue = Math.floor(Math.random() * 2);
            }
            newRow.push(cellValue);
        }
        newSolution.push(newRow);
    }
    return newSolution;
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
