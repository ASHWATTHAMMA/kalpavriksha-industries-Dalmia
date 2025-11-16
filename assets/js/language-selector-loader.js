// Language Selector Loader - Automatically loads language selector on all pages
(function() {
  // Language selector HTML template
  const languageSelectorHTML = `
    <div class="language-selector-container">
      <button class="language-button" id="languageButton" aria-label="Change Language">
        <i class="fas fa-language"></i>
      </button>
      <div class="language-menu" id="languageMenu">
        <div class="language-option" data-lang="en">English</div>
        <div class="language-option" data-lang="hi">हिंदी</div>
        <div class="language-option" data-lang="te">తెలుగు</div>
        <div class="language-option" data-lang="kn">ಕನ್ನಡ</div>
      </div>
    </div>
  `;

  // Load language selector
  function loadLanguageSelector() {
    // Check if already loaded
    if (document.getElementById('languageButton')) {
      console.log('Language selector already loaded');
      return;
    }

    // Insert at the end of body
    document.body.insertAdjacentHTML('beforeend', languageSelectorHTML);
    console.log('Language selector loaded');
    
    // Wait a bit for language manager to initialize, then set it up
    setTimeout(() => {
      if (typeof initLanguageManager === 'function') {
        const manager = initLanguageManager();
        manager.setupLanguageSelector();
        manager.updateLanguageSelector();
        console.log('Language manager initialized via initLanguageManager');
      } else if (typeof languageManager !== 'undefined' && languageManager) {
        languageManager.setupLanguageSelector();
        languageManager.updateLanguageSelector();
        console.log('Language manager initialized via global languageManager');
      } else {
        console.warn('Language manager not found');
      }
    }, 200);
  }

  // Load when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadLanguageSelector);
  } else {
    loadLanguageSelector();
  }
})();
