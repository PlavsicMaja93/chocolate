"use strict";

function responsiveMenu() {
    let toggleMenu = document.querySelector('.toggle-menu');
    let mobileMenu = document.querySelector('.mobile-menu');

    toggleMenu.onclick = (event) => {
        toggleMenu.classList.toggle('active');
        mobileMenu.classList.toggle('d-hide');
    };
}

responsiveMenu();


$(".hero-carousel").owlCarousel({
    items: 3,
    margin: 10,
    autoplay: false,
    autoplayTimeout: 5000,
    loop: true,
    nav: false,
    dots: false,
    responsive: {0: {items: 1}, 600: {items: 2}, 810: {items: 3}}
});

$('.offerBackground').fullClip({
    images: ['./img/home/cover1.jpg','./img/home/cover2.jpg','./img/home/cover3.jpg'],
    transitionTime: 2000,
    wait: 5000
  });


  