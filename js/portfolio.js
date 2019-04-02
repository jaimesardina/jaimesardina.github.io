"use strict";


$(document).ready(function(){ 
  
$('#menuButton').on("click",function() {
  // $(".nav").slideToggle(); simple alternative 
  
  if ($('.nav').is(":hidden")) {
    $('.nav').slideDown(300,function() { 
      //$('.background').addClass('overlay');
      // $('.nav').addClass('open');  
        });

  } 
  else {
    $('.nav').slideUp(300,function() {  
      //$('.background').removeClass('overlay'); 
      // $('.nav').removeClass('open'); 
        });
  }   // end of else

});

  });



function animateProgress() {

var fill = 0;
window.onload = setInterval(cssProgress, 5);

function cssProgress() {

	if (fill < 90) {
		fill += 0.25;
		document.getElementById("progressHC").style.width = fill + "%";
	} else
	clearInterval();
}

}





