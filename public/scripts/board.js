function Board () {
  var that = this;

  var columns = [
    [], // first column
    [], // second column
    [], // third column
    [], // fourth column
    [], // fifth column
    [], // sixth colmun
    []  // seventh column
  ];

  var revealTop = function revealTop () {
    columns.forEach( function (column, i, array) {
      that.getTopCard(column).visible = true;
    });
  };

  this.getTopCard = function getTopCard (column) {
    return columns[ column ][ columns[ column ].length - 1 ];
  };

  this.getCard = function getCard (column, row) {
    return columns[ column ][ row ];
  };

  this.getCards = function getCards (options) {
    startColumn   = options.startColumn;
    startRow      = options.startRow;
    getTopCard   = options.getTopCard;

    if (startRow == null) { return columns[startColumn]; };
    if (getTopCard != null) { return this.getTopCard(startColumn); };

    returnData = [];

    for (var row = columns[startColumn].length - 1; row >= startRow; row--) {
      returnData.push(columns[startColumn][row]);
    };

    return returnData;
  };

  this.setUp = function setUp (cards) {
    for (var column = 0; column < columns.length; column++) {
      for (var row = column; row >= 0; row--) {
        options = {
          card      : cards.pop(),
          endColumn : column
        }

        this.move(options)
      };
    };
  }

  this.move = function move (options) {
    card        = options.card;
    startColumn = options.startColumn;
    startRow    = options.startRow;
    endColumn   = options.endColumn;

    if (endColumn == null) { return; } // invalid case

    if (startColumn != null && startRow != null) {
      toMove = [];

      for (var row = columns[startColumn].length - 1; row >= startRow; row--) {
        toMove.push( columns[startColumn][row].pop() );
      };

      for (var i = toMove.length - 1; i >= 0; i--) {
        columns[endColumn].push( toMove[i].pop() );
      };
    } else { // new card entry, no previous spot on the grid
      columns[endColumn].push( card );
    }
  };

  this.removeCard = function (column) {
    return this.getCards({startColumn: column}).pop();
  }

  this.isCardTop = function () {
    //todo: write function;

    false;
  }
};
