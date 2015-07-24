var setHeight = function (o) {
	$(o).css({height: window.innerHeight});

	$(window).resize(function(){
		$(o).css({height: window.innerHeight});
	});
};

var goToSection = function(o){
	console.log(o);

    $('html, body').animate({
        scrollTop: $(o).offset().top
    }, 700);
};
// document ready
$(function(){

	// navigation
	$("#navigation li a").on("click", function(){
		var a = $(this).attr("href");
		goToSection($(a));
		return false;
	});


	// initilize
	setHeight($("#hero"));
	setHeight($("#photos"));
	setHeight($("#hotels"));
	setHeight($("#details"));
});

// for picture slider
$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});