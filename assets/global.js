/**
 * Global JavaScript for Shopify Theme
 * Intimate Grooming Brand - Portugal & Spain
 */

// Theme namespace
window.Theme = window.Theme || {};

// Utility functions
Theme.Utils = {
  // Debounce function
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle function
  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Check if element is in viewport
  isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },

  // Smooth scroll to element
  scrollToElement(element, offset = 0) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  },

  // Format currency
  formatCurrency(amount, currency = 'EUR') {
    return new Intl.NumberFormat('pt-PT', {
      style: 'currency',
      currency: currency
    }).format(amount / 100);
  },

  // Get URL parameters
  getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  },

  // Set URL parameter
  setUrlParameter(name, value) {
    const url = new URL(window.location);
    url.searchParams.set(name, value);
    window.history.replaceState({}, '', url);
  }
};

// Cookie consent management
Theme.CookieConsent = {
  init() {
    this.cookieName = 'cookie_consent';
    this.cookieExpiry = 365; // days
    
    if (!this.hasConsent()) {
      this.showBanner();
    }
  },

  hasConsent() {
    return document.cookie.includes(`${this.cookieName}=accepted`);
  },

  showBanner() {
    const banner = document.querySelector('.cookie-consent-banner');
    if (banner) {
      banner.style.display = 'block';
      banner.setAttribute('aria-hidden', 'false');
    }
  },

  hideBanner() {
    const banner = document.querySelector('.cookie-consent-banner');
    if (banner) {
      banner.style.display = 'none';
      banner.setAttribute('aria-hidden', 'true');
    }
  },

  accept() {
    this.setCookie('accepted');
    this.hideBanner();
    this.enableAnalytics();
  },

  decline() {
    this.setCookie('declined');
    this.hideBanner();
  },

  setCookie(value) {
    const date = new Date();
    date.setTime(date.getTime() + (this.cookieExpiry * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${this.cookieName}=${value};${expires};path=/;SameSite=Strict`;
  },

  enableAnalytics() {
    // Enable Google Tag Manager if available
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted'
      });
    }
  }
};

// Accordion functionality
Theme.Accordion = {
  init() {
    const accordions = document.querySelectorAll('.accordion-item');
    accordions.forEach(accordion => {
      const header = accordion.querySelector('.accordion-header');
      const content = accordion.querySelector('.accordion-content');
      
      if (header && content) {
        header.addEventListener('click', () => {
          this.toggle(header, content);
        });
      }
    });
  },

  toggle(header, content) {
    const isExpanded = header.getAttribute('aria-expanded') === 'true';
    const icon = header.querySelector('.accordion-icon');
    
    // Update ARIA attributes
    header.setAttribute('aria-expanded', !isExpanded);
    
    // Toggle content
    if (isExpanded) {
      content.style.maxHeight = '0';
      if (icon) icon.classList.remove('rotate-45');
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      if (icon) icon.classList.add('rotate-45');
    }
  }
};

// Carousel functionality
Theme.Carousel = {
  init() {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
      this.initCarousel(carousel);
    });
  },

  initCarousel(carousel) {
    const track = carousel.querySelector('.carousel-track');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    const indicators = carousel.querySelectorAll('.carousel-indicator');
    
    if (!track || !items.length) return;
    
    let currentIndex = 0;
    const totalItems = items.length;
    const itemsPerView = this.getItemsPerView(carousel);
    
    // Set up event listeners
    if (prevBtn) {
      prevBtn.addEventListener('click', () => this.prev(carousel));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.next(carousel));
    }
    
    // Set up indicators
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => this.goToSlide(carousel, index));
    });
    
    // Auto-play if enabled
    const autoPlay = carousel.dataset.autoplay === 'true';
    if (autoPlay) {
      this.startAutoPlay(carousel);
    }
    
    // Handle resize
    window.addEventListener('resize', Theme.Utils.debounce(() => {
      this.updateCarousel(carousel);
    }, 250));
    
    // Initial setup
    this.updateCarousel(carousel);
  },

  getItemsPerView(carousel) {
    const width = window.innerWidth;
    if (width >= 1024) return 3;
    if (width >= 768) return 2;
    return 1;
  },

  updateCarousel(carousel) {
    const track = carousel.querySelector('.carousel-track');
    const items = carousel.querySelectorAll('.carousel-item');
    const itemsPerView = this.getItemsPerView(carousel);
    
    if (!track || !items.length) return;
    
    const itemWidth = 100 / itemsPerView;
    items.forEach(item => {
      item.style.flex = `0 0 ${itemWidth}%`;
    });
    
    this.goToSlide(carousel, 0);
  },

  goToSlide(carousel, index) {
    const track = carousel.querySelector('.carousel-track');
    const items = carousel.querySelectorAll('.carousel-item');
    const indicators = carousel.querySelectorAll('.carousel-indicator');
    
    if (!track || !items.length) return;
    
    const itemsPerView = this.getItemsPerView(carousel);
    const maxIndex = Math.max(0, items.length - itemsPerView);
    const targetIndex = Math.min(index, maxIndex);
    
    const translateX = -(targetIndex * (100 / itemsPerView));
    track.style.transform = `translateX(${translateX}%)`;
    
    // Update indicators
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === targetIndex);
    });
    
    // Update carousel data
    carousel.dataset.currentIndex = targetIndex;
  },

  next(carousel) {
    const currentIndex = parseInt(carousel.dataset.currentIndex || 0);
    const items = carousel.querySelectorAll('.carousel-item');
    const itemsPerView = this.getItemsPerView(carousel);
    const maxIndex = Math.max(0, items.length - itemsPerView);
    
    const nextIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    this.goToSlide(carousel, nextIndex);
  },

  prev(carousel) {
    const currentIndex = parseInt(carousel.dataset.currentIndex || 0);
    const items = carousel.querySelectorAll('.carousel-item');
    const itemsPerView = this.getItemsPerView(carousel);
    const maxIndex = Math.max(0, items.length - itemsPerView);
    
    const prevIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
    this.goToSlide(carousel, prevIndex);
  },

  startAutoPlay(carousel) {
    const interval = parseInt(carousel.dataset.autoplayInterval || 5000);
    carousel.autoPlayInterval = setInterval(() => {
      this.next(carousel);
    }, interval);
    
    // Pause on hover
    carousel.addEventListener('mouseenter', () => {
      clearInterval(carousel.autoPlayInterval);
    });
    
    carousel.addEventListener('mouseleave', () => {
      this.startAutoPlay(carousel);
    });
  }
};

// Lazy loading for images
Theme.LazyLoad = {
  init() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            this.loadImage(img);
            observer.unobserve(img);
          }
        });
      });
      
      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback for older browsers
      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => this.loadImage(img));
    }
  },

  loadImage(img) {
    const src = img.dataset.src;
    if (src) {
      img.src = src;
      img.removeAttribute('data-src');
      img.classList.add('loaded');
    }
  }
};

// Form validation
Theme.FormValidation = {
  init() {
    const forms = document.querySelectorAll('form[data-validate]');
    forms.forEach(form => {
      this.initForm(form);
    });
  },

  initForm(form) {
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearError(input));
    });
    
    form.addEventListener('submit', (e) => {
      if (!this.validateForm(form)) {
        e.preventDefault();
      }
    });
  },

  validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    const required = field.hasAttribute('required');
    
    let isValid = true;
    let errorMessage = '';
    
    if (required && !value) {
      isValid = false;
      errorMessage = 'Este campo é obrigatório';
    } else if (value) {
      switch (type) {
        case 'email':
          if (!this.isValidEmail(value)) {
            isValid = false;
            errorMessage = 'Por favor, insira um email válido';
          }
          break;
        case 'tel':
          if (!this.isValidPhone(value)) {
            isValid = false;
            errorMessage = 'Por favor, insira um telefone válido';
          }
          break;
      }
    }
    
    this.setFieldError(field, isValid ? '' : errorMessage);
    return isValid;
  },

  validateForm(form) {
    const fields = form.querySelectorAll('input, textarea, select');
    let isFormValid = true;
    
    fields.forEach(field => {
      if (!this.validateField(field)) {
        isFormValid = false;
      }
    });
    
    return isFormValid;
  },

  setFieldError(field, message) {
    const errorElement = field.parentNode.querySelector('.field-error');
    
    if (message) {
      field.classList.add('error');
      if (errorElement) {
        errorElement.textContent = message;
      } else {
        const error = document.createElement('span');
        error.className = 'field-error text-red-600 text-sm mt-1';
        error.textContent = message;
        field.parentNode.appendChild(error);
      }
    } else {
      field.classList.remove('error');
      if (errorElement) {
        errorElement.remove();
      }
    }
  },

  clearError(field) {
    field.classList.remove('error');
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
      errorElement.remove();
    }
  },

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  }
};

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  Theme.CookieConsent.init();
  Theme.Accordion.init();
  Theme.Carousel.init();
  Theme.LazyLoad.init();
  Theme.FormValidation.init();
  
  // Add smooth scrolling to anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        Theme.Utils.scrollToElement(target, 80);
      }
    });
  });
  
  // Add loading states to buttons
  const buttons = document.querySelectorAll('button[type="submit"]');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.form && button.form.checkValidity()) {
        button.classList.add('loading');
        button.disabled = true;
      }
    });
  });
  
  // Handle mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      mobileMenu.classList.toggle('open');
      mobileMenuToggle.setAttribute('aria-expanded', !isOpen);
      document.body.classList.toggle('menu-open', !isOpen);
    });
  }
  
  // Handle search functionality
  const searchInput = document.querySelector('.search-input');
  if (searchInput) {
    searchInput.addEventListener('input', Theme.Utils.debounce((e) => {
      const query = e.target.value;
      if (query.length > 2) {
        // Implement search functionality here
        console.log('Searching for:', query);
      }
    }, 300));
  }
  
  // Add animation classes when elements come into view
  if ('IntersectionObserver' in window) {
    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => animationObserver.observe(el));
  }
  
  console.log('Theme initialized successfully!');
});

// Export for use in other scripts
window.Theme = Theme;