document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav ul');

    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});