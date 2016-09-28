$('.about-link').click(function() {
	$(this).parent().siblings('li').removeClass('active');
	$(this).parent().addClass('active');
 	$(".resume-container").fadeOut(250);
  	$(".code-container").fadeOut(250);
  	$(".about-container").delay(250).fadeIn(250);
});

$('.resume-link').click(function() {
	$(this).parent().siblings('li').removeClass('active');
	$(this).parent().addClass('active');
	$(".about-container").fadeOut(250);
	$(".code-container").fadeOut(250);
  	$(".resume-container").delay(250).fadeIn(250);
});

$('.code-link').click(function() {
	$(this).parent().siblings('li').removeClass('active');
	$(this).parent().addClass('active');
  	$(".about-container").fadeOut(250);
  	$(".resume-container").fadeOut(250);
  	$(".code-container").delay(250).fadeIn(250);
});