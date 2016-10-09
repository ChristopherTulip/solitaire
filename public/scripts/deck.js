function Deck(empty) {
    // private variables
    var that = this;

    //private functions
    var generateCards = function generateCards () {


        for (var i = constants.SUITS.length - 1; i >= 0; i--) {
            for (var j = 13; j >= 1; j--) {
                options = {
                    suit    : constants.SUITS[i],
                    number  : j
                };

                card = new Card( options );
                that.cards.push( card );
            };
        };
    };

    var shuffle = function shuffle () {
        for (var i = that.cards.length - 1; i >= 0; i--) {
            j = Math.floor ( Math.random() * (i + 1) );

            temp = that.cards[i];
            that.cards[i] = that.cards[j];
            that.cards[j] = temp;
        };
    };

    // public variables
    this.cards = [];

    // init
    if (!empty) {
        generateCards();
        shuffle();
    }
}

// deals cards from deck
Deck.prototype.deal = function(count) {
    returnSet = [];

    if (count > this.cards.length) {
        console.log("count to deal exceeds deck size");

        count = this.cards.length;
    }

    for (var i = count - 1; i >= 0; i--) {
        returnSet.push(this.cards[i])
        this.cards.splice(i, 1);
    };

    return returnSet;
};

Deck.prototype.addCards = function(cards) {
    for (var i = cards.length - 1; i >= 0; i--) {
        this.cards.push(cards[i]);
    };
};

Deck.prototype.getTopCard = function() {
  return this.cards[ this.cards.length - 1 ];
};

Deck.prototype.getTopThree = function() {
// there is a bug in here waiting to happen!
  if ( !this.hasCards() ) { return []; }

  return  [ this.cards[ this.cards.length - 1 ],
            this.cards[ this.cards.length - 2 ],
            this.cards[ this.cards.length - 3 ]  ];
};

Deck.prototype.addCards = function(cards) {
  for (var i = cards.length - 1; i >= 0; i--) {
    this.cards.push(cards[i]);
  };

  return cards;
};

Deck.prototype.hasCards = function() {
    return (this.cards.length != 0);
};
