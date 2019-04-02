$(document).ready(function() {
//Navigation Drop Down Menu Effect 


$('#menuButton').on("click",function() {
  // $(".nav").slideToggle(); simple alternative 
  
  if ($('.nav').is(":hidden")) {
  	$('.nav').slideDown(300,function() { 
  		$('.background').addClass('overlay');  
  			});

  } else {
  	$('.nav').slideUp(300,function() {  
  		$('.background').removeClass('overlay'); 
  			});
  }   // end of else



      

  
} );  // end of menu click function


 $('.slides').slick({
autoplay: true,
dots: true,
mobileFirst: true,
fade: true,
touchMove: true,
swipeToSlide: true,

pauseOnHover: false,
pauseOnDotsHover: true,

 });

 $('.banner').slick({
 	autoplay: true,
 	pauseOnHover: false,
 	autoplaySpeed:5000,

 	

 });

// scroll abondon
/*
  var scroll_start = 0;
   var startchange = $('.mainHeader');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.mainHeader, .nav').addClass('actnav');
          $('.name, .nav li').addClass('actnav-link');
          
       } else {
          $('.mainHeader, .nav').removeClass('actnav');
          $('.name, .nav li').removeClass('actnav-link');
       }
   });

*/


}); // end document ready




