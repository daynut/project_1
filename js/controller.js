$(document).ready(function(){


  // Configure players.
  config.redPlayerName = prompt("Please enter the first player's name. This player will use RED game pieces.", config.redPlayerName) || config.redPlayerName;
  config.blackPlayerName = prompt("Please enter the second player's name. This player will use BLACK game pieces.", config.blackPlayerName) || config.blackPlayerName;
  $('.prefix').text(config.playerPrefix);
  $('#player').addClass(currentPlayer).text(config[currentPlayer + "PlayerName"]);
  // Start game on click 
  $('.board button').click(function(e) {
      // Detect the x and y position of the button clicked.
      var y_pos = $('.board tr').index($(this).closest('tr'));
      var x_pos = $(this).closest('tr').find('td').index($(this).closest('td'));

      if (positionIsTaken(x_pos, y_pos)) {
          alert(config.takenMsg);
          return;
      }

      addDiscToBoard(currentPlayer, x_pos, y_pos);
      printBoard();

      changePlayer();
  });



})
