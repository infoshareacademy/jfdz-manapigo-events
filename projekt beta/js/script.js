 /**
 * Created by Nat on 2016-08-17.
 */
window.onload = function() {
    var d = new Date();
    var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var month = d.getMonth();   //0 jan - 11 dec !!!
    var year = d.getFullYear(); 
    var first_date = month_name[month] + " " + 1 + " " + year;
    var tmp = new Date(first_date).toDateString();
    var first_day = tmp.substring(0, 3);    //Mon
    var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var day_no = day_name.indexOf(first_day);   //1
    var days = new Date(year, month+1, 0).getDate();    //30
    var calendar = get_calendar(day_no, days);
    document.getElementById("calendar-month-year").innerHTML = month_name[month]+" "+year;
    document.getElementById("calendar-dates").appendChild(calendar);
};

function get_calendar(day_no, days) {
    var table = document.createElement('table');
    var tr = document.createElement('tr');

    //row for the day letters
    for(var c=0; c<=6; c++) {
        var td = document.createElement('td');
        td.innerHTML = "SMTWTFS"[c];
        tr.appendChild(td);
    }

    table.appendChild(tr);

    //create 2nd row
    tr = document.createElement('tr');
    var c;
    for(c=0; c<=6; c++) {
        if(c == day_no) {
            break;
        }

        var td = document.createElement('td');
        td.innerHTML = "";
        tr.appendChild(td);
    }

    var count = 1;
    for(; c<=6; c++) {

        var td = document.createElement('td');

        td.addEventListener('click', function() {
            window.open('http://goingapp.pl/calendar/13/trojmiasto');
        });

        td.innerHTML = count;

        count++;
        tr.appendChild(td);
    }

    table.appendChild(tr);

    //rest of the date rows
    for(var r=3; r<=7; r++) {
        tr = document.createElement('tr');
        for(var c=0; c<=6; c++) {
            td.addEventListener('click', function() {
                window.open('http://goingapp.pl/calendar/13/trojmiasto');
            });

            if(count > days){
                table.appendChild(tr);
                return table;
            }

            var td = document.createElement('td');
            td.innerHTML = count;
            count++;
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    return table;
}

 function check_button() {

     var btn_antyrobot = document.getElementById('robots').checked;
     var btn_send = document.getElementById('btn-send');
     var btn_leftbot = document.getElementById('robot').checked;
     var btn_rightbot = document.getElementById('rob').checked;

     var checkedCheckboxes = $('input[type=checkbox]:checked');
     btn_send.disabled = !(checkedCheckboxes.length === 1 && checkedCheckboxes.attr('id') === 'robots');



 }

  $('form').on('submit', function (event) {
     event.preventDefault();
      alert("Thank you for your message, we will be in touch shortly!");
      $(':input').not(':button, :submit, :reset, :hidden')
          .val('')
          .removeAttr('checked')
          .removeAttr('selected');
  })



 var language_array =
 {
     'en' : {
         'home' : 'Home',
         'calendar' : 'Calendar',
         'meet' : 'Meet the team',
         'contact':'Contact',
         'hi' : "Hi there! </br> What are you up to?",
         'wondering':'Wondering what to do?',
         'pick':"Just pick the date...",
         'let':"...And let us make YOUR day!",
         'you':"You're in the right place!",
         'team':"Meet the Team",
         'team1':"What do The Beatles, the Four Horsemen, the cardinal directions and The Ghostbusters have in common?",
         'team2':"All of these consist of 4s! And so does MaNaPiGo - a group of 4 young people put together by a desire of changing their life!",
         'team3':"Catch them all",
         'marek':'The one who loves to spend his time in an active way, extremely keen on new technologies',
         'natalia':'There is no such a thing as impossible, there are only things that may require a little extra work.',
         'piotr':'The one who still has not delivered the description of himself and made Natalia upset. :(',
         'grzegorz':'Computer graphics, desktop publishing and websites desigh are what he feels most comfortable with.',
         'check' :'Tick the middle box if you are not a robot :)',
         'btn' :'Send',
         'byline':'   Connect with us :',
         'ctn':'Contact',
         'terms':'Terms and Conditions',
         'mail':'Your email',
         'msg':'Message',
         'spam':"Don't like the spam? </br> Neither do we! Email us only if you want to hear back from us:",
         'placeholder' :"So that we know who to reply to",
         'placeholder1' : "Here you can be creative'"
     },

     'pl' :{
         'home' : 'Strona główna',
         'calendar' : 'Kalendarz',
         'meet' : 'Poznaj nas',
         'contact':'Kontakt',
         'hi' : 'Cześć! </br> Co masz w planach?',
         'wondering':'Zastanawiasz się co robić?',
         'pick':'Po prostu wybierz datę...',
         'let':"Pozwól nam zaplanować Tobie dzień!",
         'you':"Jesteś we właściwym miejscu!",
         'team':"Poznaj nas",
         'team1':"Co ma ze sobą wspólnego zespół The Beatles,jeźdźcy apokalipsy, strony świata i pogromcy duchów?",
         'team2':"Wszystkie z nich składają sie z 4! Tak samo jak MaNaPiGo - grupa 4 młodych ludzi, którą połączyła chęć zmiany swojego życia!",
         'team3':"Złap nas wszystkich",
         'marek':' Uwielbia spędzać czas w aktywny sposób, fan nowych technologii',
         'natalia':'Nie ma rzeczy niemożliwych są tylko takie które wymagają troche więcej pracy',
         'piotr':'Jedyny w teamie który czerpie przyjemność z drażnienia swojego Scrum Mastera',
         'grzegorz':'Grafika komputerowa, DTP i projektowanie stron internetowych to coś, w czym czuje się najbardziej komfortowo',
         'check' :'Zaznacz tylko środkowy kwadracik - pokaż, że nie jesteś robotem :)',
         'btn' :'Wyślij',
         'byline':'Skontaktuj się z nami:',
         'ctn':'Kontakt',
         'terms':'Regulamin',
         'mail':'Twój email',
         'msg':'Wiadomość',
         'spam':"Nie lubisz spamu ? </br> My też nie! Naisz do nas tylko jeśli chcesz żebyśmy sie do Ciebie odezwali!",
         'placeholder' :"Tu wpisz Twój adres email",
         'placeholder1' : "Tu możesz być kreatywny :)"
     }



 };


 $(function () {
     $('.translate').click(function(){
         var $lang = $(this).attr('id');


         $('.lang').each(function (index,element) {
             $(this).html(language_array[$lang][$(this).attr('key')]);
             $(this).attr('placeholder', language_array[$lang][$(this).attr('key')])
         });
     });
 });

