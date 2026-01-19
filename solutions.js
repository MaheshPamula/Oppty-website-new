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
    const cards = document.querySelectorAll('.poly-card');

    // 1. Polymath 3D Tilt Interaction
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = card.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;
            
            card.style.transform = `perspective(1000px) rotateX(${y * -10}deg) rotateY(${x * 10}deg) translateY(-10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
        });
    });

    // 2. Ghost Bubble Logic
    const createGhostBubble = (container) => {
        const bubble = document.createElement('div');
        bubble.style.cssText = `
            position: absolute; bottom: -20px; border-radius: 50%;
            background: rgba(26, 26, 46, 0.04); width: ${Math.random() * 50 + 20}px;
            height: ${Math.random() * 50 + 20}px; left: ${Math.random() * 100}%;
            pointer-events: none; transition: 3s cubic-bezier(0.4, 0, 0.2, 1); z-index: 2;
        `;
        container.appendChild(bubble);
        setTimeout(() => {
            bubble.style.transform = `translateY(-400px) scale(1.5)`;
            bubble.style.opacity = '0';
        }, 50);
        setTimeout(() => bubble.remove(), 3100);
    };

    cards.forEach(card => {
        const container = card.querySelector('.bubble-container');
        let interval;
        card.addEventListener('mouseenter', () => {
            interval = setInterval(() => createGhostBubble(container), 400);
        });
        card.addEventListener('mouseleave', () => clearInterval(interval));
    });
});










document.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector('.reveal-box');
    const content = document.querySelector('.arrow-content');

    box.addEventListener('mousemove', (e) => {
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Tilt the content based on mouse (interaction)
        const moveX = (x - rect.width / 2) / 25;
        const moveY = (y - rect.height / 2) / 25;
        
        content.style.transform = `rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
    });

    box.addEventListener('mouseleave', () => {
        content.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
});


