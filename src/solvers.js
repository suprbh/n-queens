/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {

  if(n === 1) { return [[1]];}

  var solution = []; //fixme
  //create a new board
  var nRooks = n;
  var prevRow = [];
  var prevCol = [];

  var iterator = function(prevRow, prevCol, nRooks, currBoard){
    if (nRooks === 0){
      return currBoard;
    }

    for (var newRow = 0; newRow < n; newRow++){
      for (var newCol = 0; newCol < n; newCol++){
        // not in same row || column
        if(prevRow.indexOf(newRow) < 0 || prevCol.indexOf(newCol) < 0){
          currBoard.togglePiece(newRow, newCol);
          //debugger;
          if(currBoard['hasAnyRowConflicts']() || currBoard['hasAnyColConflicts']()){
          //if (currBoard.hasAnyRowConflicts() || currBoard.hasAnyColConflicts()){
            currBoard.togglePiece(newRow, newCol);
          }else {
            nRooks--;
            prevRow.push(newRow);
            prevCol.push(newCol);
            return iterator(prevRow, prevCol, nRooks, currBoard);
          }
        }
      }
    }
    return;
  };

  if (nRooks === 2){
    //debugger;
  }
  for (var i = 0; i < n; i++){
    for (var j = 0; j < n; j++){
      nRooks = n;
      prevRow = [];
      prevCol = [];
      var board = new Board({n:n});
      board.togglePiece(i,j);
      prevRow.push(i);
      prevCol.push(j);
      nRooks--;
      //return value
      var result = iterator(prevRow, prevCol, nRooks, board);
      if (result !== undefined){
        // check for duplicates
        if (n===2){
          //debugger;
        }
        if(solution.indexOf(result) < 0){
          solution.push(result);
        }
      }
    }
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  console.log(solution);
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
