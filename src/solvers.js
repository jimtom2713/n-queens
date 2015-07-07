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

  //take in a set board, rowIndex, colIndex
var board = new Board({n:n});

// var rowStartIndex;
// var colStartIndex;
var pieceCount = 0;
var solution = board;

var playOutBoard = function(board, rowIndex, columnIndex) {
  board.togglePiece(rowIndex, columnIndex);
  pieceCount++;
  if(board.hasAnyRooksConflicts()){
    board.togglePiece(rowIndex, columnIndex);
    pieceCount--;
  }else{
    if(pieceCount === n || (columnIndex === n - 1 && rowIndex === n - 1)){
      solution = board.rows();
      return;
    }
  }
  if(columnIndex < board.rows().length){
    playOutBoard(board, rowIndex, columnIndex + 1);
  }else{
    playOutBoard(board, rowIndex + 1, 0);
  }
};

  if(board.hasAnyRooksConflicts()){
    playOutBoard(board, rowIndex, colIndex);
  }

  playOutBoard(solution, 0, 0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n:n});
  // var numberOfRooks = 0;

  var helper = function(rowIndex){
    for(var i=0; i<n;i++){
      if(rowIndex === n){
        solutionCount++
        return;
      }else{
          board.togglePiece(rowIndex, i);
          if(!board.hasAnyRooksConflicts()){
            helper(rowIndex + 1);
          }
          board.togglePiece(rowIndex, i);
      }
    }
  }

  helper(0);
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
