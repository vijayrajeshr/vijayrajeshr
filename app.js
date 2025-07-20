// Advanced Cosmic Portfolio JavaScript - 2025 Enhanced Version - Fixed
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all cosmic systems
    initMultiLayerStars();
    initAdvancedParticles();
    initNavigation();
    initSmoothScrolling();
    initScrollAnimations();
    initCosmicEffects();
    initCertificationInteractions();
    initResponsiveHandling();
    
    console.log('🚀 Cosmic Portfolio Initialized - 2025 Enhanced Version');
});

// Multi-Layer Star System
function initMultiLayerStars() {
    const starsLayer1 = document.getElementById('stars-layer-1');
    const starsLayer2 = document.getElementById('stars-layer-2');
    const starsLayer3 = document.getElementById('stars-layer-3');
    
    // Create additional dynamic stars
    if (starsLayer1) createDynamicStars(starsLayer1, 100, 'layer-1');
    if (starsLayer2) createDynamicStars(starsLayer2, 75, 'layer-2');
    if (starsLayer3) createDynamicStars(starsLayer3, 50, 'layer-3');
    
    // Add twinkling stars
    createTwinklingStars();
}

function createDynamicStars(container, count, layerClass) {
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = `dynamic-star ${layerClass}`;
        
        const size = Math.random() * 3 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const opacity = Math.random() * 0.8 + 0.2;
        const duration = Math.random() * 4 + 3;
        
        star.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: radial-gradient(circle, rgba(255,255,255,${opacity}) 0%, transparent 70%);
            border-radius: 50%;
            animation: twinkle ${duration}s linear infinite;
            animation-delay: ${Math.random() * 2}s;
            pointer-events: none;
        `;
        
        container.appendChild(star);
    }
}

function createTwinklingStars() {
    const twinkleContainer = document.createElement('div');
    twinkleContainer.id = 'twinkling-stars';
    twinkleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -8;
    `;
    
    document.body.appendChild(twinkleContainer);
    
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'twinkling-star';
        
        const size = Math.random() * 2 + 0.5;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 3 + 2;
        
        star.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: white;
            border-radius: 50%;
            animation: intenseTwinkle ${duration}s ease-in-out infinite;
            animation-delay: ${delay}s;
            opacity: 0;
            pointer-events: none;
        `;
        
        twinkleContainer.appendChild(star);
    }
    
    // Add CSS animations
    if (!document.querySelector('#cosmic-animations')) {
        const style = document.createElement('style');
        style.id = 'cosmic-animations';
        style.textContent = `
            @keyframes twinkle {
                0%, 100% { opacity: 0.3; transform: scale(1); }
                50% { opacity: 1; transform: scale(1.2); }
            }
            
            @keyframes intenseTwinkle {
                0%, 90%, 100% { opacity: 0; }
                5%, 85% { opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Advanced Particle System
function initAdvancedParticles() {
    const particlesContainer = document.getElementById('particles-container');
    if (!particlesContainer) return;
    
    // Clear existing particles
    particlesContainer.innerHTML = '';
    
    // Create floating particles
    createFloatingParticles(particlesContainer);
    
    // Create shooting stars
    createShootingStars(particlesContainer);
    
    // Create orbital particles
    createOrbitalParticles(particlesContainer);
    
    // Continuous particle generation
    setInterval(() => {
        if (particlesContainer.children.length < 100) {
            createRandomParticle(particlesContainer);
        }
    }, 2000);
}

function createFloatingParticles(container) {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => createRandomParticle(container), i * 100);
    }
}

function createRandomParticle(container) {
    if (!container) return;
    
    const particle = document.createElement('div');
    particle.className = 'cosmic-particle';
    
    const colors = [
        'rgba(0, 212, 255, 0.8)',
        'rgba(139, 92, 246, 0.6)',
        'rgba(6, 255, 165, 0.7)',
        'rgba(255, 255, 255, 0.5)'
    ];
    
    const size = Math.random() * 6 + 2;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const duration = Math.random() * 8 + 6;
    const delay = Math.random() * 2;
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: ${color};
        border-radius: 50%;
        box-shadow: 0 0 ${size * 2}px ${color};
        animation: cosmicFloat ${duration}s ease-in-out infinite;
        animation-delay: ${delay}s;
        pointer-events: none;
    `;
    
    container.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        if (particle && particle.parentNode) {
            particle.remove();
        }
    }, (duration + delay) * 1000);
}

function createShootingStars(container) {
    if (!container) return;
    
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance every interval
            createShootingStar(container);
        }
    }, 4000);
}

function createShootingStar(container) {
    if (!container) return;
    
    const star = document.createElement('div');
    star.className = 'shooting-star-enhanced';
    
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * (window.innerHeight * 0.6);
    const length = Math.random() * 100 + 50;
    const duration = Math.random() * 2 + 1;
    
    star.style.cssText = `
        position: absolute;
        left: ${startX}px;
        top: ${startY}px;
        width: ${length}px;
        height: 2px;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.9), rgba(0,212,255,0.8), transparent);
        transform: rotate(45deg);
        animation: shootingStarTravel ${duration}s linear forwards;
        pointer-events: none;
        box-shadow: 0 0 10px rgba(0,212,255,0.8);
    `;
    
    container.appendChild(star);
    
    setTimeout(() => {
        if (star && star.parentNode) {
            star.remove();
        }
    }, duration * 1000);
}

function createOrbitalParticles(container) {
    if (!container) return;
    
    for (let i = 0; i < 6; i++) {
        const orbital = document.createElement('div');
        orbital.className = 'orbital-particle';
        
        const size = Math.random() * 4 + 3;
        const radius = Math.random() * 200 + 100;
        const duration = Math.random() * 15 + 10;
        const centerX = Math.random() * window.innerWidth;
        const centerY = Math.random() * window.innerHeight;
        
        orbital.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${centerX}px;
            top: ${centerY}px;
            background: radial-gradient(circle, rgba(139,92,246,0.8) 0%, transparent 70%);
            border-radius: 50%;
            animation: orbital ${duration}s linear infinite;
            pointer-events: none;
            transform-origin: ${radius}px ${radius}px;
        `;
        
        container.appendChild(orbital);
    }
}

