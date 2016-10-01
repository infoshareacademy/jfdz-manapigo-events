var images = 20;
var cards = [];
var clickedCard = [];
var canClick = true;
var movesCount = 0;
var CardPair = 0;

createGame = function() {

    cards = [];
    clickedCard = [];
    canClick = true;
    movesCount = 0;
    CardPair = 0;

    var $gameBoard = $('#gameBoard').empty();

    for (var i = 0; i < images; i++) {
        cards.push(Math.floor(i/2));
    }

    for (i = images-1; i > 0; i--) {
        var swap = Math.floor(Math.random()*i);
        var tmp = cards[i];
        cards[i] = cards[swap];
        cards[swap] = tmp;
    }

    for (i = 0; i < images; i++) {
        var $cell = $('<div class="cell"></div>');
        var $tile = $('<div class="tile"><span class="avers"></span><span class="revers"></span></div>');
        $tile.addClass('card-type-'+cards[i]);
        $tile.data('Type', cards[i]);
        $tile.data('index', i);

        $cell.append($tile);
        $gameBoard.append($cell);
    }

    $gameBoard.find('.cell .tile').on('click', function() {
        CardsClicked($(this))
    });

};

moves = function(moves) {
    $('#gameMoves').html(moves);
};

CardsClicked = function(element) {

    var firstCard,secondCard;

    if (canClick) {

        firstCard = clickedCard[0];

        if (!clickedCard.length || (element.data('index') != firstCard.data('index'))) {
            clickedCard.push(element);
            element.addClass('show');
        }

        if (clickedCard.length >= 2) {

             secondCard = clickedCard[1];

            canClick = false;

            if (firstCard.data('Type') === secondCard.data('Type')) {
                setTimeout(function() {
                    deleteCard()}, 400);
            }
            else {
                setTimeout(function() {
                    resetCard()}, 400);
            }

            movesCount++;
            moves(movesCount);
        }
    }
};

 resetCard = function() {

     var firsCard = clickedCard[0];
     var secondCard = clickedCard[1];

    firsCard.removeClass('show');
    secondCard.removeClass('show');

     clickedCard = [];
     canClick = true;
};




 deleteCard = function() {
     var firsCard = clickedCard[0];
     var secondCard = clickedCard[1];

    firsCard.fadeOut(function() {
        $(this).remove();
    });
    secondCard.fadeOut(function() {
        $(this).remove();
    });

     CardPair++;
     clickedCard = [];
    canClick = true;

     if (CardPair >= images / 2) {
         alert("Gratulacje wygrales !");
         window.location.href="http://namapigo.jfdz2.is-academy.pl";
     }

};



$(function() {
    createGame();
});