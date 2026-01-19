// Change navbar appearance on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});






const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal-y, .reveal-x-left, .reveal-x-right").forEach((el) => {
    observer.observe(el);
});










document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. 3D CAROUSEL AUTO-ROTATE LOGIC ---
    const carousel = document.querySelector('.carousel-3d');
    let currDegree = 0;

    // This function ensures the rotation is smooth and can be 
    // controlled or paused via JS if needed in the future.
    function rotate() {
        currDegree++;
        // We update the rotation directly to ensure sync with CSS
        // carousel.style.transform = `rotateY(${currDegree}deg)`;
        requestAnimationFrame(rotate);
    }
    // Note: The CSS animation handles the constant spin, 
    // but JS can be used here for custom drag-to-spin features.


    // --- 2. ADVANCED SCROLL REVEAL (X & Y AXIS) ---
    // This looks for elements with 'reveal' classes and activates them
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add 'active' class when the element is visible on screen
                entry.target.classList.add("active");
                
                // If you want it to only animate once, un-comment the line below:
                // revealObserver.unobserve(entry.target);
            } else {
                // Remove 'active' if you want it to fade out when scrolling away
                entry.target.classList.remove("active");
            }
        });
    }, { 
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Triggers slightly before it hits the view
    });

    // Select all elements we want to animate
    const elementsToAnimate = document.querySelectorAll('.reveal-y, .reveal-x-left, .reveal-x-right, .hub-row');
    
    elementsToAnimate.forEach((el) => {
        revealObserver.observe(el);
    });

});







