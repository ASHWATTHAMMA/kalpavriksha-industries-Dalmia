// Load footer component
function loadFooter() {
  const footerHTML = `
    <footer>
      <div class="footer-main">
        <div class="footer-section footer-branding">
          <div class="footer-logo">
            <img src="../assets/images/logo.png" alt="Kalpavriksha Logo" class="footer-logo-img" />
            <h3>Kalpavriksha</h3>
          </div>
          <p class="footer-tagline" data-i18n="footerTagline">IoT Solutions for Smarter Agriculture</p>
          <p class="footer-description" data-i18n="footerDescription">Empowering farmers with cutting-edge technology for sustainable and efficient farming practices.</p>
        </div>

        <div class="footer-section footer-links">
          <h4 data-i18n="footerQuickLinks">Quick Links</h4>
          <ul>
            <li><a href="product-soil-sensor.html" data-i18n="navSoilSensor">Soil Sensor</a></li>
            <li><a href="product-drip-irrigation.html" data-i18n="navSmartDrip">Smart Drip</a></li>
            <li><a href="product-agricultural-drone.html" data-i18n="navAgriDrone">Agri Drone</a></li>
            <li><a href="../index.html" data-i18n="footerDashboardAccess">Dashboard Access</a></li>
          </ul>
        </div>

        <div class="footer-section footer-contact">
          <h4 data-i18n="footerContactSupport">Contact & Support</h4>
          <ul>
            <li><i class="fa-solid fa-envelope"></i> support@kalpavriksha.in</li>
            <li><i class="fa-solid fa-phone"></i> +91 XXX-XXX-XXXX</li>
            <li><i class="fa-solid fa-location-dot"></i> Innovation Hub, India</li>
            <li class="footer-project-info" data-i18n="footerProjectInfo">A Heritage of Innovation and Sustainability</li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p data-i18n="footerCopyright">&copy; 2025 Kalpavriksha. All Rights Reserved.</p>
      </div>
    </footer>
  `;
  document.getElementById('footer-placeholder').innerHTML = footerHTML;
  
  // Apply translations if language manager exists
  if (typeof languageManager !== 'undefined' && languageManager) {
    languageManager.applyTranslations();
  }
}

// Load footer when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadFooter);
} else {
  loadFooter();
}
