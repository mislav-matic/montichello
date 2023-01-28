$(document).ready(function () {
  const slideContainer = '#latest-news .slide-container';
  $(slideContainer).slick({
    dots: true,
    autoplay: true,
    slidesToShow: 1,
    infinite: true,
  });

  // On before slide change
  $(slideContainer).on(
    'beforeChange',
    function (event, slick, currentSlide, nextSlide) {
      console.log(nextSlide);
    }
  );
});
