const carouselSwiper = new Swiper('#carousel', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // 方塊轉場
    effect:'cube',

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


const mySwiper = new Swiper("#prod-swiper", {
slidesPerView: 1,
spaceBetween: 30,
// Responsive breakpoints
// 題目: 原本              3欄位
//       螢幕寬度 <= 992 變2欄位
//               <= 768 變1欄位
breakpoints: {
  // when window width is >= 769px
  769: {
    slidesPerView: 2,
    spaceBetween: 30
  },
  // when window width is >= 993px
  993: {
    slidesPerView: 3,
    spaceBetween: 30
  },
},
// centeredSlides: true,
pagination: {
    el: ".swiper-pagination",
    clickable: true,
},

navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},

});


      