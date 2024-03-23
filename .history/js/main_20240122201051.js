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
        1024: {
            spaceBetween: 72,
        },
    },
    // 
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/
$(window)

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
