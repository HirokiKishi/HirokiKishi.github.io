// UTF-8
$(function(){
	$('#keyVisual').carouFredSel(); 
	// Using custom configuration 
	$('#keyVisual').carouFredSel({ 
		items			: 1, 
		direction			: "left", 
		scroll : { 
			items		: 1, 
			duration		: 2000, 
			pauseOnHover	: true,
			fx			:"crossfade"
		},
		auto				: 4000, //切り替わる間隔(ms),
		pagination		: "#mv_pag"
    }); 
});


//autoHeight
(function($){
	var windowWidth = $(window).width();
	var windowSm = 768;
	$(window).on('resize load',function(){
		if (windowWidth > windowSm) {
			$('.methodList01 li').autoHeight({column:3,clear:1});
			$('.slide p').autoHeight();
			$('.serviceList01 li a').autoHeight({column:4,clear:1});
			$('.aboutList01 li').autoHeight({column:2,clear:1});
		} else {
			$('.methodList01 li.bigLink').autoHeight({column:2,clear:1});
			$('.slide p').autoHeight();
			$('.serviceList01 li a').autoHeight({column:2,clear:1});
			$('.ftrNav01 li a').autoHeight({column:2,clear:1});
		}
	}).resize();
})(jQuery);


//biggerlink
$(function(){
	$('.bigLink').biggerlink();
});


//newsSlider
$(function(){
	$('.newsSlider').bxSlider({
		slideWidth: 212,
		minSlides: 2.3,
		maxSlides: 4,
		moveSlides: 1,
		slideMargin: 15,
		pager: false
	});
});
