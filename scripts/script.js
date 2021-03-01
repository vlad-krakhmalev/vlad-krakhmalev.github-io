$(document).ready(function () {

  $('.mainscreen__slider').slick({
    prevArrow: '<div class="mainscreen__arrow arrows__prev arrows__arrow icon-arr"></div>',
    nextArrow: '<div class="mainscreen__arrow arrows__next arrows__arrow icon-arr"></div>',
    appendArrows: $('.mainscreen__arrows'),
  });

  $('.more-items__slider').slick({
    prevArrow: '<div class="more-items__arrow arrows__prev arrows__arrow icon-arr"></div>',
    nextArrow: '<div class="more-items__arrow arrows__next arrows__arrow icon-arr"></div>',
    appendArrows: $('.more-items__arrows'),
    slidesToShow: 4,
  });

  $('.mainscreen__slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    let headerTheme = $('.mainscreen__slide.slick-active').data('header-theme');
    if (headerTheme === 'dark') {
      $('.header').addClass('_dark');
      $('.mainscreen__slide.slick-active').addClass('_dark');
    } else {
      $('.header').removeClass('_dark');
      $('.mainscreen__slide.slick-active').removeClass('_dark');
    }
  });

});