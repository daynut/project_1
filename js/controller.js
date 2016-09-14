$(document).ready(function(){
// console.log('controller is working');


  config.redPlayerName = prompt("Please enter the first player's name. This player will use red game pieces.", config.redPlayerName) || config.redPlayerName;
  config.blackPlayerName = prompt("Please enter the second player's name. This player will use black game pieces.", config.blackPlayerName) || config.blackPlayerName;

  $('.prefix').text(config.playerPrefix);
  $('#player').addClass(currentPlayer).text(config[currentPlayer + "PlayerName"]);

  $('.board button').click(function(e) {
      // Detect the x and y position of the button clicked.
      var y_pos = $('.board tr').index($(this).closest('tr'));
      var x_pos = $(this).closest('tr').find('td').index($(this).closest('td'));


      addDiscToBoard(currentPlayer, x_pos, y_pos);
      printBoard();




})
