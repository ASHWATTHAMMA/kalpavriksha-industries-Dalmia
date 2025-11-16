// Language Handler - Manages multilingual functionality
class LanguageManager {
  constructor() {
    this.currentLanguage = this.getSavedLanguage() || 'en';
    this.translations = translations; // From translations.js
  }

  // Get saved language from localStorage
  getSavedLanguage() {
    return localStorage.getItem('selectedLanguage');
  }

  // Save language to localStorage
  saveLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
  }

  // Change language
  changeLanguage(lang) {
    if (this.translations[lang]) {
      this.currentLanguage = lang;
      this.saveLanguage(lang);
      this.applyTranslations();
      this.updateLanguageSelector();
    } else {
      console.error(`Language '${lang}' not found in translations`);
    }
  }

  // Apply translations to all elements with data-i18n attribute
  applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.translations[this.currentLanguage][key];
      
      if (translation) {
        // Check if element has a placeholder attribute
        if (element.hasAttribute('placeholder')) {
          element.setAttribute('placeholder', translation);
        } else {
          element.textContent = translation;
        }
      } else {
        console.warn(`Translation key '${key}' not found for language '${this.currentLanguage}'`);
      }
    });

    // Update HTML lang attribute
    document.documentElement.lang = this.currentLanguage;

    // Update analysis cards if function exists
    if (typeof updateAnalysisCards === 'function') {
      updateAnalysisCards();
    }
  }

  // Update language selector to show current selection
  updateLanguageSelector() {
    const options = document.querySelectorAll('.language-option');
    options.forEach(option => {
      if (option.getAttribute('data-lang') === this.currentLanguage) {
        option.classList.add('active');
      } else {
        option.classList.remove('active');
      }
    });
  }

  // Initialize language system
  init() {
    this.applyTranslations();
    this.updateLanguageSelector();
    this.setupLanguageSelector();
  }

  // Setup language selector event listener
  setupLanguageSelector() {
    const button = document.getElementById('languageButton');
    const menu = document.getElementById('languageMenu');
    const options = document.querySelectorAll('.language-option');

    // Toggle menu on button click
    if (button && menu) {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('active');
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !button.contains(e.target)) {
          menu.classList.remove('active');
        }
      });
    }

    // Handle language option clicks
    options.forEach(option => {
      option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        this.changeLanguage(lang);
        menu.classList.remove('active');
      });
    });
  }

  // Get current language
  getCurrentLanguage() {
    return this.currentLanguage;
  }
}

// Initialize language manager when DOM is ready
let languageManager;

function initLanguageManager() {
  if (!languageManager) {
    languageManager = new LanguageManager();
    languageManager.init();
  }
  return languageManager;
}

document.addEventListener('DOMContentLoaded', function() {
  initLanguageManager();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = LanguageManager;
}