// Fixed Smooth Scrolling System
function initSmoothScrolling() {
    // Enhanced smooth scrolling for ALL anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('.nav')?.offsetHeight || 80;
                const targetPosition = targetElement.offsetTop - navHeight;
                
                // Use native smooth scrolling for better performance
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL hash without jumping
                setTimeout(() => {
                    if (history.pushState) {
                        history.pushState(null, null, targetId);
                    }
                }, 100);
            }
        });
    });
    
    // Ensure hero buttons work correctly
    document.querySelectorAll('.hero__btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    const navHeight = document.querySelector('.nav')?.offsetHeight || 80;
                    const targetPosition = targetElement.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Enhanced Navigation
function initNavigation() {
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');
    const navLinks = document.querySelectorAll('.nav__link');
    
    // Mobile menu functionality
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Animate hamburger
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(7px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-7px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) {
                navMenu.classList.remove('active');
            }
            if (navToggle) {
                navToggle.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });
    
    // Dynamic navbar styling on scroll
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', throttle(() => {
        const nav = document.querySelector('.nav');
        const currentScrollY = window.scrollY;
        
        if (nav) {
            if (currentScrollY > 100) {
                nav.style.background = 'rgba(0, 0, 0, 0.95)';
                nav.style.backdropFilter = 'blur(30px)';
                nav.style.boxShadow = '0 5px 30px rgba(0, 212, 255, 0.1)';
            } else {
                nav.style.background = 'rgba(0, 0, 0, 0.9)';
                nav.style.backdropFilter = 'blur(25px)';
                nav.style.boxShadow = 'none';
            }
            
            // Hide/show nav on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 500) {
                nav.style.transform = 'translateY(-100%)';
            } else {
                nav.style.transform = 'translateY(0)';
            }
        }
        
        lastScrollY = currentScrollY;
        updateActiveNavigation();
    }, 100));
}

