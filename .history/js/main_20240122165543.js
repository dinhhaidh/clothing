/*=============== CHANGE BACKGROUND HEADER ===============*/
$(document).ready(function(){
    $(window).scroll(function() {
        $('#header').toggleClass('scroll-header', $(this).scrollTop() >= 50);
    });
});

/*=============== SWIPER PRODUCTS ===============*/
    var swiperProduct = new Swiper(".products__container", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/