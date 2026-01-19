document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const nav = document.querySelector('.navbar');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }
}

 document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const nav = document.querySelector('.navbar');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }

    // 2. Course Card Tilt Effect
    const cards = document.querySelectorAll('.course-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotX = (y - centerY) / 15; // Adjusted sensitivity
            const rotY = (centerX - x) / 15;

            card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
        });
    });
});




document.querySelector('.btn-secondary').addEventListener('click', function() {
    // For now, it just logs, but you could open a Modal here
    console.log("Playing Preview...");
    alert("Video Preview Starting!");
});



