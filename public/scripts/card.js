function Card (options) {
    // private functions
    function buildJQ (that) {
        item = $("<p></p>");
        item.text(that.suit + ", " + that.number);
        item.addClass("card");

        return item;
    }

    // Attributes
    this.suit     = options.suit;
    this.number   = options.number;
    this.visible  = true;

    this.JQ = buildJQ(this);

    return this;
}

Card.prototype.isKing = function() {
    return this.number == 13;
};

Card.prototype.isAce = function() {
    return this.number == 1;
};

Card.prototype.isRed = function() {
    return (this.suit == "Diamonds" || this.suit == "Hearts");
};

Card.prototype.isBlack = function() {
    return (this.suit == "Clubs" || this.suit == "Spades");
};


Card.prototype.removeJQ = function() {
    this.JQ.remove();
};

Card.prototype.addJQ = function() {
    $('body').append(this.JQ);
};
