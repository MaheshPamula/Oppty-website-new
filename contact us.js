// Change navbar appearance on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});


document.addEventListener("DOMContentLoaded", () => {
    // Reveal animation for text blocks
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    const revealItems = document.querySelectorAll('.address-card, .text-block, .full-video-section');
    revealItems.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";
        item.style.transition = "all 0.8s ease-out";
        observer.observe(item);
    });
});






document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById('pricingToggle');
    const amounts = document.querySelectorAll('.amount');

    toggle.addEventListener('change', () => {
        amounts.forEach(amt => {
            const monthly = amt.getAttribute('data-monthly');
            const yearly = amt.getAttribute('data-yearly');
            
            // Smooth number transition
            let target = toggle.checked ? yearly : monthly;
            amt.textContent = target;
            amt.classList.add('pop-animation');
            setTimeout(() => amt.classList.remove('pop-animation'), 300);
        });
    });

    // 3D Tilt Effect for Cards
    const cards = document.querySelectorAll('.pricing-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (centerY - y) / 15;
            const rotateY = (x - centerX) / 15;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        });
    });
});



