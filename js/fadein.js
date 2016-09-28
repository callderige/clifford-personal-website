$('.about-link').click(function() {
 	$(".resume-container").fadeOut(250);
  	$(".code-container").fadeOut(250);
  	$(".about-container").delay(250).fadeIn(250);
});

$('.resume-link').click(function() {
	$(".about-container").fadeOut(250);
	$(".code-container").fadeOut(250);
  	$(".resume-container").delay(250).fadeIn(250);
});

$('.code-link').click(function() {
  	$(".about-container").fadeOut(250);
  	$(".resume-container").fadeOut(250);
  	$(".code-container").delay(250).fadeIn(250);
});