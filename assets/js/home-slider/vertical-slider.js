const verticalslider = new Swiper(".verticalslider", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  direction: 'vertical',
  centeredSlides: true,
	// effect: 'fade',
  grabCursor: false,
  loop: true,
  pagination: false,
  parallax: false,
  speed: 600,
	slidesPerView: 1,
});