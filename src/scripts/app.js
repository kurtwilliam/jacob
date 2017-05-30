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


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == about) {
    about.style.display = "none";
  }
}

});






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
