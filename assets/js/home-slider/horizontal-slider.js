const horizontalslider = new Swiper(".horizontalslider", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
	slidesPerView: 1,
  centeredSlides: true,
  grabCursor: false,
  loop: true,
  speed: 600,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});