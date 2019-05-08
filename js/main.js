/*----- constants -----*/
    // Value Color pairs for each cell
// const COLORS = {
//     '0': 'white',
//     '1': 'black',
// };

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
    var markerString = marker.id;
    var rowrArr = markerString.split('r');
    var rowIdx = rowrArr[rowrArr.length-1];
    rowrArr.pop();
    var colIdx = rowrArr.join('').replace('c', '');
    // console.log(colIdx)
    if(colIdx != 0){

        if(!marker.style.backgroundColor){
            marker.style.backgroundColor = 'black'
            board[rowIdx][colIdx] = 1
        } else {
            marker.style.backgroundColor = ''
            board[rowIdx][colIdx] = 0
        }
        
    }
    checkWin()

    // var colIdx = marker.id.substring(1,2);
    // var rowIdx = marker.id.split('r')[marker.id.split('').length -1 ];

//    console.log("column index", colIdx, "row index", rowIdx);
   console.log(board);
   
    // UPDATE TO FIND EXACT POSITION AT INDEXOF::: 
    // const rowIdx = board[colIdx].indexOf();

    // board[colIdx][rowIdx] = turn;
    // turn = -1;
    render();
}

    // check if current board array === solution array
function checkWin() {
    if (board.toString() === solution.toString()) {
        alert('You win!');
    }
}

function render() {
    // Display the board            
    // const div = document.getElementById(`c${colIdx}r${rowIdx}`);
    //     div.style.backgroundColor = COLORS[cell];
    // board.forEach(function(colArr, colIdx) {
    //     colArr.forEach(function(cell, rowIdx) {
    // // // Access the correct div in the section

    //     });
    // });
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