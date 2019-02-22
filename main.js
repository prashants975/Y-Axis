

// scrolling effect on anchor
$(document).ready(function(){
    $(".text-why-small").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
         $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          window.location.hash = hash;
        });
      } 
    });
  });

  /* right in animation */


  
