$(document).ready(function() {
  $('a[href^="#"]').click(function() {
      var hash = $(this).attr('href');
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 500);
        return false;
    });
});