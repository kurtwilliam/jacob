$(document).ready(function(){

// Smooth scroll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Hide and Show nav menu for responsive
// Hide the nav bar if screen is small on start
if($(window).width() < 830){
  $( "nav" ).hide()
} else {
  $('nav').show()
}

// Hide the nav bar if screen is small on resize
$(window).resize(function(){
  if($(window).width() < 830){
    $( "nav" ).hide()
  } else {
    $('nav').show()
  }
});

// hide X originally starting
$( ".cross" ).hide();

// show nav on click of hamburger at small screen size, hide hamburger and close X button to close
$( ".hamburger" ).click(function() {
  if ($(window).width() < 830) {
    $( "nav" ).slideToggle( "slow", function() {
      $( ".hamburger" ).hide();
      $( ".cross" ).show();
    })
  }
})

// hide nav on click of cross, hide cross and show hamburger
$( ".cross" ).click(function() {
  $( "nav" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
  });
});

// Make HTML responsive when screen width is small for photo4 and photo5 text

if($(window).width() < 500){
  $('.photo4 h2').html('Water Fall');
} else {
  $('.photo4 h2').html('Waterfall');
}

$(window).resize(function(){
  if($(window).width() < 500){
    $('.photo4 h2').html('Water Fall');
  } else {
    $('.photo4 h2').html('Waterfall');
  }
});

if($(window).width() < 500){
  $('.photo5 h2').html('The Wild Para- chute');
} else {
  $('.photo5 h2').html('The Wild Parachute');
}

$(window).resize(function(){
  if($(window).width() < 500){
    $('.photo5 h2').html('The Wild Para- chute');
  } else {
    $('.photo5 h2').html('The Wild Parachute');
  }
});

});