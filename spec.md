Board contents:

6 rows gives equal chances to both players
7 columns across gives an uneven number, so one person can win

42 total squares on the board with 3 outcomes for each square; player1, player2, or null

Rules:
Players will play in turn succession and the first player to connect four in a row, either horizontally, vertically or diagonally wins the game.

Logic:
Player1 (redPlayerName) makes move (highlights cell with color red).  Player2 (blackPlayerName) takes a turn, looks to see how many pieces the opponent (player1) has in horizontal, vertical, and diagonal positions.
If there are 3 red (player1) pieces, player2 places black piece in 4th position.
If there are <= 2 red (player1) pieces, player2 looks to see if there are <=4 open cells (not highlighted) in horizontal, vertical, or diagonal position, and places his black piece (highlights closest cell).  
Players play (repeat) until a win.  
A win is 4 pieces in horizontal, vertical, or diagonal position.
