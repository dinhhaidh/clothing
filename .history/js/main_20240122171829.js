/*=============== CHANGE BACKGROUND HEADER ===============*/
$(document).ready(function () {
  $(window).scroll(function () {
    $("#header").toggleClass("scroll-header", $(this).scrollTop() >= 50);
  });
});

/*=============== SWIPER PRODUCTS ===============*/
var swiperProducts = new Swiper(".products__container", {
  // luot lien tuc
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    ////

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // lích thước resposive
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
    // 
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
