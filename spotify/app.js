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

  
 });  // end of menu click function


 $('.banner').slick({
  autoplay: true,
  pauseOnHover: false,
  autoplaySpeed: 5000,
  mobileFirst: true,
  fade: true,
  dots: true,
  arrows: false
 

  });








});



