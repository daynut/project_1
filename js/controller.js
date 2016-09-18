$(document).ready(function(){


  // Configure players.
  config.redPlayerName = prompt("Please enter the first player's name.\nThis player will use RED game pieces.", config.redPlayerName) || config.redPlayerName;
  config.blackPlayerName = prompt("Please enter the second player's name.\nThis player will use BLACK game pieces.", config.blackPlayerName) || config.blackPlayerName;
  $('.prefix').text(config.playerPrefix);
  $('#player').addClass(currentPlayer).text(config[currentPlayer + "PlayerName"]);
  // Start game on click of position button
  $('.board button').click(function(e) {
      // Detect the x and y position of the button clicked.
      var y_pos = $('.board tr').index($(this).closest('tr'));
      var x_pos = $(this).closest('tr').find('td').index($(this).closest('td'));
      // Make sure piece falls to bottom of column.
      y_pos = dropToBottom(y_pos, x_pos);
      // Check to see if position is taken.
      if (positionIsTaken(y_pos, x_pos)) {
          alert(config.takenMsg);
          return;
      }
      // Add piece to board[y][x]
      addDiscToBoard(currentPlayer, y_pos, x_pos);
      // Show it on screen
      printBoard();
      if (horizontalWin() || verticalWin() || diagonalWin()){
        $('.prefix').text(config.winPrefix);
        $('.play-again').show();
        $('.board button').off('click');
        return;
      } else if (gameIsDraw()){
        $('.message').text(config.drawMsg);
        $('.board button').off('click');
        $('.play-again').show();
        return;
      }
      changePlayer();
  });
  $('.play-again').click(function(e) {
      location.reload();
  });




})
