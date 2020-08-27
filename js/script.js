$(function(){
	$('.fairy-tail__slider, .our-trip__slider').slick({
		dots: false,
		slidesToShow: 1,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 2500,
		fade: true,
		cssEase: 'linear',
		prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="image/icon/left.svg" alt="" /></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"><img src="image/icon/right.svg" alt="" /></button>'
	});
});
