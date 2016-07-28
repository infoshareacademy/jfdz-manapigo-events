/**
 * Created by piotrandrzejewski on 28.07.2016.
 */
/**
 * Created by piotrandrzejewski on 18.07.2016.
 */


$(document).ready(function(){
    $('.menu-btn').click(function(){
        $(this).toggleClass('open') ;

        if($('.menu-btn').hasClass('open'))
        {
            $('.menu-conteiner').css('-webkit-transform','translate(0,0)');
            $('.canvas-viev').addClass('canvas-active')

        }
        else
        {   $('.canvas-viev').removeClass('canvas-active');
            $('.menu-conteiner').css('-webkit-transform','translate(100%,0)');}


    });
    

    /*funkcje odpowiadajace za slajder */

    $('.slider').each(function() {              // Dla każdej grupy slajdów.
        var $this   = $(this);                    // Pobranie bieżącej grupy slajdów.
        var $group  = $this.find('.slide-group'); // Pobranie elementu o klasie slide-group (kontener).
        var $slides = $this.find('.slide');       // Obiekt jQuery przechowujący wszystkie slajdy.
        var buttonArray  = [];                    // Utworzenie tablicy na przyciski nawigacyjne.
        var currentIndex = 0;                     // Numer indeksu bieżącego slajdu.
        var timeout;                              // Zmienna do przechowywania licznika czasu.

        function move(newIndex) {          // Przejście ze starego do nowego slajdu.
            var animateLeft, slideLeft;      // Deklaracja zmiennych.

            advance();                       // Podczas przejścia slajdów należy ponownie wywołać funkcję advance().

            // Jeżeli wyświetlany jest bieżący slajd lub odtwarzana jest animacja slajdu, to nie podejmujemy żadnych działań.
            if ($group.is(':animated') || currentIndex === newIndex) {
                return;
            }

            buttonArray[currentIndex].removeClass('active'); // Usunięcie klasy z elementu.
            buttonArray[newIndex].addClass('active');        // Dodanie klasy do nowego elementu.

            if (newIndex > currentIndex) {   // Jeżeli nowy element > bieżący.
                slideLeft = '100%';            // Umieszczenie nowego slajdu po prawej stronie.
                animateLeft = '-100%';         // Animacja bieżącej grupy w lewą stronę.
            } else {                         // W przeciwnym razie.
                slideLeft = '-100%';           // Umieszczenie nowego slajdu po lewej stronie.
                animateLeft = '100%';          // Animacja bieżącej grupy w prawą stronę.
            }
            // Umieszczenie nowego slajdu po lewej (jeśli ma mniejszą wartość indeksu niż bieżący) lub prawej (jeśli ma tę wartość większą).
            $slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );

            $group.animate( {left: animateLeft}, function() {    // Animacja slajdu
                $slides.eq(currentIndex).css( {display: 'none'} ); // i ukrycie poprzedniego.
                $slides.eq(newIndex).css( {left: 0} ); // Ustawienie położenia dla nowego slajdu.
                $group.css( {left: 0} );               // Ustawienie położenia grupy slajdów.
                currentIndex = newIndex;               // Ustawienie zmiennej currentIndex wartości nowego obrazu.
            });
        }

        function advance() {                     // Ustawienie czasu wyświetlania slajdu.
            clearTimeout(timeout);                 // Wyzerowanie licznika czasu w zmiennej timeout.
            timeout = setTimeout(function() {      // Ustawienie nowego licznika.
                if (currentIndex < ($slides.length - 1)) { // Jeżeli to nie jest ostatni slajd.
                    move(currentIndex + 1);            // Przejście do następnego slajdu.
                } else {                             // W przeciwnym razie.
                    move(0);                           // Przejście do pierwszego slajdu.
                }
            }, 4000);                              // Czas oczekiwania wyrażony w milisekundach
        }

        $.each($slides, function(index) {
            // Utworzenie elementu <button> dla przycisku.
            var $button = $('<button type="button" class="slide-btn">&bull;</button>');
            if (index === currentIndex) {    // Jeżeli indeks wskazuje na element bieżący.
                $button.addClass('active');    // Dodanie klasy active.
            }
            $button.on('click', function() { // Utworzenie procedury obsługi zdarzeń dla przycisku.
                move(index);                   // Wywołanie funkcji move().
            }).appendTo('.slide-buttons');   // Dodanie do elementu zawierającego przyciski.
            buttonArray.push($button);       // Dodanie przycisków do tablicy.
        });

        advance();                          // Skrypt jest już skonfigurowany, można wywołać funkcję advance().


    });


});


