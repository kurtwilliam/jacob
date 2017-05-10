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
$('.fa-user-o').click(function(){
  $('.about').css('display', 'block')
})

// When user clicks X close modal
$('.close').click(function(){
  $('.about').css('display', 'none')
})

// When user clicks outside of modal close modal


// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == about) {
//     about.style.display = "none";
//   }
// }

});



