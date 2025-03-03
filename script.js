// Navbar hide on scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down & past navbar
        navbar.classList.add('navbar-hidden');
    } else {
        // Scrolling up
        navbar.classList.remove('navbar-hidden');
    }
    
    lastScroll = currentScroll;
});

// Back to top button
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop?.classList.add('show');
    } else {
        backToTop?.classList.remove('show');
    }
});

backToTop?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Initialisation du slider des témoignages
const testimonialsSwiper = new Swiper('.testimonials-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});

// Initialisation du slider des logos clients
const clientsSwiper = new Swiper('.clients-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    speed: 3000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false
    },
    allowTouchMove: false,
    watchSlidesProgress: true,
    loopAdditionalSlides: 5,
    breakpoints: {
        640: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 5,
        },
        1024: {
            slidesPerView: 6,
        },
    }
});