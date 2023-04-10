var swiper = new Swiper('.swiper-container', {
  mousewheel: true,
  slidesPerView: 4,
  spaceBetween: 60,
  paginationClickable: true,
  centeredSlides: true,
  //   loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },
  on: {
    slideChangeTransitionStart: function () {
      anime({
        targets: '.swiper-slide-active .tag',
        scale: [0.1, 1],
        opacity: [0, 1],
        easeing: 'easeInOutQuart',
        delay: 500,
      });
      anime({
        targets: '.swiper-slide-active img',
        scale: [0, 1],
        opacity: [0, 1],
        easeing: 'easeInOutQuart',
        delay: 500,
      });
      anime({
        targets: '.swiper-slide-active .elmt',
        opacity: [0, 1],
        translateY: [100, 1],
        easeing: 'easeInOutQuart',
        delay: anime.stagger(170, { start: 0 }),
      });
    },
  },
  breakpoints: {
    240: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    996: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1224: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
