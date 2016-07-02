<?php

// Tworzymy zmienną dla imienia i nazwiska
$name = $_POST['name'];

// Tworzymy zmienną dla adresu email
$email = $_POST['email'];

// Tworzymy zmienną dla numeru telefonu
$nrtel = $_POST['nrtel'];

// Tworzymy zmienną dla wiadomości
$message = $_POST['message'];

// Podajesz adres email na który chcesz otrzymać wiadomość
$dokogo = "greniu84@wp.pl";

// Podajesz tytuł jaki ma mieć ta wiadomość email
$tytul = "Zapytanie z www.grzegorzbelter.pl";

// Przygotowujesz treść wiadomości
$wiadomosc = "";
$wiadomosc .= "Imię i nazwisko: " . $name . "\n";
$wiadomosc .= "Email: " . $email . "\n";
$wiadomosc .= "Numer telefonu: " . $nrtel . "\n";
$wiadomosc .= "Wiadomość: " . $message . "\n";

// Dodajemy UTF-8 do naglowka naszej wiadomości
$naglowek = "";
$naglowek .= "Od:" . $email . " \n";
$naglowek .= "Content-Type:text/plain;charset=utf-8";

// Wysyłamy wiadomość
$sukces = mail($dokogo, $tytul, $wiadomosc, $naglowek);

// Przekierowywujemy na potwierdzenie
if ($sukces){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=http://grzegorzbelter.pl/#kontakt\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=http://grzegorzbelter.pl/#kontakt\">";
}
?>	