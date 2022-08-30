var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay:3800,
        disableOnInteraction: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@1.00": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.50": {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      "@1.70": {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

