function Rules () {

  var colorCheck = function colorCheck (card, nextCard) {
    if (constants.DEBUG) {
      console.log("colorCheck ----------------");
      console.log("card 1 isRed : " + card.isRed());
      console.log("card 2 isRed : " + nextCard.isRed());
    }

    if ( card.isRed() && nextCard.isRed() ) { return false; }
    if ( card.isBlack() && nextCard.isBlack() ) { return false; }

    return true;
  }

  var numberCheck = function numberCheck (card, nextCard) {
    if (constants.DEBUG) {
      console.log("NUMBER CHECK ----------------");
      console.log("card 1 number : " + card.number);
      console.log("card 2 number : " + nextCard.number);
    }

    if ( card.number == ( nextCard.number - 1 ) ) { return true; }

    return false;
  }

  var openSpaceCheck = function openSpaceCheck (cards) {
    if (constants.DEBUG) {
      console.log("OPEN SPACE CHECK ----------------");
      console.log("card 0 isNull : " + cards[0]);
      console.log("card 1 isKing : " + cards[1].isKing());
    }

    if ( cards[0] == null ) { return cards[1].isKing(); }

    return true;
  }

  var inSquence = function inSquence (cards) {
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

  this.isValidMove = function validMove(options) {
    card        = options.card;
    startColumn = options.startColumn;
    startRow    = options.startRow;
    endColumn   = options.endColumn;
    // TODO: if open space check do open space check

    cards = getCardsForOptions(options);

    if ( !openSpaceCheck(cards) || !inSquence(cards) ) { return false; }

    return true;
  }

}

rules = new Rules();
