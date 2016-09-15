$(document).ready(function(){

  /**
 * @param string color Current player color
 * @param int x_pos The x position clicked
 * @param int y_pos The y position clicked
 */

  function addDiscToBoard(color, y_pos, x_pos) {
    board[y_pos][x_pos] = color;
  }
  // Render the changes to the board in html
  function changeBoard(){
    // Loop through board and add color class to each cell
    for (var y = 0; y <= 5; y++){
      for (var x = 0; x <= 6; x++){
        if (board[y][x] !== 0){
          var cell = $("tr:eq(" + y + ")").find('td').eq(x);
          cell.children('button').addClass(board[y][x]);
        }
      }
    }
  }

  // Change players after each turn
  function changePlayer() {
    if (currentPlayer === 'red') {
        currentPlayer = 'black';
    } else {
        currentPlayer = 'red';
    }
    $('#player').removeClass().addClass(currentPlayer).text(config[currentPlayer + "PlayerName"]);
  }


    // If there are empty positions below the one chosen, return the new y-position we should drop the piece to.
   /**
    @param int x_pos The x-position of the location chosen.
    @param int y_pos The y-position of the location chosen.
    @return bool returns true or false for the question "Is this at the bottom?".
  */
  function dropToBottom(x_pos, y_pos) {
      // Start at the bottom of the column, and step up, checking to make sure
      // each position has been filled. If one hasn't, return the empty position.
      for (var y = 5; y > y_pos; y--) {
          if (board[y][x_pos] === 0) {
              return y;
          }
      }

      return y_pos;
  }








})
