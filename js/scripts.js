$(document).ready(function() {


  $("#start").click(function() {
    var game = new Game();
    game.initialize();
    var currentPlayer = game.turn();
    renderStartGame();
    renderBoard(game);
    createEventListeners(game, currentPlayer);
  });

  function checkGame(game) {
    if (game.checkWinner !== "false") {
      game.turn();
    } else {
      renderEndGame(game.winner);
    }
  }

  function renderEndGame = function(player) {
    $("#message-container").append("<h1 class='text-center'>" + "Player" + player.mark + " wins!</h1>");
  }


  function renderStartGame() {
    $("#message-container").empty();
    $("#message-container").append("<h1 class='text-center'>Welcome to Tic-Tac-Toe!</h1>");
    $("#controls-container").empty();
  }

  function renderBoard(game) {

    $("#board-container").append(
      "<div class='row text-center'>" +
        "<div id='0' class='square'></div>" +
        "<div id='1' class='square'></div>" +
        "<div id='2' class='square'></div>" +
      "</div>" +
      "<div class='row text-center'>" +
        "<div id='3' class='square'></div>" +
        "<div id='4' class='square'></div>" +
        "<div id='5' class='square'></div>" +
      "</div>" +
      "<div class='row text-center'>" +
        "<div id='6' class='square'></div>" +
        "<div id='7' class='square'></div>" +
        "<div id='8' class='square'></div>" +
      "</div>"
    );

  }

  function createEventListeners(game, currentPlayer) {
    for (var index = 0; index < 9; index++) {
      $("#" + index).on("click", function() {
        board.spaces[index].mark_by(currentPlayer);
        $(this).text("hi");
        $(this).unbind();
        checkGame(game);
      });
    }
  }
});


function Player(mark) {
  this.mark = mark;
}

function Space(x,y) {
  this.x = x,
  this.y = y,
  this.markedBy = "false";
}

Space.prototype.mark_by = function(player) {
  this.markedBy = player;
};

function Board() {
  this.spaces = [];
}

Board.prototype.initialize = function() {
  this.spaces = [];
  for (var x = 0; x < 3; x++) {
    for (var y = 0; y < 3; y++) {
      this.spaces.push(new Space(x,y));
    }
  }
};

function Game() {
  this.players = [],
  this.board = [],
  this.counter = 0,
  this.winner = false;
}

Game.prototype.turn = function() {
  this.counter ++;
  if (this.counter % 2 !== 0) {
    return this.players[0];
  } else {
    return this.players[1];
  }
};

Game.prototype.checkWinner = function() {
  var space = this.board.spaces
  if ((space[0].markedBy.mark) === (space[1].markedBy.mark) &&
      (space[0].markedBy.mark) === (space[2].markedBy.mark)) {
    this.winner = space[0].markedBy;
  }
  if ((space[3].markedBy.mark) === (space[4].markedBy.mark) &&
      (space[3].markedBy.mark) === (space[5].markedBy.mark)) {
    this.winner = space[3].markedBy;
  }
  if ((space[6].markedBy.mark) === (space[7].markedBy.mark) &&
      (space[6].markedBy.mark) === (space[8].markedBy.mark)) {
    this.winner = space[6].markedBy;
  }
  if ((space[0].markedBy.mark) === (space[3].markedBy.mark) &&
      (space[0].markedBy.mark) === (space[6].markedBy.mark)) {
    this.winner = space[0].markedBy;
  }
  if ((space[1].markedBy.mark) === (space[4].markedBy.mark) &&
      (space[1].markedBy.mark) === (space[7].markedBy.mark)) {
    this.winner = space[1].markedBy;
  }
  if ((space[2].markedBy.mark) === (space[5].markedBy.mark) &&
      (space[2].markedBy.mark) === (space[8].markedBy.mark)) {
    this.winner = space[2].markedBy;
  }
  if ((space[1].markedBy.mark) === (space[4].markedBy.mark) &&
      (space[1].markedBy.mark) === (space[8].markedBy.mark)) {
    this.winner = space[1].markedBy;
  }
  if ((space[6].markedBy.mark) === (space[4].markedBy.mark) &&
      (space[6].markedBy.mark) === (space[2].markedBy.mark)) {
    this.winner = space[6].markedBy;
  }
};

Game.prototype.initialize = function() {
  this.players.push(new Player("X")),
  this.players.push(new Player("O")),
  this.board = new Board();
  this.board.initialize();
};
