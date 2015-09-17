$(document).ready(function() {

  $("#start").on("click", function() { 
    startGame(); 
    $(this).off("click");
  });

  function printPlayer() {
    $("#player-turn").text(currentPlayer.mark + "'s turn!");
  }

  function startGame() {
    game = new Game();
    game.initialize();
    currentPlayer = game.turn();
    printPlayer();
    renderStartGameMsg();
    renderBoard();
  }

  function checkGame() {
    game.checkWinner();
    if (game.counter === 9) { renderTieGameMsg(); }
    if (game.winner !== "false") {
      renderWinGameMsg(game.winner);
    } else {
      currentPlayer = game.turn();
      // Working on adding dynamic picture classes to hovering based upon turn 
      if ($("#board-container").hasClass("x") ) {
        $("#board-container").removeClass("x");
        $("#board-container").addClass("y");
      } else {
        $("#board-container").removeClass("y");
        $("#board-container").addClass("x");
      }
    }
    printPlayer();
  }

  function renderEndGameComponents() {
    $("#board-container").empty();
    $("#turn-container").empty();
    $("#message-container").append("<button id='restart' class='btn text-center btn-primary btn-lg'>Play again?</button>");
    $("#restart").on("click", function() { 
      startGame(); 
      $(this).off("click");
    });
  }


  function renderTieGameMsg() {
    renderEndGameComponents();
    $("#message-container").append("<h1 class='text-center'>" + "It's a Tie!</h1>");
  }

  function renderWinGameMsg(player) {
    renderEndGameComponents();
    $("#message-container").append("<h1 class='text-center'>" + "Player " + player.mark + " wins!</h1>");
  }

  function renderStartGameMsg() {
    $("#message-container").empty();
    $("#message-container").append("<h1 class='text-center'>Welcome to Tic-Tac-Toe!</h1>");
    $("#controls-container").remove();
  }

  $("#board-container").on("click", ".square", function() {
    game.board.spaces[ $(this)[0].id ].mark_by(currentPlayer);
    if ( $(this).text() !== '') {
      alert("Cheater!");
    } else {
      if (currentPlayer.mark === 'X') {
        $(this).text("X").css("background-color", "red").addClass("mark");
      } else {
        $(this).text("O").css("background-color", "green").addClass("mark");
      }
      checkGame();
    }
  });

  function renderBoard() {
    $("#board-container").empty();
    $("#board-container").append(
      "<table id='board'>" +
        "<tr>" +
          "<td id='0' class='square'></td>" +
          "<td id='1' class='square'></td>" +
          "<td id='2' class='square'></td>" +
        "</tr>" +
        "<tr>" +
          "<td id='3' class='square'></td>" +
          "<td id='4' class='square'></td>" +
          "<td id='5' class='square'></td>" +
        "</tr>" +
        "<tr>" +
          "<td id='6' class='square'></td>" +
          "<td id='7' class='square'></td>" +
          "<td id='8' class='square'></td>" +
        "</tr>" +
      "</table>"
    );
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

// Needs a LOT of refactoring 
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
