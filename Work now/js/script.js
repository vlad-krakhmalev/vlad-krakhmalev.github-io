function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('_webp');
	} else {
		document.querySelector('body').classList.add('_no-webp');
	}
});

// $('.menu__item.submenu').mouseenter(function() {
// 	$(this).children(".submenu__list").addClass('submenu__list_active');
// });
// $('.submenu__list_active').click(function () {
// 	console.log('In');
// });
// $('.submenu__list_active').mouseleave(function () {
// 	console.log('Out');
// 	$(this).removeClass('submenu__list_active');
// });

$(document).ready(function () {

	$('.reviews__slider').slick({
		slidesToShow: 2,
		prevArrow: '<div class="reviews__arrow reviews__prev"></div>',
		nextArrow: '<div class="reviews__arrow reviews__next"></div>',
		appendArrows: $('.reviews__arrows')
	});

});
