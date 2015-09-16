describe('Player', function() {
  it("returns the player's mark", function() {
    var testPlayer = new Player("X");
    expect(testPlayer.mark).to.equal("X");
  });
});

describe("Space", function() {
  it("returns the mark of the player", function() {
    var testSpace = new Space(1,2);
    expect(testSpace.x).to.equal(1);
    expect(testSpace.y).to.equal(2);
  });
  it("lets a player mark a space", function() {
    var testPlayer = new Player("X");
    var testSpace = new Space(1,2);
    testSpace.mark_by(testPlayer);
    expect(testSpace.markedBy).to.equal(testPlayer);
  });
});

describe("Board", function() {
  it("creates 9 Space objects with proper coordinates when initialized", function() {
    var board = new Board();
    board.initialize();
    expect(board.spaces.length).to.equal(9);
    expect(board.spaces[0].x).to.eql(0);
    expect(board.spaces[4].x).to.eql(1);
    expect(board.spaces[8].y).to.eql(2);
  });
  it("returns false if a space is not marked", function() {
    var board = new Board();
    board.initialize();
    expect(board.find(1,2)).to.equal("false");
  });
  it("returns the player's mark if the space is marked", function() {
    var board = new Board();
    var testPlayer = new Player("X");
    board.initialize();
    board.spaces[5].mark_by(testPlayer);
    expect(board.find(1,2)).to.equal("X");
  });
});

describe("Game", function() {
  it("should create two players", function() {
    var game = new Game();
    game.initialize();
    expect(game.players.length).to.eql(2);
  });
  it("should create a board", function() {
    var game = new Game();
    game.initialize();
    expect(game.board.spaces.length).to.eql(9);
  });
  it("should return the player whose turn it is", function() {
    var game = new Game();
    game.initialize();
    expect(game.turn()).to.equal(game.players[0]);
    expect(game.turn()).to.equal(game.players[1]);
    expect(game.turn()).to.equal(game.players[0]);
  });
  it("game should not have a winner by default", function() {
    var game = new Game();
    game.initialize();
    expect(game.winner).to.equal(false);
  });
  it("should return the player who won when 3 are in a row horizontally", function() {
    var game = new Game();
    game.initialize();
    var board = game.board;
    var testPlayer = game.players[0];
    board.spaces[6].mark_by(testPlayer);
    board.spaces[7].mark_by(testPlayer);
    board.spaces[8].mark_by(testPlayer);
    game.checkWinner();
    expect(game.winner).to.equal(testPlayer);
  });
  it("should return the player who won when 3 are in a row vertically", function() {
    var game = new Game();
    game.initialize();
    var board = game.board;
    var testPlayer = game.players[1];
    board.spaces[2].mark_by(testPlayer);
    board.spaces[5].mark_by(testPlayer);
    board.spaces[8].mark_by(testPlayer);
    game.checkWinner();
    expect(game.winner).to.equal(testPlayer);
  });
  it("should return the player who won when 3 are in a row diagonally", function() {
    var game = new Game();
    game.initialize();
    var board = game.board;
    var testPlayer = game.players[0];
    board.spaces[6].mark_by(testPlayer);
    board.spaces[4].mark_by(testPlayer);
    board.spaces[2].mark_by(testPlayer);
    game.checkWinner();
    expect(game.winner).to.equal(testPlayer);
  });
});
