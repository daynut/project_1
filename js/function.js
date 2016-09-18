// window.onload = function(){

  /**
 * @param string color Current player color
 * @param int x_pos The x position clicked
 * @param int y_pos The y position clicked
 */
  // Add a cell to board
  function addDiscToBoard(color, y_pos, x_pos) {
    board[y_pos][x_pos] = color;
  }
  // Render the changes to the board in html
  function printBoard(){
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
  @param int y_pos The y-position of the location chosen.
  @param int x_pos The x-position of the location chosen.
  @return bool Returns true or false for the question "Is this at the bottom?".
  */
  function dropToBottom(y_pos, x_pos) {
      // Start at the bottom of the column, and step up, checking to make sure
      // each position has been filled. If one hasn't, return the empty position.
      for (var y = 5; y > y_pos; y--) {
          if (board[y][x_pos] === 0) {
              return y;
          }
      }
      return y_pos;
  }
  /**
  @param int y_pos The y-position of the chosen cell.
  @param int x_pos The x-position of the chosen cell.
  @return bool  Returns true of false to question "Is this spot taken?"
  */
  //Check to see if cell is taken.
  function positionIsTaken(y_pos, x_pos) {
      var value = board[y_pos][x_pos];
      return value === 0 ? false : true;
  }
  /**
  @return bool Returns true or false to "Is this a draw?"
  */
  function gameIsDraw() {
    for (var y = 0; y <= 5; y++){
      for (var x = 0; x <= 6; x++){
        if (board[y][x] === 0){
          return false;
        }
      }
    }
  }
  /**
  @return bool Returns true if a horizontal win was found
  */
  function horizontalWin() {
    var currentValue = null;
        previousValue = 0;
        tally = 0;
    // Loop through each row, check the x and y pos and count them
    for (var y = 0; y <=5; y++){
      for (var x = 0; x <= 6; x++){
        currentValue = board[y][x];
        if (currentValue === previousValue && currentValue !== 0){
          tally += 1;
        } else {
            //reset counter if there is a gap
            tally = 0;
        }
        if (tally === config.countToWin - 1){
          return true;
        }
        previousValue = currentValue;
      }
      tally = 0;
      previousValue = 0;
    }
    return false;
  }
  /**
  @return bool Returns true if a vertical win was found
  */
  function verticalWin() {
    var currentValue = null;
    previousValue = 0;
    tally = 0;

    for (var x = 0; x <= 6; x++){
      for (var y = 0; y <=5; y++){
        currentValue = board[y][x];
        if (currentValue === previousValue && currentValue !== 0) {
            tally += 1;
        } else {
           // Reset the tally if a gap is found.
           tally = 0;
          }
        if (tally === config.countToWin - 1) {
              return true;
        }
        previousValue = currentValue;
      }
      tally = 0;
      previousValue = 0;
    }
    return false;
  }
  /**
  @return bool Returns true if a diagonal win was found
  */
  function diagonalWin() {
    var y = null,
        x = null,
        ydiag =  null;
        xdiag = null;
        currentValue = null;
        previousValue = 0,
        tally = 0;
    // Check down and to the right (northeast-southwest) across board (x axis).
    for (x = 0; x <= 6; x++){
        ydiag = 0;
        xdiag = x;

        while (xdiag <= 6 && ydiag <= 5){
          currentValue = board[ydiag][xdiag];
          if (currentValue === previousValue && currentValue !== 0){
            tally += 1;
          } else {
              // Reset the tally if a gap is found.
              tally = 0;
          }
          if (tally === config.countToWin - 1){
            return true;
          }
          previousValue = currentValue;
          // Shift down-right one diagonal index.
          ydiag++;
          xdiag++;
        }
        // Reset the tally and previous value when changing diagonals.
        tally = 0;
        previousValue = 0;
    }
    //Look down to the left across board (x axis)
    for (x = 0; x <= 6; x++){
        ydiag = 0;
        xdiag = x;

        while (0 <= xdiag && ydiag <=5){
          currentValue = board[ydiag][xdiag];
          if (currentValue === previousValue && currentValue !== 0) {
              tally += 1;
          } else {
              // Reset the tally if a gap is found.
              tally = 0;
          }
          if (tally === config.countToWin - 1) {
              return true;
          }
          previousValue = currentValue;

          // Shift down and left one diagonal index.
          ydiag++;
          xdiag--;
        }
        // Reset the tally and previous value when changing diagonals.
        tally = 0;
        previousValue = 0;
    }
    // Check down and to the right on left side (y axis)
    for (y = 0; y <= 5; y++){
      ydiag = y;
      xdiag = 0;

      while (6 >= xdiag && ydiag <=5){
        currentValue = board[ydiag][xdiag];
        if (currentValue === previousValue && currentValue !== 0) {
            tally += 1;
        } else {
            // Reset the tally if a gap is found.
            tally = 0;
        }
        if (tally === config.countToWin - 1) {
            return true;
        }
        previousValue = currentValue;
        // Shift down and left one diagonal index.
        ydiag++;
        xdiag++;
      }
      // Reset the tally and previous value when changing diagonals.
      tally = 0;
      previousValue = 0;
    }

    for (y = 0; y <= 5; y++){
      ydiag = y;
      xdiag = 6;

      while (0 >= xdiag && ydiag <=5){
        currentValue = board[ydiag][xdiag];
        if (currentValue === previousValue && currentValue !== 0) {
            tally += 1;
        } else {
            // Reset the tally if a gap is found.
            tally = 0;
        }
        if (tally === config.countToWin - 1) {
            return true;
        }
        previousValue = currentValue;

        // Shift down and left one diagonal index.
        ydiag++;
        xdiag--;
      }
      // Reset the tally and previous value when changing diagonals.
      tally = 0;
      previousValue = 0;
    }
  }





// }
