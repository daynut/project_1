Wireframe:
https://wireframe.cc/9rUgDk
HTML:
Start with boilerplate and link .css and .js files.
Put in the game title header and instructions paragraph.
Make the board section in the html with a table containing 42 cell divs, in 6 rows and 7 columns.

CSS:
Style the board and html elements using classes or ids for red, black and grey (empty) circles; on-load set default to grey circles.
Player 1 will be assigned red, and Player 2 will be assigned black pieces.

SCRIPTS:
Write game logic in .js/jQuery (because I hate vanilla DOM); will need a basic logic component app{} and event handlers ui{}.

Logic:
Winner is defined by connecting 4 cells in a row, column or diagonal (highlighting a cell with the player's color class), on an x and y axis...
Each player takes a turn and either 1) tries to block the opponent from placing a game piece or 2) tries to place his piece next to his own color and connect 4.
Each move has 4 considerations; game pieces to the left, right, column up, and diagonal for the opponent and the player,
