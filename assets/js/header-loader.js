// Load header component
function loadHeader() {
  const headerHTML = `
    <header>
      <div class="logo">
        <img src="../assets/images/logo.png" alt="Kalpavriksha Logo" class="logo-img" />
        <h2>Kalpavriksha</h2>
      </div>
      <nav class="nav-links">
        <a href="product-soil-sensor.html" class="nav-link" data-i18n="navSoilSensor">Soil Sensor</a>
        <a href="product-drip-irrigation.html" class="nav-link" data-i18n="navSmartDrip">Smart Drip</a>
        <a href="product-agricultural-drone.html" class="nav-link" data-i18n="navAgriDrone">Agri Drone</a>
      </nav>
      <a href="../index.html" class="logout-btn" data-i18n="navLogout">Logout</a>
    </header>
  `;
  document.getElementById('header-placeholder').innerHTML = headerHTML;
  
  // Highlight active page
  highlightActivePage();
  
  // Apply translations if language manager exists
  if (typeof languageManager !== 'undefined' && languageManager) {
    languageManager.applyTranslations();
  }
}

// Highlight the current page in navigation
function highlightActivePage() {
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
}

// Load header when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadHeader);
} else {
  loadHeader();
}
