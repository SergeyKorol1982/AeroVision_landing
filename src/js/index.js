var swiper = new Swiper(".services__swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  breakpoints: {
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 50,
      initialSlide: 0,
    },
},
});

var swiper1 = new Swiper(".testimonials__swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: false,
    navigation: {
      nextEl: ".testimonials__next",
      prevEl: ".testimonials__prev",
    },
  breakpoints: {
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 50,
      initialSlide: 0,
    },
},
});