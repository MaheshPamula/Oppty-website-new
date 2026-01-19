// Change navbar appearance on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});




// Function to handle scroll animations
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.content-block, .perk-card');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
});

// Initialize styles for JS reveal
document.querySelectorAll('.content-block, .perk-card').forEach(el => el.classList.add('reveal'));
