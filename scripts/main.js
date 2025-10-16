// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Hamburger animation
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.skill-category, .project-card, .cert-card, .timeline-item, .stat-item');
    animatedElements.forEach(el => observer.observe(el));
});

// Contact Form Handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Basic validation
    if (!name || !email || !subject || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate form submission (replace with actual form handling)
    showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
    this.reset();
});

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">
                ${type === 'success' ? '✓' : '✗'}
            </span>
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        ${type === 'success' ? 'background: #10b981;' : 'background: #ef4444;'}
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Typing animation for hero text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 1000);
    }
});

// Skills progress animation
function animateSkillBars() {
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillCategories.forEach((category, index) => {
        setTimeout(() => {
            category.style.opacity = '0';
            category.style.transform = 'translateY(30px)';
            category.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                category.style.opacity = '1';
                category.style.transform = 'translateY(0)';
            }, 100);
        }, index * 200);
    });
}

// Counter animation for stats
function animateCounters() {
    const statItems = document.querySelectorAll('.stat-item h3');
    
    statItems.forEach(stat => {
        const target = parseInt(stat.textContent.replace('+', ''));
        let current = 0;
        const increment = target / 50;
        const suffix = stat.textContent.includes('+') ? '+' : '';
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + suffix;
        }, 40);
    });
}

// Trigger animations when sections come into view
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            
            switch (sectionId) {
                case 'skills':
                    animateSkillBars();
                    break;
                case 'about':
                    animateCounters();
                    break;
            }
        }
    });
}, { threshold: 0.3 });

// Observe sections for animations
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('#skills, #about');
    sections.forEach(section => sectionObserver.observe(section));
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Project card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Theme toggle functionality (for future enhancement)
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    
    // Save theme preference
    const isDarkTheme = body.classList.contains('dark-theme');
    localStorage.setItem('darkTheme', isDarkTheme);
}

// Load saved theme
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('darkTheme');
    if (savedTheme === 'true') {
        document.body.classList.add('dark-theme');
    }
});

// Lazy loading for images (if you add images later)
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Search functionality (for future enhancement)
function searchProjects(query) {
    const projects = document.querySelectorAll('.project-card');
    const searchTerm = query.toLowerCase();
    
    projects.forEach(project => {
        const title = project.querySelector('h3').textContent.toLowerCase();
        const description = project.querySelector('p').textContent.toLowerCase();
        const tech = Array.from(project.querySelectorAll('.project-tech span'))
            .map(span => span.textContent.toLowerCase())
            .join(' ');
        
        const isMatch = title.includes(searchTerm) || 
                       description.includes(searchTerm) || 
                       tech.includes(searchTerm);
        
        project.style.display = isMatch ? 'block' : 'none';
    });
}

// Print styles toggle
function togglePrintMode() {
    const printStyles = document.createElement('style');
    printStyles.textContent = `
        @media print {
            .navbar, .hero-buttons, .contact-form, .hamburger { display: none !important; }
            .hero { min-height: auto; padding: 2rem 0; }
            section { page-break-inside: avoid; }
            * { color: black !important; background: white !important; }
        }
    `;
    document.head.appendChild(printStyles);
    window.print();
}

// Performance optimization - debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
const debouncedScrollHandler = debounce(() => {
    // Your scroll handling code here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);