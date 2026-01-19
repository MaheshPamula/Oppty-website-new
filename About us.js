// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});




// Using GSAP (ensure GSAP script is included in your project)
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animate Heading
    gsap.to(".about-heading", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out"
    });

    // 2. Animate Video Container
    gsap.from(".aspect-video", {
        scale: 0.9,
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
        ease: "expo.out"
    });

    // 3. Stagger Card Reveal on Scroll
    gsap.to(".info-card", {
        scrollTrigger: {
            trigger: ".info-card",
            start: "top 85%",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out"
    });
});





document.querySelectorAll('.card-3d-wrap').forEach(wrapper => {
    const card = wrapper.querySelector('.card-3d');
    
    wrapper.addEventListener('mousemove', (e) => {
        const rect = wrapper.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within element
        const y = e.clientY - rect.top;  // y position within element
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate rotation (max 20 degrees)
        const rotateX = (centerY - y) / 10; 
        const rotateY = (x - centerX) / 10;
        
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    // Reset position when mouse leaves
    wrapper.addEventListener('mouseleave', () => {
        card.style.transform = `rotateX(0deg) rotateY(0deg)`;
        card.style.transition = "transform 0.5s ease";
    });

    wrapper.addEventListener('mouseenter', () => {
        card.style.transition = "none";
    });
});







document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a slight delay for each item to create a staggered effect
                setTimeout(() => {
                    entry.target.classList.add("active");
                }, index * 100); 
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal-item").forEach((el) => {
        observer.observe(el);
    });
});





document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal").forEach((el) => {
        observer.observe(el);
    });
});





const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));



