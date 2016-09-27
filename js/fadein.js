$('.about-link').click(function() {
  $(".resume-container").css('display','none');
  $(".code-container").css('display','none');
  $(".about-container").css('display','block');
});

$('.resume-link').click(function() {
  $(".code-container").css('display','none');
  $(".about-container").css('display','none'); 
  $(".resume-container").css('display','block');
});

$('.code-link').click(function() {
  $(".resume-container").css('display','none');
  $(".about-container").css('display','none');
  $(".code-container").css('display','block');
});