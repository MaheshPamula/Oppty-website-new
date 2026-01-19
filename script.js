// Change navbar appearance on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Manage active link status
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', function() {
        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});





const video = document.getElementById('limitedVideo');

// 1. Force the video to start at 1 second as soon as it loads
video.addEventListener('loadedmetadata', function() {
    this.currentTime = 1;
});

video.ontimeupdate = function() {
    // 2. If the video reaches 16 seconds, jump back to 1 second
    if (this.currentTime >= 16) {
        this.currentTime = 1;
        this.play();
    }

    // 3. Safety: If user tries to scrub back before 1s, push them forward
    if (this.currentTime < 1) {
        this.currentTime = 1;
    }
};

// 4. Interaction trigger to ensure autoplay works
document.addEventListener('click', () => {
    if (video.paused) {
        video.play();
    }
}, { once: true });




document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            // When window width is >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // When window width is >= 1024px
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
});










