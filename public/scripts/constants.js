constants = {
  SUITS : [
    "Diamonds",
    "Clubs",
    "Hearts",
    "Spades"
  ],
  MOVES: {
    TRAY: 0,
    BOARD: 1,
    FOUNDATION: 2
  },
  DEBUG: true
};

function getCardsForOptions(options) {
  card        = options.card;
  startColumn = options.startColumn;
  startRow    = options.startRow;
  endColumn   = options.endColumn;

  if ( endColumn == null ) { return false; } // need to get the card it's going onto

  if ( startColumn == null && startRow == null ) {
    return [game.board.getTopCard(endColumn), card]
  } else {
    cards = game.board.getCards(options);
    cards.unshift(game.board.getTopCard(endColumn));
    return cards;
  }
}
