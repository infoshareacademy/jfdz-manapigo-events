$(document).ready(function() {
	
	$('.backtotop').hide();
	
	$(window).scroll(function(){
			if ($(this).scrollTop() > 440) {
				$('.backtotop').fadeIn();
			} else {
				$('.backtotop').fadeOut();
			}
		});
		 
	$('.backtotop').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 500);
		return false;
	});
});