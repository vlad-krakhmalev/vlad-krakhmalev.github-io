$(document).ready(function () {
	var defects__slider = new Swiper('.defects__slider .swiper-container', {
		direction: 'horizontal',
		loop: true,
		effect: 'fade',
		pagination: {
			clickable: true,
			el: '.swiper-pagination',
		},
	})

	var defects__pagination = new Swiper('.defects__pagination .swiper-container', {
		spaceBetween: 30,
		slidesPerView: 3,
		direction: 'horizontal',
		navigation: {
			nextEl: '.swiper-next',
			prevEl: '.swiper-prev',
		},
		breakpoints: {
			1200: {
				direction: 'vertical',
			},
			720: {
				slidesPerView: 3,
			},
			480: {
				slidesPerView: 2,
			},
		}
	})

	var reviews__slider = new Swiper('.reviews .swiper-container', {
		speed: 1000,
		spaceBetween: 30,
		slidesPerView: 'auto',
		centeredSlides: true,
		direction: 'horizontal',
		loop: true,
		pagination: {
			el: '.reviews .swiper-pagination',
			type: 'fraction',
			renderFraction: function (currentClass, totalClass) {
				return '<span class="' + currentClass + '"></span>' +
					'<div class="reviews__line"><div class="reviews__bottom-line"></div><div class="reviews__top-line"></div></div>' +
					'<span class="' + totalClass + '"></span>';
			},
		},
		navigation: {
			nextEl: '.swiper-next',
			prevEl: '.swiper-prev',
		},
	});

	$('.sertificate__slider').slick({
		infinite: true,
		slidesToShow: 3,
		prevArrow: '<div class="slick-prev"><div class="icon"></div></div>',
		nextArrow: '<div class="slick-next"><div class="icon"></div></div>',
	});

	function animateSliderStart() {
		$(".reviews__top-line").animate({
			width: "100%",
		}, 8000, function () {
			reviews__slider.slideNext(1000)
			$(".reviews__top-line").width(0);
		});
	}
	function animateSliderStop() {
		$(".reviews__top-line").stop();
		$(".reviews__top-line").width(0);
	}

	animateSliderStart();

	reviews__slider.on('slideChangeTransitionEnd', function () {
		animateSliderStart();
	});
	reviews__slider.on('slideChangeTransitionStart', function () {
		animateSliderStop();
	});
});

// Open defects block

$('.defects__pagination .swiper-slide').click(function() {
	console.log('Click');
	let numberShowElement = $(this).data('item');
	let allElements = $('.defects__left');
	let showElement = $('.defects__left[data-item=' + numberShowElement+']');

	allElements.removeClass('defects__left_show');
	allElements.addClass('defects__left_hide');
	showElement.removeClass('defects__left_hide');
	showElement.addClass('defects__left_show');
});

// Open menu

$('.header__menu .menu__toggle').click(function(){
	if ($('.header .menu__toggle').hasClass('menu__toggle_active')) {
		$('.header .menu__toggle').removeClass('menu__toggle_active');
		$('.header .menu__list').removeClass('menu__list_active');
		$('body').removeClass('not-scroll');
	} else {
		$('.header .menu__toggle').addClass('menu__toggle_active');
		$('.header .menu__list').addClass('menu__list_active');
		$('body').addClass('not-scroll');
	}
});

//Popup

$('.sertificate__slider').magnificPopup({
	delegate: 'a',
	type: 'image',
	gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0, 1]
	},
});

$('.popup-youtube').magnificPopup({
	disableOn: 700,
	type: 'iframe',
	removalDelay: 160,
	preloader: false,

	fixedContentPos: false
});

// Focus form
