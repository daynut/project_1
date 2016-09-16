var config = {
  redPlayerName: "Player 1",
  blackPlayerName: "Player 2",
  startingPlayer: "red",
  takenMsg: "Sorry, that one is taken...try again!!",
  playerPrefix: "Current Player is: ",
  countToWin: 4,
  winPrefix: "The WINNER is: ",
  drawMsg: "This game is a draw."
};

var board = [
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0]
];

var currentPlayer = config.startingPlayer;
