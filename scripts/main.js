// Mobile navigation
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            const isOpen = hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            hamburger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
        });

        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.setAttribute('aria-label', 'Open menu');
            });
        });
    }
});

// Smooth scrolling for in-page links
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Frosted nav on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    navbar.classList.toggle('scrolled', window.scrollY > 8);
});

// Active section in navigation
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';

    sections.forEach(function (section) {
        if (window.scrollY >= section.offsetTop - 120) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(function (link) {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
});

// Subtle reveal on scroll
const observerOptions = {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll(
        '.skill-category, .project-card, .app-card, .cert-card, .timeline-item, .stat-item, .education-item'
    );
    animatedElements.forEach(function (el) {
        observer.observe(el);
    });
});

// Contact form (optional — only if present)
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }

        showNotification("Message sent successfully. I'll get back to you soon.", 'success');
        this.reset();
    });
});

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showNotification(message, type) {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = 'notification ' + type;
    notification.innerHTML =
        '<div class="notification-content">' +
        '<span class="notification-message">' + message + '</span>' +
        '<button type="button" class="notification-close" aria-label="Close">&times;</button>' +
        '</div>';

    notification.style.cssText =
        'position:fixed;top:calc(var(--nav-height,52px) + 12px);right:20px;padding:14px 18px;border-radius:14px;color:#fff;font-size:14px;font-weight:400;z-index:10000;transform:translateX(120%);transition:transform .35s cubic-bezier(.25,.1,.25,1);max-width:320px;box-shadow:0 8px 30px rgba(0,0,0,.12);' +
        (type === 'success' ? 'background:#34c759;' : 'background:#ff3b30;');

    document.body.appendChild(notification);

    requestAnimationFrame(function () {
        notification.style.transform = 'translateX(0)';
    });

    function dismiss() {
        notification.style.transform = 'translateX(120%)';
        setTimeout(function () {
            notification.remove();
        }, 350);
    }

    notification.querySelector('.notification-close').addEventListener('click', dismiss);
    setTimeout(dismiss, 5000);
}

// Stat counters when about section is visible
function animateCounters() {
    document.querySelectorAll('.stat-item h3').forEach(function (stat) {
        const raw = stat.textContent.trim();
        const hasPlus = raw.includes('+');
        const hasComma = raw.includes(',');
        const target = parseInt(raw.replace(/[^0-9]/g, ''), 10);
        if (!target || Number.isNaN(target)) return;

        let current = 0;
        const steps = 40;
        const increment = target / steps;

        const timer = setInterval(function () {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            let display = Math.floor(current).toString();
            if (hasComma && target >= 1000) {
                display = display.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            }
            stat.textContent = display + (hasPlus ? '+' : '');
        }, 30);
    });
}

const sectionObserver = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting && entry.target.id === 'about') {
                animateCounters();
                sectionObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.25 }
);

document.addEventListener('DOMContentLoaded', function () {
    const about = document.querySelector('#about');
    if (about) sectionObserver.observe(about);
});
