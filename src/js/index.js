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
  slidesPerView: 1.25,
  spaceBetween: 30,
  centeredSlides: false,
    navigation: {
      nextEl: ".testimonials__next",
      prevEl: ".testimonials__prev",
    },
  breakpoints: {
    1024: {
      slidesPerView: 3.2,
      spaceBetween: 25,
      initialSlide: 0,
    },
},
});

// header start
let hamburger = document.querySelector('.navbar-toggler-icon');
// let close = document.querySelector('.cross');
let menu = document.querySelector('.header__mobile_hide');
let screenMenu = window.screen.width;
// let topButtonClose = document.querySelector('#top-button');

hamburger.onclick=function () {
    menu.style.display = 'block';
    menu.style.width = '100%';
    hamburger.style.display = 'none';
}

// close.onclick=function () {
//     menu.style.display = 'none';
//     hamburger.style.display = 'block';
// }

// topButtonClose.onclick=function () {
//     if (window.screen.width < 769) {
//         menu.style.display = 'none';
//         hamburger.style.display = 'block';
//     }
//     else {
//         hamburger.style.display = 'none';
//     }
// }

// header end
