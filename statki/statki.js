/**
 * Created by Nat on 2016-09-06.
var randomLoc = Math.floor(Math.random() * 5);  //math.random to losowo generowana liczba z zakresu 0 - 1. Przy przemnozeniu jej przez 5 zakres zwieksza sie do 4.999... . Math.floor to liczba w postaci calkowitej a nie w ulamku
var location1 = randomLoc; //zmienne do przechowywania pozycji okretu - losowo wybrane polozenie i 2 pola obok
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess; //zmienna do przechowywania pola wskazanego przez uzytkownika        |
//                                                                              |
var hits = 0; //zmienna do przechowywania liczby trafien                         =====> proby zatopienia okretu   
//                                                                              |
var guesses = 0; //zmienna do przechowywania liczby prob                        |

var isSunk = false; //zmienna do przechowywania informacji czy zatopilam okret

while (isSunk == false) {   //petla, ktora pobiera pole do sprawdzenia
    guess = prompt("Fire! (choose a number between 0 and 6");   //przy zamknieciu kna lub gdy nic nie zostanie wpisane petla zwraca NULL
    if (guess < 0 || guess > 6) {   // sprawdzenie czy uzytkownik podal liczbe z zakresu 0-6
        alert("Put yourself into gear soldier! The order was NUMBERS FROM 0 TO 6!");    //komunikat 'nieprawidlowa liczba zostala podana
    }
    else {
        guess = guess + 1;  //podana prawidlowa liczba. dodaje 1 zeby liczba prob sie zgadzala 

        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;    //inkrementacja = uzytkownik trafil
            if (hits == 3) {    //zatopienie okretu
                isSunk = true;
                alert("Well done soldier, mission accomplished!");
            }
        }
    }
}

var stats = "It took you" + guesses + "goes to sunk the ship" + "the score is: " + (3 / guesses) + ".";

alert (stats);*/

var randomLoc = Math.floor(Math.random() * 5);  //math.random to losowo generowana liczba z zakresu 0 - 1. Przy przemnozeniu jej przez 5 zakres zwieksza sie do 4.999... . Math.floor to liczba w postaci calkowitej a nie w ulamku
var location1 = randomLoc; //zmienne do przechowywania pozycji okretu - losowo wybrane polozenie i 2 pola obok
var location2 = location1+1;
var location3 = location2+1;
var guess; //zmienna do przechowywania pola wskazanego przez uzytkownika        |
//                                                                              |
var hits = 0; //zmienna do przechowywania liczby trafien                         =====> proby zatopienia okretu
//                                                                              |
var guesses = 0; //zmienna do przechowywania liczby prob                        |
var isSunk = false; //zmienna do przechowywania informacji czy zatopilam okret
var chances = 0;

while (isSunk == false) {   //petla, ktora pobiera pole do sprawdzenia
    if( guesses > 20 || guess == 'stop' ){ alert('Abandon the ship! We are out of torpedoes! The enemy won...'); break; }

    guess = prompt("Fire! (choose a number between 0 and 6");   //przy zamknieciu kna lub gdy nic nie zostanie wpisane petla zwraca NULL
    if (guess < 0 || guess > 6) {   // sprawdzenie czy uzytkownik podal liczbe z zakresu 0-6
        alert("Put yourself into gear soldier! The order was NUMBERS FROM 0 TO 6!");    //komunikat 'nieprawidlowa liczba zostala podana
    } else {
        if( guess == location1 ){ location1 = false; hits++; }
        if( guess == location2 ){ location2 = false; hits++; }
        if( guess == location3 ){ location3 = false; hits++; }
        if (hits == 3) {    //zatopienie okretu
            isSunk = true;
            var stats = "It took you " + guesses + " goes to sunk the ship " + " the score is: " + (3/guesses) + ".";
            alert("Well done soldier, mission accomplished!" + "\n" + stats );
            break;
        }
    }
    console.warn('Game state:');
    console.log( 'Guesses: ', guesses++, 'Guess: ', guess, 'isSunk: ', isSunk, 'Chances: ', chances, 'L1: ', location1, 'L2: ', location2, 'L3: ', location3, 'Hits: ', hits );
}