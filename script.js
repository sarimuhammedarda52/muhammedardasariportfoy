document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. GÖRÜNME ANİMASYONU ---
    const options = {
        threshold: 0.15 
    };

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); 
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(revealCallback, options);
    
    document.querySelectorAll('.reveal').forEach(elem => {
        observer.observe(elem);
    });

    // --- 2. HERO ANİMASYONU ---
    const heroElems = [
        document.querySelector('.profile-img-wrapper'),
        document.querySelector('.hero-content h1'),
        document.querySelector('.hero-content p'),
        document.querySelector('.hero-buttons'),
        document.querySelector('.scroll-down')
    ];

    heroElems.forEach((el, i) => {
        if (el) { 
            setTimeout(() => {
                el.classList.add('active');
            }, i * 200); 
        }
    });

    // --- 3. NAVBAR SCROLL EFEKTİ (Beyaz Tema) ---
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.9)';
            navbar.style.boxShadow = 'none';
        }
    });
});