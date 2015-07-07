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

/*
    togglePiece: function(rowIndex, colIndex) {
      this.get(rowIndex)[colIndex] = + !this.get(rowIndex)[colIndex];
      this.trigger('change');
    },
*/

window.findNRooksSolution = function(n) {
  var board = new Board({n:n}); 
  var solution = [];
  // board.togglePiece(0,0);

  var placePiece = function(board, rowIndex, columnIndex){
    var previousState = board;
    board.togglePiece(rowIndex, columnIndex);
    if(!(board.hasAnyRooksConflicts())){ //no conflicts
      if(rowIndex < board.rows().length){
        console.log(board.rows()[rowIndex]);
        debugger;
        solution.push(board.rows()[rowIndex]);
        console.log(solution);
        placePiece(board, rowIndex++, rowIndex+1);
      }else if(solution.length === board.rows().length){
        return solution;
      }
    }else{
      if(columnIndex < board.rows().length){
        placePiece(previousState, rowIndex, columnIndex++);
      }else if(columnIndex === board.rows().length-1){
        solution.pop();
        placePiece(previousState, rowIndex + 1, 0);
      }
    }
  }
  placePiece(board, 0, 0)
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // return solution;
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
