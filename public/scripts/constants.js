constants = {
  SUITS : [
    "Diamonds",
    "Clubs",
    "Hearts",
    "Spades"
  ],
  DEBUG: true
};



function getCardsForOptions(options) {
  card        = options.card;
  startColumn = options.startColumn;
  startRow    = options.startRow;
  endColumn   = options.endColumn;

  if ( endColumn == null ) { return false; } // need to get the card it's going onto

  if ( startColumn == null && startRow == null ) {
    return [game.board.getLastCard(endColumn), card]
  } else {
    cards = game.board.getCards(options);
    cards.unshift(game.board.getLastCard(endColumn));
    return cards;
  }
}