function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');
    const scrollPosition = window.scrollY + 150;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Enhanced Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '-50px',
        threshold: 0.1
    };
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Add animation classes based on element type
                if (element.classList.contains('experience__item')) {
                    element.style.animation = 'slideInLeft 0.8s ease-out forwards';
                } else if (element.classList.contains('certification__card')) {
                    element.style.animation = 'slideInUp 0.8s ease-out forwards';
                } else if (element.classList.contains('project__card')) {
                    element.style.animation = 'slideInRight 0.8s ease-out forwards';
                } else if (element.classList.contains('skill__category')) {
                    element.style.animation = 'slideInUp 0.6s ease-out forwards';
                } else if (element.classList.contains('achievement__item')) {
                    element.style.animation = 'slideInLeft 0.7s ease-out forwards';
                } else if (element.classList.contains('contact__btn')) {
                    element.style.animation = 'slideInUp 0.6s ease-out forwards';
                }
                
                // Add stagger delay for grouped elements
                const siblings = Array.from(element.parentNode.children);
                const index = siblings.indexOf(element);
                element.style.animationDelay = `${index * 0.1}s`;
                
                animationObserver.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const elementsToAnimate = [
        ...document.querySelectorAll('.experience__item'),
        ...document.querySelectorAll('.certification__card'),
        ...document.querySelectorAll('.project__card'),
        ...document.querySelectorAll('.skill__category'),
        ...document.querySelectorAll('.achievement__item'),
        ...document.querySelectorAll('.contact__btn')
    ];
    
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        animationObserver.observe(element);
    });
}

// Fixed Certification Interactions
function initCertificationInteractions() {
    const certificationCards = document.querySelectorAll('.certification__card');
    
    certificationCards.forEach(card => {
        // Enhanced hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.boxShadow = '0 30px 60px rgba(0, 212, 255, 0.25)';
            this.style.background = 'rgba(0, 212, 255, 0.08)';
            
            const badges = this.querySelectorAll('.certification__badge');
            badges.forEach(badge => {
                badge.style.transform = 'scale(1.1)';
                badge.style.textShadow = '0 0 10px currentColor';
            });
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
            this.style.background = '';
            
            const badges = this.querySelectorAll('.certification__badge');
            badges.forEach(badge => {
                badge.style.transform = 'scale(1)';
                badge.style.textShadow = '';
            });
        });
        
        // Handle card clicks for LinkedIn links
        const linkedinUrl = card.getAttribute('data-linkedin');
        if (linkedinUrl) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', function(e) {
                // Only trigger if not clicking on an existing link
                if (!e.target.closest('a')) {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
                }
            });
        }
    });
    
    // Fix certification links
    document.querySelectorAll('.certification__link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const href = this.getAttribute('href');
            if (href && href.startsWith('http')) {
                window.open(href, '_blank', 'noopener,noreferrer');
            }
        });
    });
    
    // Ensure external links work
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const href = this.getAttribute('href');
            if (href) {
                window.open(href, '_blank', 'noopener,noreferrer');
            }
        });
        
        // Ensure target and rel attributes are set
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
}

// Advanced Cosmic Effects
function initCosmicEffects() {
    // Parallax effect for cosmic orbs
    window.addEventListener('scroll', throttle(() => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        
        document.querySelectorAll('.cosmic-orb').forEach((orb, index) => {
            const speed = (index + 1) * 0.2;
            const rotation = scrolled * 0.1;
            orb.style.transform = `translateY(${rate * speed}px) rotate(${rotation}deg)`;
        });
        
        // Parallax for nebula layer
        const nebula = document.getElementById('nebula-layer');
        if (nebula) {
            nebula.style.transform = `translateY(${scrolled * 0.1}px) scale(${1 + scrolled * 0.0001})`;
        }
        
        // Parallax for star layers
        const starLayers = document.querySelectorAll('#stars-layer-1, #stars-layer-2, #stars-layer-3');
        starLayers.forEach((layer, index) => {
            const speed = (index + 1) * 0.1;
            layer.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }, 16));
    
    // Add cosmic glow effects to interactive elements
    addCosmicGlowEffects();
    
    // Initialize floating geometric shapes
    createFloatingShapes();
    
    // Add cosmic cursor
    initCosmicCursor();
}

function addCosmicGlowEffects() {
    const glowElements = document.querySelectorAll('.btn, .certification__card, .project__card, .skill__category, .achievement__item, .contact__btn');
    
    glowElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 50px rgba(0, 212, 255, 0.4)';
            this.style.transition = 'all 0.3s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
}

function createFloatingShapes() {
    const shapesContainer = document.createElement('div');
    shapesContainer.className = 'floating-shapes';
    shapesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -6;
    `;
    document.body.appendChild(shapesContainer);
    
    // Create various floating geometric shapes
    const shapes = ['circle', 'triangle', 'square', 'diamond'];
    
    for (let i = 0; i < 12; i++) {
        const shape = document.createElement('div');
        const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
        const size = Math.random() * 30 + 10;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 20 + 15;
        const delay = Math.random() * 5;
        
        shape.className = `floating-shape ${shapeType}`;
        shape.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: rgba(139, 92, 246, 0.1);
            border: 1px solid rgba(0, 212, 255, 0.3);
            animation: floatShape ${duration}s ease-in-out infinite;
            animation-delay: ${delay}s;
        `;
        
        if (shapeType === 'circle') {
            shape.style.borderRadius = '50%';
        } else if (shapeType === 'triangle') {
            shape.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
        } else if (shapeType === 'diamond') {
            shape.style.transform = 'rotate(45deg)';
        }
        
        shapesContainer.appendChild(shape);
    }
}

