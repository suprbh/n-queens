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


  var iterator = function(prevRow, prevCol, nRooks, currBoard, solution){
    if (nRooks === 0){
      return currBoard;
    }

    var prevRowLen = prevRow.length;
    var prevColLen = prevCol.length;
    for (var newRow = prevRow[prevRowLen-1]+1; newRow < n; newRow++){
      var y = prevCol[prevColLen-1]+1 < n ? prevCol[prevColLen-1]+1 : 0;
      for (var newCol = y; newCol < n; newCol++){
        // not in same row || column
        if(prevRow.indexOf(newRow) < 0 || prevCol.indexOf(newCol) < 0){
          currBoard.togglePiece(newRow, newCol);
          if(currBoard.hasAnyRooksConflicts()){
            currBoard.togglePiece(newRow, newCol);
          }else {
            nRooks--;
            prevRow.push(newRow);
            prevCol.push(newCol);
            // fixme return iterator(prevRow, prevCol, nRooks, currBoard);
            var result = iterator(prevRow, prevCol, nRooks, currBoard,solution);
            if (result !== undefined){
              solution.push(result);
            }
          }
        }
      }
    }
    return;
  };

  var findDuplicates = function(set, newBoard) {
 //debugger;
    if(set.length === 0) {
      return false;
    }
    //grab rows of newBoard
    var newBoardRows = newBoard.rows();
    //traverse through set
    for(var i = 0; i < set.length; i++){
      // get each row of each board in set
      var setRows = set[i].rows();
      // compare to row of newBoard
      var count = 0;
      for(var j = 0; j < setRows.length; j++) {
        // if row of newBoard matches board in set (strings)
        if(setRows[j].toString() === newBoardRows[j].toString()) {
            count++;
            if(count === newBoardRows.length){
              return true;
            }
        }
      }
    }
    return false;
  };

  for (var i = 0; i < n; i++){
    for (var j = 0; j < n; j++){
      if (i===0 && j ===2 && n ===3){
        //debugger;
      }
      nRooks = n;
      prevRow = [];
      prevCol = [];
      var board = new Board({n:n});
      board.togglePiece(i,j);
      prevRow.push(i);
      prevCol.push(j);
      nRooks--;

      var result = iterator(prevRow, prevCol, nRooks, board, solution);
      if (result !== undefined){
       //if(findDuplicates(solution, result) === false) {
         // solution.push(result);
       //}
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

  var solutions = findNRooksSolution(n);
  solutionCount = solutions.length;

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
