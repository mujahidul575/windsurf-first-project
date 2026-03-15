'use strict'
const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

AOS.init({
  duration:1000,
  once:true
});
