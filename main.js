/**
 * Hat Bazar - Main JavaScript File
 * Contains global functionality used across all pages
 */

// ============================================
// DOM CONTENT LOADED - INITIALIZE EVERYTHING
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initStickyHeader();
    initSearchToggle();
    initBackToTop();
    initSmoothScroll();
    initCartCount();
    initCookieBanner();
    initAnimations();
    initDropdowns();
    initLanguageToggle();
    initLazyLoading();
    // Render Lucide icons for all static data-lucide attributes
    if (window.lucide) lucide.createIcons();
});

// Helper: call after any JS-rendered HTML that includes data-lucide attributes
function refreshIcons() {
    if (window.lucide) lucide.createIcons();
}
window.refreshIcons = refreshIcons;

// ============================================
// MOBILE MENU FUNCTIONALITY
// ============================================
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const sidebar = document.querySelector('.mobile-sidebar');
    const overlay = document.querySelector('.mobile-sidebar-overlay');
    const closeBtn = document.querySelector('.sidebar-close');

    if (!menuBtn || !sidebar) return;

    // Open menu
    menuBtn.addEventListener('click', function() {
        sidebar.classList.add('open');
        if (overlay) overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    });

    // Close menu function
    function closeMenu() {
        sidebar.classList.remove('open');
        if (overlay) overlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    // Close on overlay click
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }

    // Close on close button click
    if (closeBtn) {
        closeBtn.addEventListener('click', closeMenu);
    }

    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sidebar.classList.contains('open')) {
            closeMenu();
        }
    });

    // Handle mobile dropdowns
    const dropdownToggles = document.querySelectorAll('.sidebar-nav-link.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const parent = this.closest('.sidebar-nav-item');
            const menu = parent.querySelector('.sidebar-dropdown-menu');
            if (menu) {
                menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
                this.classList.toggle('open');
            }
        });
    });
}

// ============================================
// STICKY HEADER WITH SHADOW ON SCROLL
// ============================================
function initStickyHeader() {
    const header = document.querySelector('.main-header');
    if (!header) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateHeader() {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Hide/show header on scroll direction (optional)
        if (window.scrollY > lastScrollY && window.scrollY > 300) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }

        lastScrollY = window.scrollY;
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }, { passive: true });
}

// ============================================
// SEARCH BAR TOGGLE (MOBILE)
// ============================================
function initSearchToggle() {
    const searchToggle = document.querySelector('.search-toggle');
    const searchBar = document.querySelector('.search-bar');

    if (!searchToggle || !searchBar) return;

    searchToggle.addEventListener('click', function() {
        searchBar.classList.toggle('active');
        if (searchBar.classList.contains('active')) {
            searchBar.querySelector('input').focus();
        }
    });

    // Close search when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchBar.contains(e.target) && !searchToggle.contains(e.target)) {
            searchBar.classList.remove('active');
        }
    });
}

// ============================================
// BACK TO TOP BUTTON
// ============================================
function initBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    if (!backToTop) return;

    function toggleVisibility() {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true });

    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerHeight = document.querySelector('.main-header')?.offsetHeight || 0;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// UPDATE CART COUNT BADGE
// ============================================
function initCartCount() {
    updateCartCount();
}

function updateCartCount() {
    const cartBadge = document.querySelector('.cart-badge');
    if (!cartBadge) return;

    try {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

        cartBadge.textContent = totalItems;
        cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
    } catch (e) {
        console.error('Error updating cart count:', e);
    }
}

// Export for use in other files
window.updateCartCount = updateCartCount;

// ============================================
// COOKIE CONSENT BANNER
// ============================================
function initCookieBanner() {
    const banner = document.querySelector('.cookie-banner');
    if (!banner) return;

    // Check if user has already accepted
    if (localStorage.getItem('cookiesAccepted')) {
        return;
    }

    // Show banner after a short delay
    setTimeout(() => {
        banner.classList.add('visible');
    }, 1000);

    // Accept cookies
    const acceptBtn = banner.querySelector('.cookie-btn');
    if (acceptBtn) {
        acceptBtn.addEventListener('click', function() {
            localStorage.setItem('cookiesAccepted', 'true');
            banner.classList.remove('visible');
        });
    }
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initAnimations() {
    // Auto-add animation attributes to common elements if not present
    const autoAnimateSelectors = [
        '.section-header', 
        '.feature-item', 
        '.category-card', 
        '.product-card', 
        '.testimonial-card',
        '.brands-strip'
    ];
    
    autoAnimateSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach((el, index) => {
            if (!el.hasAttribute('data-animate')) {
                el.setAttribute('data-animate', 'fade-up');
                // Stagger effect
                el.style.transitionDelay = `${(index % 4) * 0.1}s`;
            }
        });
    });

    const animatedElements = document.querySelectorAll('[data-animate]');
    if (animatedElements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => {
        el.classList.add('animation-ready');
        observer.observe(el);
    });
}

