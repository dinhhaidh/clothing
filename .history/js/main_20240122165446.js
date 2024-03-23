/*=============== CHANGE BACKGROUND HEADER ===============*/
$(document).ready(function(){
    $(window).scroll(function() {
        $('#header').toggleClass('scroll-header', $(this).scrollTop() >= 50);
    });
});

/*=============== SWIPER PRODUCTS ===============*/
    var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/