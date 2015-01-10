// Decision tree problem:
// All subsequent decisions are affected by the first decision made
// Inherently recursive

// n^n time complexity (each level(n levels) has n searches) - exponential time
// polynomial time n^k


/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting
window.findSolution = function(row, cols, board, validator, callback){

   // if at end, count++
   if (row === cols){
      //solutionCount++;
      return board.rows();
   }
   //iterate over all possible decisions for this row
   for (var i=0; i<cols;i++){
      // place a rook
      board.togglePiece(row, i);

      // check for conflicts
      if (!board[validator]()){
         // if no->recurse with remaining rows
         var solution = findSolution(row+1, cols, board, callback);
         if(solution){
            return solution;
         }
      }
      // unplace a rook
      board.togglePiece(row, i);
   }
};

window.findSolutionCount = function(row, cols, board, count, validator){

   // if at end, count++
   if (row === cols){
      count++;
      return count;
   }
   //iterate over all possible decisions for this row
   for (var i=0; i<cols;i++){
      // place a rook
      board.togglePiece(row, i);

      // check for conflicts
      if (!board[validator]()){
         // if no->recurse with remaining rows
         count = findSolutionCount(row+1, cols, board, count, "hasAnyRooksConflicts");
         //return count;
      }
   // unplace a rook
   board.togglePiece(row, i);
   }
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n){
   var solution = [];
   var board = new Board({n:n});

   findSolution(0, n, board, 'hasAnyRooksConflicts',function(){
      return board.rows();
   });

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
   var solutionCount = 0;
   var board = new Board({n:n});

   solutionCount = findSolutionCount(0, n, board, solutionCount, "hasAnyRooksConflicts");

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

   var board = new Board({n:n});
   var solution = [];

   window.findSolution(0, n, board, "hasAnyQueensConflict", function(){
      solution = board.rows();
      return solution;
   });

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
