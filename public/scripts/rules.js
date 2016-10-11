function Rules () {

  var colorCheck = function (card, nextCard) {
    if (constants.DEBUG) {
      console.log("colorCheck ----------------");
      console.log("card 1 isRed : " + card.isRed());
      console.log("card 2 isRed : " + nextCard.isRed());
    }

    if ( card.isRed() && nextCard.isRed() ) { return false; }
    if ( card.isBlack() && nextCard.isBlack() ) { return false; }

    return true;
  }

  var numberCheck = function (card, nextCard) {
    if (constants.DEBUG) {
      console.log("NUMBER CHECK ----------------");
      console.log("card 1 number : " + card.number);
      console.log("card 2 number : " + nextCard.number);
    }

    if ( card.isOneGreater( nextCard ) ) { return true; }

    return false;
  }

  var openSpaceCheck = function (cards) {
    if (constants.DEBUG) {
      console.log("OPEN SPACE CHECK ----------------");
      console.log("card 0 isNull : " + cards[0]);
      console.log("card 1 isKing : " + cards[1].isKing());
    }

    if ( cards[0] == null ) { return cards[1].isKing(); }

    return true;
  }

  var inSquence = function (cards) {
    flag = true;

    for (var row = cards.length - 1; row >= 0; row--) {
      if (constants.DEBUG) {
          console.log("IN SEQUENCE ----------------");
          console.log("numberCheck : " + numberCheck(cards[row - 1], cards[row]));
          console.log("colorCheck : " + colorCheck(cards[row - 1], cards[row]));
      }

      if (cards[row - 1] != null) {
        flag = numberCheck(cards[row - 1], cards[row]) && colorCheck(cards[row - 1], cards[row])

        if (flag == false) { return false }
      }
    };

    return flag;
  };

  var isTopCard = function () {
    // this feels like it should live in the Card model... want to revisit.
    // need to handle case coming straight from tray.

  };

  this.canCardMove = function (options) {
    card = options.card;
    startColumn = options.startColumn;

    // is it top in the tray?
    if (game.tray.getTopCard() == card) {
      return true;
    }

    // is it top on the Board?
    if (game.board.getTopCard(startColumn) == card) {
      return true;
    }

    // is it top in the foundation?
    if (game.foundation.getTopCard(card.suit) == card) {
      return true;
    }

    // is it in squence?

    return false;
  }

  this.canMoveOnBoard = function (options) {
    card        = options.card;
    startColumn = options.startColumn;
    startRow    = options.startRow;
    endColumn   = options.endColumn;

    cards = getCardsForOptions(options);

    // can the cards move?

    // is it the right space?
    if ( !openSpaceCheck(cards) || !inSquence(cards) ) { return false; }

    return true;
  };

  this.canMoveToFoundation = function canMoveToFoundation (options) {
    card = options.card

    // can the card move?
    this.canCardMove(card);

    // is it the right card?
    if ( game.foundation.topCard(card.suit) == null ) { return card.isAce(); };
    if ( game.foundation.topCard(card.suit).isOneSmaller(card) ) { return true; };

    //is the card a top
    if ( !isTopCard(card) ) { return false; };

    return false;
  };

}

Rules.prototype.isValidMove = function(options) {
  switch (options.moveType) {
    case constants.MOVES.TRAY:
      break;
    case constants.MOVES.BOARD:
       this.canMoveOnBoard(options)
      break;
    case constants.MOVES.FOUNDATION:
        this.canMoveToFoundation(options)
      break;
  }
};

rules = new Rules();
