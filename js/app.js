
$('.slider__box').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    asNavFor:'.construction__month_bar',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
//_слайдер для кнопок

$('.construction__month_bar').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider__box',
  swipeToSlide: true,
  focusOnSelect:true,
});
//
///
//
$(document).ready(function () {
  $(".photo__body").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});