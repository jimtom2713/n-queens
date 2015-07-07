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
//start with a board
var board = new Board({n:n});
//toggle a piece
var pieceCount = 0;
var solution;

board.togglePiece(rowIndex, columnIndex);
if(board.hasAnyRooksConflicts()){
  //toggle the piece back
  board.togglePiece(rowIndex,columnIndex);
  //can we move to the next column?
  //if yes
  if(columnIndex < board.rows().length){
    mystery(board, rowIndex, columnIndex++)
  }else{
    if(rowIndex < board.rows().length){
      mystery(board, rowIndex++, 0);
    }else{
      if(pieceCount === board.rows().length){
        solution = board;
      }else{
        var previousPiece = _.indexOf(board.rows()[rowIndex], 1);
        mystery(previousPiece, previousPiece + 1);
      }
    }
  }
}else{
  pieceCount++;
  if(pieceCount < board.rows().length){
    if(columnIndex < board.rows().length){
      mystery(board, rowIndex, columnIndex++)
    }else{
      if(rowIndex < board.rows().length){
        mystery(board, rowIndex++, 0);
      }else{
        if(pieceCount === board.rows().length){
          solution = board;
        }
      }
    }
  }

    //do it -> col++ ???
  //if no
    //can we move to the next row?
    //if yes
      //do it
    //if no
      //start this code over and toggle the previous row and next column
//if no conflicts
  //pieceCount++
  //if pieceCount < board.rows().length
  //can we move to the next column
    //if yes
      //do it -> col++
    //if no
      //can we move to the next row?
      //if yes
        //do it
      //if no
        //stop?
        //return null;
  //}else{
    //return solution;
  //}




//else
  //do other stuff

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
