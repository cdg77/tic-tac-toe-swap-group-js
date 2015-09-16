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

Board.prototype.find = function(x,y) {
  var foundSpace;
  var count = 0;
  while (foundSpace === undefined) {
    if (this.spaces[count].x === x && this.spaces[count].y === y) {
      if (this.spaces[count].markedBy.mark === undefined) {
        return "false";
      } else {
        return this.spaces[count].markedBy.mark;
      }
    }
    count += 1;
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
  if ((this.board.spaces[0].markedBy.mark) === (this.board.spaces[1].markedBy.mark) &&
      (this.board.spaces[0].markedBy.mark) === (this.board.spaces[2].markedBy.mark)) {
    this.winner = this.board.spaces[0].markedBy;
  }
  if ((this.board.spaces[3].markedBy.mark) === (this.board.spaces[4].markedBy.mark) &&
      (this.board.spaces[3].markedBy.mark) === (this.board.spaces[5].markedBy.mark)) {
    this.winner = this.board.spaces[3].markedBy;
  }
  if ((this.board.spaces[6].markedBy.mark) === (this.board.spaces[7].markedBy.mark) &&
      (this.board.spaces[6].markedBy.mark) === (this.board.spaces[8].markedBy.mark)) {
    this.winner = this.board.spaces[6].markedBy;
  }
  if ((this.board.spaces[0].markedBy.mark) === (this.board.spaces[3].markedBy.mark) &&
    (this.board.spaces[0].markedBy.mark) === (this.board.spaces[6].markedBy.mark)) {
      this.winner = this.board.spaces[0].markedBy;
  }
  if ((this.board.spaces[1].markedBy.mark) === (this.board.spaces[4].markedBy.mark) &&
    (this.board.spaces[1].markedBy.mark) === (this.board.spaces[7].markedBy.mark)) {
      this.winner = this.board.spaces[1].markedBy;
  }
  if ((this.board.spaces[2].markedBy.mark) === (this.board.spaces[5].markedBy.mark) &&
      (this.board.spaces[2].markedBy.mark) === (this.board.spaces[8].markedBy.mark)) {
        this.winner = this.board.spaces[2].markedBy;
  }
  if ((this.board.spaces[1].markedBy.mark) === (this.board.spaces[4].markedBy.mark) &&
    (this.board.spaces[1].markedBy.mark) === (this.board.spaces[8].markedBy.mark)) {
      this.winner = this.board.spaces[1].markedBy;
  }
  if ((this.board.spaces[6].markedBy.mark) === (this.board.spaces[4].markedBy.mark) &&
    (this.board.spaces[6].markedBy.mark) === (this.board.spaces[2].markedBy.mark)) {
      this.winner = this.board.spaces[6].markedBy;
  }
};


Game.prototype.initialize = function() {
  this.players.push(new Player("X")),
  this.players.push(new Player("O")),
  this.board = new Board();
  this.board.initialize();
};
