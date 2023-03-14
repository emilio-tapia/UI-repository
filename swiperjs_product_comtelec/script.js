var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 150,
    depth: 450,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
});