// ============================================
// DROPDOWN MENUS
// ============================================
function initDropdowns() {
    // Desktop dropdowns are handled via CSS hover
    // This handles click for touch devices
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');

        if (!toggle || !menu) return;

        // For touch devices
        toggle.addEventListener('touchstart', function(e) {
            if (!dropdown.classList.contains('touch-open')) {
                e.preventDefault();
                // Close other dropdowns
                dropdowns.forEach(d => d.classList.remove('touch-open'));
                dropdown.classList.add('touch-open');
            }
        }, { passive: false });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(d => d.classList.remove('touch-open'));
        }
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Format price in BDT
 * @param {number} price - Price value
 * @returns {string} Formatted price
 */
function formatPrice(price) {
    return '৳' + price.toLocaleString('bn-BD');
}
window.formatPrice = formatPrice;

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in ms
 * @returns {Function} Debounced function
 */
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
window.debounce = debounce;

/**
 * Throttle function
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in ms
 * @returns {Function} Throttled function
 */
function throttle(func, limit) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
window.throttle = throttle;

/**
 * Show toast notification
 * @param {string} message - Toast message
 * @param {string} type - Toast type (success, error, warning, info)
 * @param {number} duration - Duration in ms
 */
function showToast(message, type = 'success', duration = 3000) {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const svgIcons = {
        success: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
        error:   '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
        warning: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
        info:    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>'
    };

    toast.innerHTML = `
        <span class="toast-icon">${svgIcons[type]}</span>
        <div class="toast-content" style="flex: 1;">
            <span class="toast-message">${message}</span>
            <div class="toast-progress-bar" style="animation-duration: ${duration}ms;"></div>
        </div>
        <button class="toast-close"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
    `;

    container.appendChild(toast);

    toast.querySelector('.toast-close').addEventListener('click', () => {
        removeToast(toast);
    });

    setTimeout(() => {
        removeToast(toast);
    }, duration);
}
window.showToast = showToast;

function removeToast(toast) {
    toast.classList.add('hiding');
    toast.addEventListener('animationend', () => {
        toast.remove();
    });
}

/**
 * Confirm dialog wrapper
 * @param {string} message - Confirmation message
 * @returns {boolean} User confirmation
 */
function confirmAction(message) {
    return confirm(message);
}
window.confirmAction = confirmAction;

/**
 * Get URL parameters
 * @returns {URLSearchParams} URL search params
 */
function getUrlParams() {
    return new URLSearchParams(window.location.search);
}
window.getUrlParams = getUrlParams;

/**
 * Set URL parameter without reloading
 * @param {string} key - Parameter key
 * @param {string} value - Parameter value
 */
function setUrlParam(key, value) {
    const url = new URL(window.location);
    if (value) {
        url.searchParams.set(key, value);
    } else {
        url.searchParams.delete(key);
    }
    window.history.pushState({}, '', url);
}
window.setUrlParam = setUrlParam;

// ============================================
// LANGUAGE TOGGLE (EN / Bengali)
// ============================================
function initLanguageToggle() {
    const btn = document.querySelector('.language-toggle');
    if (!btn) return;
    let isEnglish = localStorage.getItem('lang') !== 'bn';
    btn.textContent = isEnglish ? 'EN / বাংলা' : 'বাংলা / EN';
    btn.addEventListener('click', function() {
        isEnglish = !isEnglish;
        localStorage.setItem('lang', isEnglish ? 'en' : 'bn');
        this.textContent = isEnglish ? 'EN / বাংলা' : 'বাংলা / EN';
        showToast(isEnglish ? 'Switched to English' : 'বাংলায় পরিবর্তন করা হয়েছে', 'info');
    });
}

function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// initLazyLoading is called in the main DOMContentLoaded block above

// ============================================
// FORM VALIDATION HELPERS
// ============================================

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} Is valid
 */
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
window.isValidEmail = isValidEmail;

/**
 * Validate phone number (Bangladesh format)
 * @param {string} phone - Phone to validate
 * @returns {boolean} Is valid
 */
function isValidPhone(phone) {
    const re = /^(\+?88)?01[3-9]\d{8}$/;
    return re.test(phone.replace(/\s/g, ''));
}
window.isValidPhone = isValidPhone;

/**
 * Show form error
 * @param {HTMLElement} input - Input element
 * @param {string} message - Error message
 */
function showInputError(input, message) {
    input.classList.add('error');

    // Remove existing error
    const existingError = input.parentElement.querySelector('.form-error-message');
    if (existingError) existingError.remove();

    // Add error message
    const error = document.createElement('span');
    error.className = 'form-error-message';
    error.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:4px;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> ${message}`;
    input.parentElement.appendChild(error);
}
window.showInputError = showInputError;

/**
 * Clear form error
 * @param {HTMLElement} input - Input element
 */
function clearInputError(input) {
    input.classList.remove('error');
    const error = input.parentElement.querySelector('.form-error-message');
    if (error) error.remove();
}
window.clearInputError = clearInputError;
