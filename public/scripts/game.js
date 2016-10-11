function Game () {
  this.stock = new Deck(false);
  this.tray  = new Deck(true);

  this.foundation = new Foundation();

  this.board = new Board();

  this.board.setUp( this.stock.deal(28) );
}

Game.prototype.dealToTray = function() {
  // this.tray.getTopThree().forEach( function (card, i, array) { card.removeJQ(); } );
  // newCards = this.stock.deal(3);
  // newCards.forEach( function (card, i, array) { card.addJQ(); } );
  return this.tray.addCards( this.stock.deal(3) );
};

Game.prototype.replenishStock = function() {
  return this.stock.addCards( this.tray.deal( this.tray.cards.length ));
};

Game.prototype.moveToBoard = function(endColumn) {
  if (this.tray.cards.length == 0) { return false; }

  options = {
    card:         this.tray.cards.pop(),
    endColumn:    endColumn
  };

  if ( rules.isValidMove( options ) ) {
    this.board.move( options );
    return true;
  } else {
    this.tray.cards.push( options.card );
    return false;
  }
};

Game.prototype.moveOnBoard = function(startRow, startColumn, endColumn) {
  options = {
    startColumn:  startColumn,
    startRow:     startRow,
    endColumn:    endColumn
  };

  if ( rules.canMoveOnBoard( options ) ) {
    this.board.move( options );
    return true;
  };

  return false;
};

Game.prototype.moveToFoundation = function(startRow, startColumn, foundation) {
  options = {
    startColumn:  options.startColumn,
  };

  if ( rules.canMoveToFoundation(options) ) {
    foundation.addCard( board.removeCard(column) );
  };
};

game = new Game();

//  test functions


// Game.prototype.verifyIntegrity = function() {
//   flag = true;

//   for (var i = deck.cards.length - 1; i >= 0; i--) {
//     if (
//           (deck.cards[i].suit != originalDeck.cards[i].suit) &&
//           (deck.cards[i].number != originalDeck.cards[i].number) ) {
//      flag = false;
//     }
//   };

//   return flag;
// };

// originalDeck = deck;
