$(document).ready(function(){

  function addDiscToBoard(color, y_pos, x_pos) {
    board[y_pos][x_pos] = color;
  }
  // $("your-pure-css-selector").eq(index)
  var cell = $("tr:eq("y")").find('td').eq(x);
  cell.children('button').addClass(board[y][x]);

  function changePlayer() {
    if (currentPlayer === 'red') {
        currentPlayer = 'black';
    } else {
        currentPlayer = 'red';
    }
  }









})
