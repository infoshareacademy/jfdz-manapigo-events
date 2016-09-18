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

var randomLoc = Math.round(Math.random() * 4);  //math.random to losowo generowana liczba z zakresu 0 - 1. Przy przemnozeniu jej przez 5 zakres zwieksza sie do 4.999... . Math.floor to liczba w postaci calkowitej a nie w ulamku
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
    if( guesses > 10 || guess == 'stop' ){ alert('Abandon the ship! We are out of torpedoes! The enemy won...'); break; }   // 10 to liczba prob, moze byc modyfikowana

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

/*=========================================================================================================*/
/**
 * Created by Marek on 2016-09-16 */

/*


function losowanie_pion_poziom()      // losowanie położenia statku: pion lub poziom
{
    var pp = Math.floor((Math.random() * 2));
    return pp;
}

function czworka()          //4-ro masztowiec
{
    var kolumny,wiersze,pp;
    pp=losowanie_pion_poziom();
                            //ustalanie współrzędnych statku
    if(pp == 1)             // umiejscowienie W PIONIE
    {
        kolumny=Math.floor((Math.random() * 10) + 1);//((rand()%10)+1) - losowanie położenia pierwszego masztu na osi X
        wiersze=Math.floor((Math.random() * 7) + 4);//((rand()%7)+4) - losowanie położenia pierwszego masztu na osi Y
        for(var i=0;i<4;i++)
        {
            statki[wiersze][kolumny]=1;         //TWORZENIE STATKU: każda "1-ka" to osobny maszt; statek jest otoczony
            statki[wiersze][kolumny-1]=2;       //"2-kami" (naokoło)
            statki[wiersze][kolumny+1]=2;
            if(i == 0)
            {
                statki[wiersze+1][kolumny]=2;
                statki[wiersze+1][kolumny+1]=2;
                statki[wiersze+1][kolumny-1]=2;
            }
            else if(i == 3)
            {
                statki[wiersze-1][kolumny]=2;
                statki[wiersze-1][kolumny+1]=2;
                statki[wiersze-1][kolumny-1]=2;
            }
            wiersze=wiersze-1;
        }
    }
    else if(pp == 0)        // umiejscowienie w POZIOMIE
    {
        kolumny=Math.floor((Math.random() * 7) + 4);//((rand()%7)+4);
        wiersze=Math.floor((Math.random() * 10) + 1);//((rand()%10)+1);
        for(var i=0;i<4;i++)
        {
            statki[wiersze][kolumny]=1;             //TWORZENIE STATKU
            statki[wiersze-1][kolumny]=2;
            statki[wiersze+1][kolumny]=2;
            if(i == 0)
            {
                statki[wiersze][kolumny+1]=2;
                statki[wiersze-1][kolumny+1]=2;
                statki[wiersze+1][kolumny+1]=2;
            }
            else if(i == 3)
            {
                statki[wiersze][kolumny-1]=2;
                statki[wiersze-1][kolumny-1]=2;
                statki[wiersze+1][kolumny-1]=2;
            }
            kolumny=kolumny-1;
        }
    }
}

function trojka()    //3-masztowiec
{
    var kolumny,wiersze,pp;
    pp=losowanie_pion_poziom();
                        //ustalanie współrzędnych statku
    if(pp == 1)         // umiejscowienie W PIONIE
    {
        do
        {
            kolumny=Math.floor((Math.random() * 10) + 1);//((rand()%10)+1);
            wiersze=Math.floor((Math.random() * 8) + 3);//((rand()%8)+3);
        }                                               //pętla sprawdza czy wylosowane położenie masztów nie wypada w miejscu
                                                        //już istniejących masztów innych statków("1") lub bedzpośrednio w ich sąsiedztwie ("2")
        while(statki[wiersze][kolumny] == 1 || statki[wiersze][kolumny] == 2 || statki[wiersze-1][kolumny] == 1 || statki[wiersze-1][kolumny] == 2 || statki[wiersze-2][kolumny] == 1 || statki[wiersze-2][kolumny] == 2);
        for(var i=0;i<3;i++)
        {
            statki[wiersze][kolumny]=1;//TWORZENIE STATKU
            statki[wiersze][kolumny-1]=2;
            statki[wiersze][kolumny+1]=2;
            if(i == 0)
            {
                statki[wiersze+1][kolumny]=2;
                statki[wiersze+1][kolumny+1]=2;
                statki[wiersze+1][kolumny-1]=2;
            }
            else if(i == 2)
            {
                statki[wiersze-1][kolumny]=2;
                statki[wiersze-1][kolumny+1]=2;
                statki[wiersze-1][kolumny-1]=2;
            }
            wiersze=wiersze-1;
        }
    }
    else if(pp == 0)                 // umiejscowienie w POZIOMIE
    {
        do
        {
            kolumny=Math.floor((Math.random() * 8) + 3);//((rand()%8)+3);
            wiersze=Math.floor((Math.random() * 10) + 1);//((rand()%10)+1);
        }
        while(statki[wiersze][kolumny] == 1 || statki[wiersze][kolumny] == 2 || statki[wiersze][kolumny-1] == 1 || statki[wiersze][kolumny-1] == 2 || statki[wiersze][kolumny-2] == 1 || statki[wiersze][kolumny-2] == 2);

        for(var i=0;i<3;i++)
        {
            statki[wiersze][kolumny]=1;//TWORZENIE STATKU
            statki[wiersze-1][kolumny]=2;
            statki[wiersze+1][kolumny]=2;
            if(i == 0)
            {
                statki[wiersze][kolumny+1]=2;
                statki[wiersze-1][kolumny+1]=2;
                statki[wiersze+1][kolumny+1]=2;
            }
            else if(i == 2)
            {
                statki[wiersze][kolumny-1]=2;
                statki[wiersze-1][kolumny-1]=2;
                statki[wiersze+1][kolumny-1]=2;
            }
            kolumny=kolumny-1;
        }
    }
}


function dwojka()   //2-masztowiec
{
    var kolumny,wiersze,pp;
    pp=losowanie_pion_poziom();
                        //ustalanie współrzędnych statku
    if(pp == 1)         // umiejscowienie W PIONIE
    {
        do
        {
            kolumny=Math.floor((Math.random() * 10) + 1);//((rand()%10)+1);
            wiersze=Math.floor((Math.random() * 9) + 2);//((rand()%9)+2);
        }
        while(statki[wiersze][kolumny] == 1 || statki[wiersze][kolumny] == 2 || statki[wiersze-1][kolumny] == 1 || statki[wiersze-1][kolumny] == 2);

        for(var i=0;i<2;i++)
        {
            statki[wiersze][kolumny]=1;             //TWORZENIE STATKU
            statki[wiersze][kolumny-1]=2;
            statki[wiersze][kolumny+1]=2;
            if(i == 0)
            {
                statki[wiersze+1][kolumny]=2;
                statki[wiersze+1][kolumny+1]=2;
                statki[wiersze+1][kolumny-1]=2;
            }
            else if(i == 1)
            {
                statki[wiersze-1][kolumny]=2;
                statki[wiersze-1][kolumny+1]=2;
                statki[wiersze-1][kolumny-1]=2;
            }
            wiersze=wiersze-1;
        }
    }
    else if(pp == 0)            // umiejscowienie W POZIOMIE
    {
        do
        {
            kolumny=Math.floor((Math.random() * 9) + 2);//((rand()%9)+2);
            wiersze=Math.floor((Math.random() * 10) + 1);//((rand()%10)+1);
        }
        while(statki[wiersze][kolumny] == 1 || statki[wiersze][kolumny] == 2 || statki[wiersze][kolumny-1] == 1 || statki[wiersze][kolumny-1] == 2);

        for(var i=0;i<2;i++)
        {
            statki[wiersze][kolumny]=1;         //TWORZENIE STATKU
            statki[wiersze-1][kolumny]=2;
            statki[wiersze+1][kolumny]=2;
            if(i == 0)
            {
                statki[wiersze][kolumny+1]=2;
                statki[wiersze-1][kolumny+1]=2;
                statki[wiersze+1][kolumny+1]=2;
            }
            else if(i == 1)
            {
                statki[wiersze][kolumny-1]=2;
                statki[wiersze-1][kolumny-1]=2;
                statki[wiersze+1][kolumny-1]=2;
            }
            kolumny=kolumny-1;
        }
    }
}

function jedynka()  //1-masztowiec
{
    var kolumny,wiersze;
                        //ustalanie współrzędnych statku
    do
    {
        kolumny=Math.floor((Math.random() * 10) + 1);//((rand()%10)+1);
        wiersze=Math.floor((Math.random() * 10) + 1);//((rand()%10)+1);
    }
    while(statki[wiersze][kolumny] == 1 || statki[wiersze][kolumny] == 2);

    statki[wiersze][kolumny]=1;     //TWORZENIE STATKU
    statki[wiersze-1][kolumny]=2;
    statki[wiersze-1][kolumny-1]=2;
    statki[wiersze-1][kolumny+1]=2;
    statki[wiersze+1][kolumny-1]=2;
    statki[wiersze+1][kolumny+1]=2;
    statki[wiersze+1][kolumny]=2;
    statki[wiersze][kolumny-1]=2;
    statki[wiersze][kolumny+1]=2;

}

var statki = [];    // Deklaracja tablicy 2-wymiarowej, każdy wymiar posiada 12 pól (zmienna globalna) dla położenia statków
for(var i=0;i<12;i++)
    statki[i]=[0,0,0,0,0,0,0,0,0,0,0,0];

czworka(statki); // umiejscowienie w tablicy 4-masztowca (1 szt.)
for(var i=0;i<2;i++)
    trojka(statki); // umiejscowienie 3-masztowca (2 szt.)
for(var i=0;i<3;i++)
    dwojka(statki); // umiejscowienie 2-masztowca (3 szt.)
for(var i=0;i<4;i++)
    jedynka(statki);    // umiejscowienie 1-masztowca (4 szt.)

 */