var config = {
  redPlayerName: "Player 1",
  blackPlayerName: "Player 2",
  startingPlayer: "red",
  takenMsg: "Sorry, that one is taken...try again!!",
  playerPrefix: "Current Player is: "

}
var board = [
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0]
];
var currentPlayer = config.startingPlayer;
