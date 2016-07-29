

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

    $('.slider').each(function() {
        var $this = $(this);
        var $slides = $this.find('.slide');
        var $group =  $this.find('.slide-group');
        var currentIndex = 1;
        var timeout;



        function move(newIndex){

            timing();

            $slides.eq(currentIndex).fadeOut(3000).removeClass('active-slide');

            $group.animate(5000,function () {

                $slides.eq(newIndex).fadeIn(3000).addClass('active-slide');
                currentIndex = newIndex;

            });

        }

        function timing(){
            clearTimeout(timeout);

            timeout=setTimeout(function(){
                if(currentIndex < ($slides.length)){
                    move(currentIndex+1);
                }
                else{
                    move(1);
                }

            },7000);
        }

        timing();
    });


});

