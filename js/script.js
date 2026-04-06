// ============================================
// 2026 PROFESSIONAL PORTFOLIO JS
// Interactive, Smooth, Modern - Full Version
// ============================================

// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // 1. NAVBAR SCROLL EFFECT (Glass morphism)
    // ============================================
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // ============================================
    // 2. MOBILE MENU TOGGLE (Hamburger)
    // ============================================
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            // Change hamburger icon
            const icon = hamburger.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navbar.contains(event.target) && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
    
    // ============================================
    // 3. SMOOTH SCROLLING for all anchor links
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip if it's just "#" or empty
            if (targetId === '#' || targetId === '') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    const icon = hamburger.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
                
                // Smooth scroll to target
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without jumping
                history.pushState(null, null, targetId);
            }
        });
    });
    
    // ============================================
    // 4. ACTIVE NAVIGATION HIGHLIGHTING
    // ============================================
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    function updateActiveNav() {
        let current = '';
        const scrollPosition = window.scrollY + 100; // Offset for navbar
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            const href = item.getAttribute('href');
            if (href === `#${current}`) {
                item.classList.add('active');
            }
        });
    }
    
    if (sections.length > 0 && navItems.length > 0) {
        window.addEventListener('scroll', updateActiveNav);
        window.addEventListener('load', updateActiveNav);
    }
    
    // ============================================
    // 5. SCROLL REVEAL ANIMATION (Intersection Observer)
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                // Optional: stop observing after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Apply animation to cards and sections
    const animatedElements = document.querySelectorAll('.skill-card, .project-card, .service-card, .cert-card');
    animatedElements.forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(element);
    });
    
    // ============================================
    // 6. HERO SECTION FADE-IN ANIMATION
    // ============================================
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = "0";
        heroContent.style.transform = "translateY(20px)";
        heroContent.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        
        setTimeout(() => {
            heroContent.style.opacity = "1";
            heroContent.style.transform = "translateY(0)";
        }, 100);
    }
    
    // ============================================
    // 7. TYPING EFFECT (Optional - for hero subtitle)
    // ============================================
    // Uncomment this section if you want a typing animation
    /*
    const typingElement = document.querySelector('.hero-description');
    if (typingElement && !typingElement.hasAttribute('data-typed')) {
        const originalText = typingElement.innerHTML;
        typingElement.setAttribute('data-typed', 'true');
        typingElement.innerHTML = '';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < originalText.length) {
                typingElement.innerHTML += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
            }
        }, 30);
    }
    */
    
    // ============================================
    // 8. FORM VALIDATION (For request service)
    // ============================================
    const requestForm = document.querySelector('.request-form');
    if (requestForm) {
        requestForm.addEventListener('submit', function(e) {
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const service = document.getElementById('service');
            const message = document.getElementById('message');
            
            let isValid = true;
            let errorMessage = '';
            
            // Simple validation
            if (name && name.value.trim() === '') {
                isValid = false;
                errorMessage += 'Please enter your name.\n';
                name.style.borderColor = '#ef4444';
            } else if (name) {
                name.style.borderColor = '';
            }
            
            if (email && email.value.trim() === '') {
                isValid = false;
                errorMessage += 'Please enter your email.\n';
                email.style.borderColor = '#ef4444';
            } else if (email && !isValidEmail(email.value)) {
                isValid = false;
                errorMessage += 'Please enter a valid email address.\n';
                email.style.borderColor = '#ef4444';
            } else if (email) {
                email.style.borderColor = '';
            }
            
            if (service && service.value === '') {
                isValid = false;
                errorMessage += 'Please select a service.\n';
                service.style.borderColor = '#ef4444';
            } else if (service) {
                service.style.borderColor = '';
            }
            
            if (message && message.value.trim() === '') {
                isValid = false;
                errorMessage += 'Please enter your message.\n';
                message.style.borderColor = '#ef4444';
            } else if (message) {
                message.style.borderColor = '';
            }
            
            if (!isValid) {
                e.preventDefault();
                alert(errorMessage);
            }
        });
    }
    
    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // ============================================
    // 9. PRELOADER (Optional - removes after load)
    // ============================================
    window.addEventListener('load', function() {
        // Remove any preloader if exists
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
        
        // Add loaded class to body
        document.body.classList.add('loaded');
    });
    
    // ============================================
    // 10. BACK TO TOP BUTTON (Create if doesn't exist)
    // ============================================
    // Create back to top button
    let backToTop = document.querySelector('.back-to-top');
    
    if (!backToTop) {
        backToTop = document.createElement('button');
        backToTop.className = 'back-to-top';
        backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTop.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: var(--gradient-1, linear-gradient(135deg, #2563eb, #7c3aed));
            color: white;
            border: none;
            cursor: pointer;
            display: none;
            align-items: center;
            justify-content: center;
            font-size: 1.25rem;
            z-index: 999;
            transition: all 0.3s;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        `;
        document.body.appendChild(backToTop);
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Show/hide back to top button
    window.addEventListener('scroll', () => {
        if (backToTop) {
            if (window.scrollY > 300) {
                backToTop.style.display = 'flex';
            } else {
                backToTop.style.display = 'none';
            }
        }
    });
    
    // ============================================
    // 11. PROJECT FILTERING (Optional enhancement)
    // ============================================
    // Add filter buttons if you want to categorize projects
    // This is optional - uncomment to use
    
    /*
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-card');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                projects.forEach(project => {
                    if (filter === 'all' || project.getAttribute('data-category') === filter) {
                        project.style.display = 'block';
                        setTimeout(() => {
                            project.style.opacity = '1';
                            project.style.transform = 'scale(1)';
                        }, 10);
                    } else {
                        project.style.opacity = '0';
                        project.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            project.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    */
    
    // ============================================
    // 12. CONSOLE WELCOME MESSAGE (Fun touch)
    // ============================================
    console.log('%c🚀 Welcome to Brian Wafula\'s Portfolio!', 'color: #2563eb; font-size: 16px; font-weight: bold;');
    console.log('%c👋 Thanks for visiting. Check out my projects and feel free to reach out!', 'color: #64748b; font-size: 12px;');
    
});

// ============================================
// 13. PREVENT DOUBLE SUBMISSION ON FORMS
// ============================================
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            // Re-enable after 3 seconds (in case of error)
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Submit Request';
            }, 3000);
        }
    });
});

// ============================================
// 14. LAZY LOAD IMAGES (Performance)
// ============================================
// Add loading="lazy" to all images if not already set
document.querySelectorAll('img').forEach(img => {
    if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
    }
});

// ============================================
// 15. ADD CSS FOR BACK TO TOP BUTTON HOVER
// ============================================
const style = document.createElement('style');
style.textContent = `
    .back-to-top:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 20px rgba(37, 99, 235, 0.3);
    }
    
    .back-to-top:active {
        transform: translateY(0);
    }
    
    /* Loading state */
    body.loaded .preloader {
        display: none;
    }
    
    /* Focus styles for accessibility */
    a:focus-visible,
    button:focus-visible,
    input:focus-visible,
    textarea:focus-visible {
        outline: 2px solid #2563eb;
        outline-offset: 2px;
    }
    
    /* Reduce motion preference */
    @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }
`;
document.head.appendChild(style);