function initCosmicCursor() {
    // Only add cosmic cursor on non-mobile devices
    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.className = 'cosmic-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, rgba(0,212,255,0.8) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            mix-blend-mode: difference;
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(cursor);
        
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            
            cursor.style.left = `${cursorX - 10}px`;
            cursor.style.top = `${cursorY - 10}px`;
            
            requestAnimationFrame(animateCursor);
        }
        animateCursor();
        
        // Enhance cursor on hover
        document.querySelectorAll('a, button, .certification__card, .project__card').forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2)';
                cursor.style.background = 'radial-gradient(circle, rgba(139,92,246,0.8) 0%, transparent 70%)';
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.background = 'radial-gradient(circle, rgba(0,212,255,0.8) 0%, transparent 70%)';
            });
        });
    }
}

// Responsive Handling
function initResponsiveHandling() {
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const particlesContainer = document.getElementById('particles-container');
            if (particlesContainer) {
                particlesContainer.innerHTML = '';
                setTimeout(() => {
                    initAdvancedParticles();
                }, 100);
            }
        }, 250);
    });
}

// Add all CSS animations via JavaScript
const additionalStyles = document.createElement('style');
additionalStyles.id = 'additional-animations';
additionalStyles.textContent = `
    @keyframes slideInLeft {
        from { opacity: 0; transform: translateX(-50px); }
        to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes slideInRight {
        from { opacity: 0; transform: translateX(50px); }
        to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes slideInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes cosmicFloat {
        0%, 100% { transform: translateY(0px) scale(1) rotate(0deg); opacity: 0.6; }
        50% { transform: translateY(-30px) scale(1.1) rotate(180deg); opacity: 1; }
    }
    
    @keyframes shootingStarTravel {
        0% { transform: translateX(-100px) translateY(50px) rotate(45deg) scale(0); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateX(800px) translateY(-200px) rotate(45deg) scale(1); opacity: 0; }
    }
    
    @keyframes orbital {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    @keyframes floatShape {
        0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
        50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
    }
    
    @keyframes clickRipple {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(15); opacity: 0; }
    }
    
    /* Mobile optimizations */
    @media (max-width: 768px) {
        .cosmic-cursor { display: none !important; }
        .floating-shapes { display: none !important; }
        #particles-container { opacity: 0.3; }
        .nav__toggle { z-index: 1001; }
    }
`;

if (!document.querySelector('#additional-animations')) {
    document.head.appendChild(additionalStyles);
}

// Global throttle function
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Add click ripple effect for better interaction feedback
document.addEventListener('click', function(e) {
    // Skip if clicking on interactive elements
    if (e.target.closest('a, button, input, textarea, select')) return;
    
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: rgba(0, 212, 255, 0.6);
        transform: translate(-50%, -50%);
        animation: clickRipple 0.6s ease-out forwards;
        pointer-events: none;
        z-index: 10000;
    `;
    
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        if (ripple && ripple.parentNode) {
            ripple.remove();
        }
    }, 600);
});

console.log('🌟 Advanced Cosmic Portfolio System Loaded Successfully!');