// Set current year in footer dynamically
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile Navigation Toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Simple Contact Form Submission Handler
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    if (name) {
        formFeedback.textContent = `Thank you, ${name}! Your message to James Kwoji has been received.`;
        contactForm.reset();
    }
});
