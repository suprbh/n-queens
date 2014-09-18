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

  if(n < 2 || n === undefined) { return null;}

  var solution = []; //fixme

  //create a new board
  var board = new Board({n:n});

  var queens = n;

  var subRoutine = function(position, noQueens) {
    var x = position[0];
    var y = position[1];

    //if we reach the end (x:n, y:n) and run out of queens, push to solution
    if(x === n-1 && y === n-1) {
      if(noQueens === 0 ) {
        solution.push(board);
      }
    } else {
      if(y === n-1) {
        x++;
        y = 0;
      } else {
        y++;
      }
    }
    // add queen to next position -- 0,1 (going from top-left)
    board.set(x)[y] = 1;
    noQueens--;
    // if added queen does not create row or col conflict
    if( board.hasAnyRooksConflicts() === false){
        // call subroutine again to place new queen at next position
        subRoutine([x,y], noQueens);
    } else {
      // remove queen at current position
      board.set(x)[y] = 0;
      //increment amount of noQueens
      noQueens++;
      // call subroutine with next position and remaining noQueens
      subRoutine([x,y], noQueens);
    }
  };

  //set a queen in the first position
  board.set(0)[0] = 1;
  queens--;
  //call a subroutine
    debugger;
  subRoutine([0,0], queens);


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // console.log(solution);
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
