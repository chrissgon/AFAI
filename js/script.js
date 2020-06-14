// SIDENAV
$(".button-collapse").sideNav();

// SCROLL
$('.nav a, .side-nav a, .btn-home').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
		targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset
	}, 1000);
	$('.button-collapse').sideNav('hide');
});

// SCROLL SUAVE
$(function() {  
    // Custom Easing
    jQuery.scrollSpeed(100, 500,);
});

// BOTÃO TOP
jQuery(document).ready(function() {
	if ($(window).width() >= 1000) {
		jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 600) {
        	document.getElementById("btn-top").style.display = "block";
            jQuery('.btn-top').fadeIn(200);
        } else {
        	jQuery('.btn-top').fadeOut(200);         
        }
	    });
	    jQuery('.btn-top').click(function(event) {
	        event.preventDefault();
	        jQuery('html, body').animate({scrollTop: 0}, 1000);
	    })
	}else{
		jQuery('.btn-top').hide();
	}	
});

// MODAL
$('.modal').modal({
	endingTop: '15%',
	opacity: .8
});

// PRELOADER
window.onload = function(){
	$('.load').fadeOut("slow");
}