var mySwiper = new Swiper('.swiper-container', {
    slidesPerView:2,
    loop:true,
    navigation: {
        nextEl: '.arrow',
      },
     
    breakpoints: {
    1900:{
        slidesPerView:2,
    },
    580:{
        slidesPerView: 2,
    },
    500: {
        slidesPerView: 1,
        },
    0:{
            slidesPerView: 1,
        }
    }
});

var menuButton = document.querySelector(".menu-btn");
var menu = document.querySelector(".header");
menuButton.addEventListener("click", function(){
    menuButton.classList.toggle('menu-btn-active');
    menu.classList.toggle('header-active');
});
