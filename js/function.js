$(document).ready(function(){

  function addDiscToBoard(color, x_pos, y_pos) {
    board[y_pos][x_pos] = color;
  }

  function changePlayer() {
    if (currentPlayer === 'red') {
        currentPlayer = 'black';
    } else {
        currentPlayer = 'red';
    }
  }









})
