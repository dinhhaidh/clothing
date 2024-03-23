/*=============== CHANGE BACKGROUND HEADER ===============*/
$(document).ready(function(){
    $(window).scroll(function() {
        $('#header').toggleClass('scroll-header', $(this).scrollTop() >= 50);
    });
});

/*=============== SWIPER PRODUCTS ===============*/
    var swiperProducts = new Swiper(".products__container", {
        spaceBetween: 32,
        grabCursor: true,
        centeredSlides: true,
        slidesperView: 'auto',

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/