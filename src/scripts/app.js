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

$(".piece").on('click', function(){
  $(this).toggleClass('fullscreen');
})

// ABOUT MODAL

// On user button click show modal
$('.fa-user-o').click(function(e){
  e.preventDefault();
  $('.aboutContent').removeClass('hidden')
  $('#aboutO').removeClass('hidden')
})

// When user clicks X close modal
$('.close').click(function(){
  $('.aboutContent').addClass('hidden')
  $('#aboutO').addClass('hidden')
})

// When user clicks outside of modal close modal
$('#aboutO').click(function(){
  $('.aboutContent').addClass('hidden')
  $('#aboutO').addClass('hidden')
})

// PORTFOLIO IMG FULLSCREEN

// Depending on img height and width, add the appropriate class to make img and overlay full screen
$('.img-w img').click(function(){
  if ($(this).height() > $(this).width()) {
    if ($(this).hasClass('fullscreenH')){
      $(this).removeClass('fullscreenH')
      $(this).siblings().removeClass('fullscreen')
    } else {
      $(this).addClass('fullscreenH')
      $(this).siblings().addClass('fullscreen')
    }
  } else {
    if ($(this).hasClass('fullscreenW')){
      $(this).removeClass('fullscreenW')
      $(this).siblings().removeClass('fullscreen')
    } else {
      $(this).addClass('fullscreenW')
      $(this).siblings().addClass('fullscreen')
    }
  }
});

// If user clicks on the overlay, make the image not full screen
$('.imgO').click(function(){
  $('.imgO').removeClass('fullscreen')
  $(this).siblings().removeClass('fullscreenH fullscreenW')
})


// $(function() {
//   $(".img-w").each(function() {
//     $(this).wrap("<div class='img-c'></div>")
//     let imgSrc = $(this).find("img").attr("src");
//      $(this).css('background-image', 'url(' + imgSrc + ')');
//   })
            
//   $(".img-c").click(function() {
//     let w = $(this).outerWidth()
//     let h = $(this).outerHeight()
//     let x = $(this).offset().left
//     let y = $(this).offset().top
    
    
//     $(".active").not($(this)).remove()
//     let copy = $(this).clone();
//     copy.insertAfter($(this)).height(h).width(w).delay(500).addClass("active")
//     $(".active").css('top', y - 8);
//     $(".active").css('left', x - 8);
    
//       setTimeout(function() {
//     copy.addClass("positioned")
//   }, 0)
    
//   }) 
  
// })

// $(document).on("click", ".img-c.active", function() {
//   let copy = $(this)
//   copy.removeClass("positioned active").addClass("postactive")
//   setTimeout(function() {
//     copy.remove();
//   }, 500)
// })

});