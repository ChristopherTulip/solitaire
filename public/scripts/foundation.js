function Foundation () {

}

Foundation.prototype.diamonds = [];
Foundation.prototype.clubs    = [];
Foundation.prototype.hearts   = [];
Foundation.prototype.spades   = [];

Foundation.prototype.addCard = function(card) {
  switch (card.suit) {
    case SUITS[0]:
      this.diamonds.push(card);
      break;
    case SUITS[1]:
      this.clubs.push(card);
      break;
    case SUITS[2]:
      this.hearts.push(card);
      break;
    case SUITS[3]:
      this.clubs.push(card);
      break;
  };
};

Foundation.prototype.topCard = function(suit) {
  switch (card.suit) {
    case SUITS[0]:
      return this.diamonds[ this.diamonds.length - 1 ];
      break;
    case SUITS[1]:
      return this.clubs[ this.clubs.length - 1 ];
      break;
    case SUITS[2]:
      return this.hearts[ this.hearts.length - 1 ];
      break;
    case SUITS[3]:
      return this.spades[ this.spades.length - 1 ];
      break;
  };
};

Foundation.prototype.hasWon = function() {

  if (this.diamonds.length == 13 &&
      this.clubs.length == 13 &&
      this.hearts.length == 13 &&
      this.spades.length == 13) {
    return true;
  }

  return false;
};
