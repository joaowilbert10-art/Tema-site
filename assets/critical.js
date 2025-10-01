/**
 * Critical JavaScript for theme performance
 * This file is loaded with blocking="render" for Core Web Vitals optimization
 */

// Theme initialization
document.addEventListener('DOMContentLoaded', function() {
  // Initialize theme functionality
  initializeTheme();
});

function initializeTheme() {
  // Initialize modals
  initializeModals();
  
  // Initialize search functionality
  initializeSearch();
  
  // Initialize quick add functionality
  initializeQuickAdd();
  
  // Initialize accessibility features
  initializeAccessibility();
}

function initializeModals() {
  // Modal functionality
  const modals = document.querySelectorAll('modal-dialog');
  
  modals.forEach(modal => {
    const closeButton = modal.querySelector('.modal__close-button');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        modal.close();
      });
    }
    
    // Close on escape key
    modal.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        modal.close();
      }
    });
  });
}

function initializeSearch() {
  // Search functionality
  const searchInputs = document.querySelectorAll('.search__input');
  
  searchInputs.forEach(input => {
    input.addEventListener('input', debounce(handleSearchInput, 300));
  });
}

function initializeQuickAdd() {
  // Quick add functionality
  const quickAddButtons = document.querySelectorAll('[data-quick-add]');
  
  quickAddButtons.forEach(button => {
    button.addEventListener('click', handleQuickAdd);
  });
}

function initializeAccessibility() {
  // Skip to content link
  const skipLink = document.querySelector('.skip-to-content-link');
  if (skipLink) {
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(skipLink.getAttribute('href'));
      if (target) {
        target.focus();
        target.scrollIntoView();
      }
    });
  }
  
  // Focus management for modals
  const modals = document.querySelectorAll('modal-dialog');
  modals.forEach(modal => {
    modal.addEventListener('open', () => {
      const firstFocusable = modal.querySelector('button, input, select, textarea, a[href]');
      if (firstFocusable) {
        firstFocusable.focus();
      }
    });
  });
}

function handleSearchInput(e) {
  const query = e.target.value;
  // Implement search functionality here
  console.log('Search query:', query);
}

function handleQuickAdd(e) {
  e.preventDefault();
  const productId = e.target.dataset.productId;
  // Implement quick add functionality here
  console.log('Quick add product:', productId);
}

// Utility function for debouncing
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

// Export for use in other scripts
window.theme = {
  initializeTheme,
  initializeModals,
  initializeSearch,
  initializeQuickAdd,
  initializeAccessibility
};
