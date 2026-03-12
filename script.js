// Smooth scrolling and animations
document.addEventListener('DOMContentLoaded', function() {
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe category buttons and product cards
    document.querySelectorAll('.category-btn, .product-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Profile animation
    const profile = document.querySelector('.profile');
    if (profile) {
        profile.style.opacity = '0';
        profile.style.transform = 'translateY(20px)';
        profile.style.transition = 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s';
        observer.observe(profile);
    }
});

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
    // Implementation for future mobile hamburger menu
}

