// =============================
// Kalpavriksha Industries Script
// =============================

(function() {
  // Smooth scroll for nav links
  document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      // Don't prevent default for actual page links
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Navbar background change on scroll
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#14532d';
      navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.15)';
    } else {
      navbar.style.backgroundColor = '#166534';
      navbar.style.boxShadow = 'none';
    }
  });

  // Fade-in animation when scrolling to sections
  const fadeElements = document.querySelectorAll('.product-card, .about p');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  fadeElements.forEach(el => observer.observe(el));
})();

// Component loading functionality
document.addEventListener('DOMContentLoaded', function() {
  // Direct navbar insertion instead of fetch
  const navbarHTML = `<header class="navbar">
  <div class="container nav-content">
    <h1 class="logo"><a href="index.html">Kalpavriksha Industries</a></h1>
    <nav class="nav-links">
      <div class="nav-main-links">
        <a href="index.html" class="nav-link" data-i18n="home">Home</a>
        <a href="about.html" class="nav-link" data-i18n="about">About Us</a>
        <a href="products.html" class="nav-link" data-i18n="products">Products</a>
        <a href="contact.html" class="nav-link" data-i18n="contact">Contact Us</a>
      </div>
      <div class="nav-secondary-buttons">
        <a href="signin.html" class="sign-in-btn" data-i18n="signin">Sign In</a>
        <div class="language-selector">
          <button class="language-btn">EN <span class="dropdown-icon">▼</span></button>
          <div class="language-dropdown">
            <a href="#" data-lang="en">English</a>
            <a href="#" data-lang="hi">हिंदी</a>
            <a href="#" data-lang="te">తెలుగు</a>
            <a href="#" data-lang="kn">ಕನ್ನಡ</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</header>`;

  // Direct footer insertion instead of fetch
  const footerHTML = `<footer id="contact" class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-column">
        <h4 data-i18n="footer-brand">Kalpavriksha Industries</h4>
        <p class="mission-statement" data-i18n="footer-mission">Pioneering agri-tech solutions for a sustainable future.</p>
      </div>
      
      <div class="footer-column">
        <h4 data-i18n="quick-links">Quick Links</h4>
        <ul class="footer-links">
          <li><a href="index.html" data-i18n="home">Home</a></li>
          <li><a href="about.html" data-i18n="about">About Us</a></li>
          <li><a href="products.html" data-i18n="products">Products</a></li>
          <li><a href="contact.html" data-i18n="contact">Contact Us</a></li>
        </ul>
      </div>
      
      <div class="footer-column">
        <h4 data-i18n="contact-legal">Contact & Legal</h4>
        <p><strong>Address:</strong> 419, Sector D, Sushant Gold City, Delhi-110092</p>
        <p><strong>Email:</strong> info@kalpvriksha.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p class="legal-links">
          <a href="privacy.html">Privacy Policy</a> | <a href="terms.html">Terms & Conditions</a>
        </p>
        <div class="social-icons">
          <a href="https://www.linkedin.com/company/kalpavriksha-industries" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://twitter.com/kalpavriksha" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          <a href="https://www.facebook.com/kalpavriksha" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="https://www.youtube.com/@kalpavriksha" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>© 2025 Kalpavriksha Industries Pvt Ltd. All Rights Reserved.</p>
    </div>
  </div>
</footer>`;

  // Insert navbar and footer
  const navbarPlaceholder = document.getElementById('navbar-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');
  
  if (navbarPlaceholder) {
    navbarPlaceholder.innerHTML = navbarHTML;
  }
  
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = footerHTML;
  }
  
  // Highlight the active page link
  const currentPage = window.location.pathname.split('/').pop();
  if (currentPage) {
    const activeLink = document.querySelector(`.nav-links a[href="${currentPage}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }
  
  // Small delay to ensure DOM is fully updated
  setTimeout(function() {
    initializeLanguageSelector();
  }, 100);
});

// Language selector initialization function
function initializeLanguageSelector() {
  // Language selector functionality
  const languageLinks = document.querySelectorAll('.language-dropdown a');
  const languageBtn = document.querySelector('.language-btn');
  
  if (!languageBtn || languageLinks.length === 0) {
    console.error('Language selector not found in DOM');
    return;
  }
  
  // Translation data for different languages
  const translations = {
    'en': {
      'home': 'Home',
      'about': 'About Us',
      'products': 'Products',
      'contact': 'Contact Us',
      'signin': 'Sign In',
      
      // Products Page Keys
      'product_1_title': 'Kalpavriksha Smart Sensor',
      'product_1_subtitle': 'Real-time AI-powered farm monitoring device',
      'product_1_description': 'Tracks soil health, humidity, light, and temperature — empowering farmers with intelligent, data-driven insights.',
      'product_1_tagline': 'Smarter Fields. Healthier Crops.',
      'product_1_price_cta': 'Starting ₹3,499',
      'product_1_feature_1_name': 'Light Detection',
      'product_1_feature_1_desc': 'Optimizes sunlight exposure',
      'product_1_feature_2_name': 'Soil Moisture',
      'product_1_feature_2_desc': 'Prevents over-irrigation',
      'product_1_feature_3_name': 'Nutrient Monitoring',
      'product_1_feature_3_desc': 'Ensures balanced soil',
      'product_1_feature_4_name': 'Wireless Connectivity',
      'product_1_feature_4_desc': 'Syncs data to your phone',
      'product_1_purchase_subheader': 'Available for starting at ₹3,499',
      'product_1_kit_1_name': 'Home Kit – ₹3,499',
      'product_1_kit_1_desc': 'For small gardens',
      'product_1_kit_2_name': 'Pro Kit – ₹7,999',
      'product_1_kit_2_desc': 'For farms up to 5 acres',
      'product_2_title': 'Kalpavriksha Soil Quality Sensor',
      'product_2_subtitle': 'Know Your Soil. Grow with Confidence.',
      'product_2_description': 'An advanced soil testing kit designed to measure pH levels, nutrient balance, and sunlight exposure. It helps farmers and gardeners assess soil quality instantly, leading to smarter planting decisions and improved crop productivity.',
      'product_2_tagline': 'Know Your Soil. Grow with Confidence.',
      'product_2_price_cta': 'Starting ₹2,999',
      'product_2_feature_1_name': 'pH Monitoring',
      'product_2_feature_1_desc': 'Analyze soil acidity and alkalinity',
      'product_2_feature_2_name': 'Nutrient Index',
      'product_2_feature_2_desc': 'Evaluate soil’s fertility levels',
      'product_2_feature_3_name': 'Sunlight Detection',
      'product_2_feature_3_desc': 'Track light intensity for ideal placement',
      'product_2_feature_4_name': 'Instant Readings',
      'product_2_feature_4_desc': 'Accurate results in under 10 seconds',
      'product_2_purchase_subheader': 'Available for starting at ₹2,999',
      'product_2_kit_1_name': 'Standard Kit – ₹2,999',
      'product_2_kit_1_desc': 'For home and garden use',
      'product_2_kit_2_name': 'Professional Kit – ₹6,499',
      'product_2_kit_2_desc': 'For large-scale farms and institutions',
      'product_3_title': 'Smart Drip Irrigation Mechanism',
      'product_3_subtitle': 'Every Drop Counts.',
      'product_3_description': 'An intelligent drip irrigation system that automatically detects dry zones and supplies precise amounts of water only where needed. This ensures optimal hydration while minimizing water waste — perfect for eco-friendly farming.',
      'product_3_tagline': 'Every Drop Counts.',
      'product_3_price_cta': 'Starting ₹4,999',
      'product_3_feature_1_name': 'Smart Moisture Detection',
      'product_3_feature_1_desc': 'Identifies dry soil instantly',
      'product_3_feature_2_name': 'Targeted Drip Delivery',
      'product_3_feature_2_desc': 'Prevents water wastage',
      'product_3_feature_3_name': 'Automated Control',
      'product_3_feature_3_desc': 'Works autonomously with AI logic',
      'product_3_feature_4_name': 'Solar Powered',
      'product_3_feature_4_desc': 'Efficient and sustainable operation',
      'product_3_purchase_subheader': 'Available for starting at ₹4,999',
      'product_3_kit_1_name': 'Basic Kit – ₹4,999',
      'product_3_kit_1_desc': 'For gardens and small farms',
      'product_3_kit_2_name': 'Pro Irrigation Setup – ₹9,999',
      'product_3_kit_2_desc': 'For medium to large fields',
      'product_4_title': 'Verdant Drone',
      'product_4_subtitle': 'Your Farm’s Eye in the Sky.',
      'product_4_description': 'A next-generation autonomous drone for real-time crop monitoring, disease detection, and precision spraying. Equipped with AI analysis, it helps farmers identify crop health issues, manage irrigation, and forecast yield more efficiently.',
      'product_4_tagline': 'Your Farm’s Eye in the Sky.',
      'product_4_price_cta': 'Starting ₹29,999',
      'product_4_feature_1_name': 'Crop Scanning',
      'product_4_feature_1_desc': 'Detect pests, dryness, and disease instantly',
      'product_4_feature_2_name': 'Weather Forecasting',
      'product_4_feature_2_desc': 'Predict rainfall and temperature shifts',
      'product_4_feature_3_name': 'Smart AI Mapping',
      'product_4_feature_3_desc': 'Suggests ideal soil and irrigation needs',
      'product_4_feature_4_name': 'Real-Time Alerts',
      'product_4_feature_4_desc': 'Immediate insights via Kalpavriksha mobile app',
      'product_4_purchase_subheader': 'Available for starting at ₹29,999',
      'product_4_kit_1_name': 'Scout Drone – ₹29,999',
      'product_4_kit_1_desc': 'For small and mid-size farms',
      'product_4_kit_2_name': 'Pro Drone – ₹59,999',
      'product_4_kit_2_desc': 'With advanced AI analytics and app sync',
      
      // Generic Product Keys
      'add-to-cart': 'Add to Cart',
      'request-demo': 'Request a Free Demo',
      'key-features': 'Key Features',
      'real-time-monitoring': 'Real-time monitoring powered by AI',
      'get-yours-today': 'Get Yours Today',

      // Home Page Keys
      'hero-title': 'Transforming Agriculture Through Innovation',
      'hero-subtitle': 'Empowering farmers with AI-driven precision tools for a sustainable future.',
      'explore': 'Explore Our Products',
      'about-title': 'About Us',
      'about-text-1': 'Kalpavriksha Pvt Ltd is a pioneer in agri-tech innovation, dedicated to transforming modern farming with advanced sensor technology and AI solutions.',
      'about-text-2': 'From humble beginnings to becoming a trusted name in precision agriculture, our journey reflects our unwavering commitment to farmers\' prosperity and environmental sustainability.',
      'read-story': 'Read Our Full Story',
      'data-monitor-title': 'Data We Monitor',
      'light-condition': 'Light Condition',
      'light-desc': 'Real-time tracking of sunlight exposure to ensure optimal photosynthesis.',
      'soil-health': 'Soil Health',
      'soil-desc': 'Continuous analysis of soil nutrients, moisture, and pH levels.',
      'growth-analysis': 'Growth Analysis',
      'growth-desc': 'AI-powered insights into plant growth stages and potential issues.',
      'water-usage': 'Water Usage',
      'water-desc': 'Smart monitoring of water consumption to optimize irrigation efficiency.',
      'flagship-products': 'Our Flagship Products',
      'soil-sensor': 'Soil Quality Sensor',
      'soil-sensor-desc': 'Measure pH, nutrients, and sunlight with precision using our Tusmad 3-in-1 Sensor — empowering soil health optimization for any farm.',
      'drip-irrigation': 'Advanced Drip Irrigation',
      'drip-desc': 'Smart sensors detect dry zones and deliver precise hydration, conserving water while maximizing yield consistency.',
      'verdant-drone': 'Verdant Drone',
      'drone-desc': 'Autonomous aerial system for crop monitoring, pest detection, and weather-based insights to guide effective farm management.',
      'agritech-app': 'Kalpavriksha AgriTech App',
      'app-desc': 'Monitor your fields, track data, and receive real-time alerts — seamlessly connecting all Verdant products for smarter decisions.',
      'learn-more': 'Learn More',
      
      // Footer Keys
      'quick-links': 'Quick Links',
      'contact-legal': 'Contact & Legal',
      'footer-brand': 'Kalpavriksha Industries',
      'footer-mission': 'Pioneering agri-tech solutions for a sustainable future.',
      
      // About Us Page Keys
      'about-page-title': 'About Us',
      'about-intro-1': 'At <strong>Kalpavriksha Pvt Ltd</strong>, we believe farming is more than a livelihood—it\'s the heartbeat of our nation. Founded on <strong>3rd January 2025</strong>, <strong>Kalpvriksha</strong> was created to bridge the gap between traditional agriculture and cutting-edge technology, helping farmers make confident, data-driven decisions for a greener tomorrow.',
      'about-intro-2': 'The name <em>Kalpavriksha</em> originates from the <strong>Sanskrit</strong> word <strong>"Kalpavṛkṣa"</strong>, meaning a <strong>wish-fulfilling divine tree</strong>. In ancient Indian mythology, it symbolizes a <strong>source of abundance, prosperity, and fulfillment</strong>, granting every sincere wish—reflecting the idea of <strong>limitless potential and benevolent creation</strong>.',
      'vision-title': 'Our Vision',
      'vision-text-1': 'To <strong>empower</strong> every farmer with tools that <strong>think</strong>, <strong>learn</strong>, and <strong>adapt</strong>—making farming <strong>effortless</strong>, <strong>sustainable</strong>, and <strong>rewarding</strong>. We dream of a future where every seed is planted with <strong>knowledge</strong>, every drop of water <strong>counts</strong>, and every harvest tells a story of <strong>success</strong>.',
      'vision-text-2': 'Kalpvriksha isn\'t just building machines; we\'re building <strong>trust</strong> and <strong>empowerment</strong> in the hands of farmers who form India\'s backbone.',
      'journey-title': 'Our Journey',
      'journey-text-1': 'It began with a <strong>simple soil test</strong> and a big realization—farmers face uncertainty every single day. How healthy is the soil? When should irrigation start? What if pests strike overnight? Kalpvriksha was born to answer these questions using <strong>AI</strong>, <strong>IoT</strong>, and <strong>data analytics</strong>—all while keeping things simple.',
      'journey-text-2': 'From local farms to national innovation expos, Kalpvriksha has grown from a small idea into a powerful movement that\'s redefining agriculture with intelligence and care.',
      'innovation-title': 'Innovation Rooted in Purpose',
      'innovation-text': 'Every technology we design aims to make a real difference—from <strong>monitoring soil health</strong> to <strong>automating irrigation</strong> and protecting crops. Our AI-driven solutions are <strong>tested in real farms with real farmers</strong>, ensuring reliability and simplicity.',
      'explore-innovations': 'Explore Our Innovations',
      'promise-title': 'The Kalpvriksha Promise',
      'promise-1': '<strong>Smarter Farming:</strong> AI and sensors that simplify your daily work.',
      'promise-2': '<strong>Sustainable Growth:</strong> Save water, improve soil health, and protect the planet.',
      'promise-3': '<strong>Farmer First:</strong> Every solution begins with your needs and feedback.',
      'revolution-title': 'Join the Revolution',
      'revolution-text': 'Ready to transform your farming practices with cutting-edge technology? Connect with our team of agricultural experts today.',
      'get-started': 'Get Started Today',
      
      // Contact Us Page Keys
      'contact-page-title': 'Get in Touch',
      'contact-subtitle': 'We\'d love to hear from you. Our team is ready to assist with sales inquiries, technical support, or partnership discussions.',
      'send-message': 'Send Us a Message',
      'your-name': 'Your Name',
      'your-email': 'Your Email',
      'subject': 'Subject',
      'your-message': 'Your Message',
      'send-message-btn': 'Send Message',
      'office-details': 'Our Office Details',
      'head-office': 'Head Office Address',
      'call-us': 'Call Us',
      'email-us': 'Email Us',
      'sales-general': 'Sales & General',
      'tech-support': 'Technical Support',
      'thank-you': 'Thank you',
      'message-received': 'Your message has been received. We\'ll be in touch shortly.'
    },
    'hi': {
      'home': 'होम',
      'about': 'हमारे बारे में',
      'products': 'उत्पाद',
      'contact': 'संपर्क करें',
      'signin': 'साइन इन',
      
      // Products Page Keys
      'product_1_title': 'कल्पवृक्ष स्मार्ट सेंसर',
      'product_1_subtitle': 'वास्तविक समय एआई-संचालित खेत निगरानी उपकरण',
      'product_1_description': 'मिट्टी के स्वास्थ्य, आर्द्रता, प्रकाश और तापमान को ट्रैक करता है - किसानों को बुद्धिमान, डेटा-संचालित अंतर्दृष्टि के साथ सशक्त बनाता है।',
      'product_1_tagline': 'स्मार्ट खेत। स्वस्थ फसलें।',
      'product_1_price_cta': '₹3,499 से शुरू',
      'product_1_feature_1_name': 'प्रकाश का पता लगाना',
      'product_1_feature_1_desc': 'धूप के जोखिम को अनुकूलित करता है',
      'product_1_feature_2_name': 'मिट्टी की नमी',
      'product_1_feature_2_desc': 'अत्यधिक सिंचाई को रोकता है',
      'product_1_feature_3_name': 'पोषक तत्वों की निगरानी',
      'product_1_feature_3_desc': 'संतुलित मिट्टी सुनिश्चित करता है',
      'product_1_feature_4_name': 'वायरलेस कनेक्टिविटी',
      'product_1_feature_4_desc': 'आपके फोन पर डेटा सिंक करता है',
      'product_1_purchase_subheader': '₹3,499 से शुरू होकर उपलब्ध है',
      'product_1_kit_1_name': 'होम किट – ₹3,499',
      'product_1_kit_1_desc': 'छोटे बगीचों के लिए',
      'product_1_kit_2_name': 'प्रो किट – ₹7,999',
      'product_1_kit_2_desc': '5 एकड़ तक के खेतों के लिए',
      'product_2_title': 'कल्पवृक्ष मृदा गुणवत्ता सेंसर',
      'product_2_subtitle': 'अपनी मिट्टी को जानें। आत्मविश्वास के साथ बढ़ें।',
      'product_2_description': 'पीएच स्तर, पोषक तत्व संतुलन और धूप के जोखिम को मापने के लिए डिज़ाइन किया गया एक उन्नत मिट्टी परीक्षण किट। यह किसानों और बागवानों को मिट्टी की गुणवत्ता का तुरंत आकलन करने में मदद करता है, जिससे बेहतर रोपण निर्णय और बेहतर फसल उत्पादकता होती है।',
      'product_2_tagline': 'अपनी मिट्टी को जानें। आत्मविश्वास के साथ बढ़ें।',
      'product_2_price_cta': '₹2,999 से शुरू',
      'product_2_feature_1_name': 'पीएच निगरानी',
      'product_2_feature_1_desc': 'मिट्टी की अम्लता और क्षारीयता का विश्लेषण करें',
      'product_2_feature_2_name': 'पोषक तत्व सूचकांक',
      'product_2_feature_2_desc': 'मिट्टी के उर्वरता स्तरों का मूल्यांकन करें',
      'product_2_feature_3_name': 'धूप का पता लगाना',
      'product_2_feature_3_desc': 'आदर्श प्लेसमेंट के लिए प्रकाश की तीव्रता को ट्रैक करें',
      'product_2_feature_4_name': 'तुरंत रीडिंग',
      'product_2_feature_4_desc': '10 सेकंड से कम में सटीक परिणाम',
      'product_2_purchase_subheader': '₹2,999 से शुरू होकर उपलब्ध है',
      'product_2_kit_1_name': 'मानक किट – ₹2,999',
      'product_2_kit_1_desc': 'घर और बगीचे के उपयोग के लिए',
      'product_2_kit_2_name': 'पेशेवर किट – ₹6,499',
      'product_2_kit_2_desc': 'बड़े पैमाने पर खेतों और संस्थानों के लिए',
      'product_3_title': 'स्मार्ट ड्रिप सिंचाई तंत्र',
      'product_3_subtitle': 'हर बूंद मायने रखती है।',
      'product_3_description': 'एक बुद्धिमान ड्रिप सिंचाई प्रणाली जो स्वचालित रूप से सूखे क्षेत्रों का पता लगाती है और केवल जरूरत पड़ने पर सटीक मात्रा में पानी की आपूर्ति करती है। यह पानी की बर्बादी को कम करते हुए इष्टतम जलयोजन सुनिश्चित करता है - पर्यावरण के अनुकूल खेती के लिए एकदम सही।',
      'product_3_tagline': 'हर बूंद मायने रखती है।',
      'product_3_price_cta': '₹4,999 से शुरू',
      'product_3_feature_1_name': 'स्मार्ट नमी का पता लगाना',
      'product_3_feature_1_desc': 'सूखी मिट्टी को तुरंत पहचानता है',
      'product_3_feature_2_name': 'लक्षित ड्रिप डिलीवरी',
      'product_3_feature_2_desc': 'पानी की बर्बादी को रोकता है',
      'product_3_feature_3_name': 'स्वचालित नियंत्रण',
      'product_3_feature_3_desc': 'एआई तर्क के साथ स्वायत्त रूप से काम करता है',
      'product_3_feature_4_name': 'सौर ऊर्जा चालित',
      'product_3_feature_4_desc': 'कुशल और टिकाऊ संचालन',
      'product_3_purchase_subheader': '₹4,999 से शुरू होकर उपलब्ध है',
      'product_3_kit_1_name': 'बेसिक किट – ₹4,999',
      'product_3_kit_1_desc': 'बगीचों और छोटे खेतों के लिए',
      'product_3_kit_2_name': 'प्रो सिंचाई सेटअप – ₹9,999',
      'product_3_kit_2_desc': 'मध्यम से बड़े खेतों के लिए',
      'product_4_title': 'वर्दंत ड्रोन',
      'product_4_subtitle': 'आसमान में आपके खेत की आंख।',
      'product_4_description': 'वास्तविक समय फसल की निगरानी, ​​रोग का पता लगाने और सटीक छिड़काव के लिए एक अगली पीढ़ी का स्वायत्त ड्रोन। एआई विश्लेषण से लैस, यह किसानों को फसल स्वास्थ्य के मुद्दों की पहचान करने, सिंचाई का प्रबंधन करने और उपज का अधिक कुशलता से पूर्वानुमान लगाने में मदद करता है।',
      'product_4_tagline': 'आसमान में आपके खेत की आंख।',
      'product_4_price_cta': '₹29,999 से शुरू',
      'product_4_feature_1_name': 'फसल स्कैनिंग',
      'product_4_feature_1_desc': 'कीटों, सूखेपन और बीमारी का तुरंत पता लगाएं',
      'product_4_feature_2_name': 'मौसम पूर्वानुमान',
      'product_4_feature_2_desc': 'वर्षा और तापमान में बदलाव की भविष्यवाणी करें',
      'product_4_feature_3_name': 'स्मार्ट एआई मैपिंग',
      'product_4_feature_3_desc': 'आदर्श मिट्टी और सिंचाई की जरूरतों का सुझाव देता है',
      'product_4_feature_4_name': 'वास्तविक समय अलर्ट',
      'product_4_feature_4_desc': 'कल्पवृक्ष मोबाइल ऐप के माध्यम से तत्काल अंतर्दृष्टि',
      'product_4_purchase_subheader': '₹29,999 से शुरू होकर उपलब्ध है',
      'product_4_kit_1_name': 'स्काउट ड्रोन – ₹29,999',
      'product_4_kit_1_desc': 'छोटे और मध्यम आकार के खेतों के लिए',
      'product_4_kit_2_name': 'प्रो ड्रोन – ₹59,999',
      'product_4_kit_2_desc': 'उन्नत एआई एनालिटिक्स और ऐप सिंक के साथ',

      // Generic Product Keys
      'add-to-cart': 'कार्ट में डालें',
      'request-demo': 'एक मुफ्त डेमो का अनुरोध करें',
      'key-features': 'मुख्य विशेषताएं',
      'real-time-monitoring': 'एआई द्वारा संचालित वास्तविक समय की निगरानी',
      'get-yours-today': 'आज ही अपना प्राप्त करें',
      
      // Home Page Keys
      'hero-title': 'नवाचार के माध्यम से कृषि का परिवर्तन',
      'hero-subtitle': 'एआई-संचालित सटीक उपकरणों के साथ किसानों को एक स्थायी भविष्य के लिए सशक्त बनाना।',
      'explore': 'हमारे उत्पाद देखें',
      'about-title': 'हमारे बारे में',
      'about-text-1': 'कल्पवृक्ष प्राइवेट लिमिटेड कृषि-तकनीक नवाचार में अग्रणी है, जो उन्नत सेंसर तकनीक और एआई समाधानों के साथ आधुनिक खेती को बदलने के लिए समर्पित है।',
      'about-text-2': 'विनम्र शुरुआत से लेकर सटीक कृषि में एक विश्वसनीय नाम बनने तक, हमारी यात्रा किसानों की समृद्धि और पर्यावरणीय स्थिरता के प्रति हमारी अटूट प्रतिबद्धता को दर्शाती है।',
      'read-story': 'हमारी पूरी कहानी पढ़ें',
      'data-monitor-title': 'हम जो डेटा मॉनिटर करते हैं',
      'light-condition': 'प्रकाश की स्थिति',
      'light-desc': 'इष्टतम प्रकाश संश्लेषण सुनिश्चित करने के लिए सूर्य के प्रकाश के संपर्क की वास्तविक समय ट्रैकिंग।',
      'soil-health': 'मिट्टी का स्वास्थ्य',
      'soil-desc': 'मिट्टी के पोषक तत्वों, नमी और पीएच स्तर का निरंतर विश्लेषण।',
      'growth-analysis': 'विकास विश्लेषण',
      'growth-desc': 'पौधों के विकास के चरणों और संभावित मुद्दों में एआई-संचालित अंतर्दृष्टि।',
      'water-usage': 'पानी का उपयोग',
      'water-desc': 'सिंचाई दक्षता को अनुकूलित करने के लिए पानी की खपत की स्मार्ट निगरानी।',
      'flagship-products': 'हमारे प्रमुख उत्पाद',
      'soil-sensor': 'मिट्टी की गुणवत्ता सेंसर',
      'soil-sensor-desc': 'हमारे तुसमाड 3-इन-1 सेंसर का उपयोग करके पीएच, पोषक तत्वों और सूर्य के प्रकाश को सटीकता से मापें - किसी भी खेत के लिए मिट्टी के स्वास्थ्य अनुकूलन को सशक्त बनाना।',
      'drip-irrigation': 'उन्नत ड्रिप सिंचाई',
      'drip-desc': 'स्मार्ट सेंसर सूखे क्षेत्रों का पता लगाते हैं और सटीक जलयोजन प्रदान करते हैं, जबकि उपज की स्थिरता को अधिकतम करते हुए पानी का संरक्षण करते हैं।',
      'verdant-drone': 'हरित ड्रोन',
      'drone-desc': 'प्रभावी कृषि प्रबंधन का मार्गदर्शन करने के लिए फसल की निगरानी, ​​कीटों का पता लगाने और मौसम-आधारित अंतर्दृष्टि के लिए स्वायत्त हवाई प्रणाली।',
      'agritech-app': 'कल्पवृक्ष एग्रीटेक ऐप',
      'app-desc': 'अपने खेतों की निगरानी करें, डेटा ट्रैक करें, और वास्तविक समय अलर्ट प्राप्त करें - स्मार्ट निर्णयों के लिए सभी हरित उत्पादों को सहजता से जोड़ना।',
      'learn-more': 'और जानें',
      
      // Footer Keys
      'quick-links': 'त्वरित लिंक',
      'contact-legal': 'संपर्क और कानूनी',
      'footer-brand': 'कल्पवृक्ष इंडस्ट्रीज',
      'footer-mission': 'एक स्थायी भविष्य के लिए कृषि-तकनीक समाधानों का नेतृत्व करना।',
      
      // About Us Page Keys
      'about-page-title': 'हमारे बारे में',
      'about-intro-1': '<strong>कल्पवृक्ष प्राइवेट लिमिटेड</strong> में, हम मानते हैं कि खेती केवल आजीविका से कहीं अधिक है—यह हमारे राष्ट्र की धड़कन है। <strong>3 जनवरी 2025</strong> को स्थापित, <strong>कल्पवृक्ष</strong> को पारंपरिक कृषि और अत्याधुनिक तकनीक के बीच के अंतर को पाटने के लिए बनाया गया था, जिससे किसानों को एक हरियाली वाले कल के लिए आत्मविश्वास से, डेटा-संचालित निर्णय लेने में मदद मिलती है।',
      'about-intro-2': '<em>कल्पवृक्ष</em> नाम <strong>संस्कृत</strong> शब्द <strong>"कल्पवृक्ष"</strong> से आया है, जिसका अर्थ है एक <strong>इच्छा पूरी करने वाला दिव्य वृक्ष</strong>। प्राचीन भारतीय पौराणिक कथाओं में, यह <strong>प्रचुरता, समृद्धि और पूर्ति के स्रोत</strong> का प्रतीक है, हर सच्ची इच्छा को पूरा करता है—जो <strong>असीमित क्षमता और परोपकारी निर्माण</strong> के विचार को दर्शाता है।',
      'vision-title': 'हमारा दृष्टिकोण',
      'vision-text-1': 'हर किसान को ऐसे उपकरणों से <strong>सशक्त बनाना</strong> जो <strong>सोचते</strong> हैं, <strong>सीखते</strong> हैं, और <strong>अनुकूलित</strong> होते हैं—खेती को <strong>सहज</strong>, <strong>टिकाऊ</strong>, और <strong>पुरस्कृत</strong> बनाते हैं। हम एक ऐसे भविष्य का सपना देखते हैं जहाँ हर बीज <strong>ज्ञान</strong> के साथ बोया जाता है, पानी की हर बूंद <strong>मायने रखती है</strong>, और हर फसल <strong>सफलता</strong> की कहानी कहती है।',
      'vision-text-2': 'कल्पवृक्ष केवल मशीनें नहीं बना रहा है; हम किसानों के हाथों में <strong>विश्वास</strong> और <strong>सशक्तिकरण</strong> का निर्माण कर रहे हैं जो भारत की रीढ़ हैं।',
      'journey-title': 'हमारी यात्रा',
      'journey-text-1': 'यह एक <strong>सरल मिट्टी परीक्षण</strong> और एक बड़ी समझ के साथ शुरू हुआ—किसानों को हर एक दिन अनिश्चितता का सामना करना पड़ता है। मिट्टी कितनी स्वस्थ है? सिंचाई कब शुरू होनी चाहिए? अगर रात भर में कीट हमला करते हैं तो क्या होगा? <strong>एआई</strong>, <strong>आईओटी</strong>, और <strong>डेटा एनालिटिक्स</strong> का उपयोग करके इन सवालों का जवाब देने के लिए कल्पवृक्ष का जन्म हुआ—सब कुछ सरल रखते हुए।',
      'journey-text-2': 'स्थानीय खेतों से लेकर राष्ट्रीय नवाचार प्रदर्शनियों तक, कल्पवृक्ष एक छोटे से विचार से एक शक्तिशाली आंदोलन में विकसित हुआ है जो बुद्धिमत्ता और देखभाल के साथ कृषि को फिर से परिभाषित कर रहा है।',
      'innovation-title': 'उद्देश्य में निहित नवाचार',
      'innovation-text': 'हम जो भी तकनीक डिजाइन करते हैं, उसका उद्देश्य एक वास्तविक अंतर लाना है—<strong>मिट्टी के स्वास्थ्य की निगरानी</strong> से लेकर <strong>सिंचाई को स्वचालित करने</strong> और फसलों की रक्षा करने तक। हमारे एआई-संचालित समाधान <strong>असली किसानों के साथ असली खेतों में परीक्षण किए जाते हैं</strong>, विश्वसनीयता और सरलता सुनिश्चित करते हैं।',
      'explore-innovations': 'हमारे नवाचारों का अन्वेषण करें',
      'promise-title': 'कल्पवृक्ष वादा',
      'promise-1': '<strong>स्मार्ट खेती:</strong> एआई और सेंसर जो आपके दैनिक कार्य को सरल बनाते हैं।',
      'promise-2': '<strong>टिकाऊ विकास:</strong> पानी बचाएं, मिट्टी के स्वास्थ्य में सुधार करें, और ग्रह की रक्षा करें।',
      'promise-3': '<strong>किसान पहले:</strong> हर समाधान आपकी जरूरतों और प्रतिक्रिया से शुरू होता है।',
      'revolution-title': 'क्रांति में शामिल हों',
      'revolution-text': 'अत्याधुनिक तकनीक के साथ अपनी खेती के तरीकों को बदलने के लिए तैयार हैं? आज ही हमारी कृषि विशेषज्ञों की टीम से जुड़ें।',
      'get-started': 'आज ही शुरू करें',
      
      // Contact Us Page Keys
      'contact-page-title': 'संपर्क करें',
      'contact-subtitle': 'हम आपसे सुनना पसंद करेंगे। हमारी टीम बिक्री पूछताछ, तकनीकी सहायता या साझेदारी चर्चाओं में सहायता के लिए तैयार है।',
      'send-message': 'हमें एक संदेश भेजें',
      'your-name': 'आपका नाम',
      'your-email': 'आपका ईमेल',
      'subject': 'विषय',
      'your-message': 'आपका संदेश',
      'send-message-btn': 'संदेश भेजें',
      'office-details': 'हमारे कार्यालय का विवरण',
      'head-office': 'प्रधान कार्यालय का पता',
      'call-us': 'हमें कॉल करें',
      'email-us': 'हमें ईमेल करें',
      'sales-general': 'बिक्री और सामान्य',
      'tech-support': 'तकनीकी सहायता',
      'thank-you': 'धन्यवाद',
      'message-received': 'आपका संदेश प्राप्त हो गया है। हम जल्द ही आपसे संपर्क करेंगे।'
    },
    'te': {
      'home': 'హోమ్',
      'about': 'మా గురించి',
      'products': 'ఉత్పత్తులు',
      'contact': 'సంప్రదించండి',
      'signin': 'సైన్ ఇన్',
      
      // Products Page Keys
      'product_1_title': 'కల్పవృక్ష స్మార్ట్ సెన్సార్',
      'product_1_subtitle': 'రియల్ టైమ్ AI-ఆధారిత వ్యవసాయ పర్యవేక్షణ పరికరం',
      'product_1_description': 'నేల ఆరోగ్యం, తేమ, కాంతి మరియు ఉష్ణోగ్రతను ట్రాక్ చేస్తుంది - రైతులను తెలివైన, డేటా-ఆధారిత అంతర్దృష్టులతో శక్తివంతం చేస్తుంది.',
      'product_1_tagline': 'స్మార్ట్ పొలాలు. ఆరోగ్యకరమైన పంటలు.',
      'product_1_price_cta': '₹3,499 నుండి ప్రారంభం',
      'product_1_feature_1_name': 'కాంతి గుర్తింపు',
      'product_1_feature_1_desc': 'సూర్యరశ్మికి గురికావడాన్ని ఆప్టిమైజ్ చేస్తుంది',
      'product_1_feature_2_name': 'నేల తేమ',
      'product_1_feature_2_desc': 'అతి నీటిపారుదలని నిరోధిస్తుంది',
      'product_1_feature_3_name': 'పోషక పర్యవేక్షణ',
      'product_1_feature_3_desc': 'సమతుల్య నేలను నిర్ధారిస్తుంది',
      'product_1_feature_4_name': 'వైర్‌లెస్ కనెక్టివిటీ',
      'product_1_feature_4_desc': 'మీ ఫోన్‌కు డేటాను సమకాలీకరిస్తుంది',
      'product_1_purchase_subheader': '₹3,499 నుండి ప్రారంభించి అందుబాటులో ఉంది',
      'product_1_kit_1_name': 'హోమ్ కిట్ – ₹3,499',
      'product_1_kit_1_desc': 'చిన్న తోటల కోసం',
      'product_1_kit_2_name': 'ప్రో కిట్ – ₹7,999',
      'product_1_kit_2_desc': '5 ఎకరాల వరకు పొలాల కోసం',
      'product_2_title': 'కల్పవృక్ష నేల నాణ్యత సెన్సార్',
      'product_2_subtitle': 'మీ నేలను తెలుసుకోండి. విశ్వాసంతో పెంచండి.',
      'product_2_description': 'pH స్థాయిలు, పోషక సమతుల్యత మరియు సూర్యరశ్మికి గురికావడాన్ని కొలవడానికి రూపొందించబడిన అధునాతన నేల పరీక్షా కిట్. ఇది రైతులు మరియు తోటమాలి తక్షణమే నేల నాణ్యతను అంచనా వేయడానికి సహాయపడుతుంది, ఇది తెలివైన నాటడం నిర్ణయాలకు మరియు మెరుగైన పంట ఉత్పాదకతకు దారితీస్తుంది.',
      'product_2_tagline': 'మీ నేలను తెలుసుకోండి. విశ్వాసంతో పెంచండి.',
      'product_2_price_cta': '₹2,999 నుండి ప్రారంభం',
      'product_2_feature_1_name': 'pH పర్యవేక్షణ',
      'product_2_feature_1_desc': 'నేల ఆమ్లత్వం మరియు క్షారతను విశ్లేషించండి',
      'product_2_feature_2_name': 'పోషక సూచిక',
      'product_2_feature_2_desc': 'నేల యొక్క సారవంత స్థాయిలను అంచనా వేయండి',
      'product_2_feature_3_name': 'సూర్యరశ్మి గుర్తింపు',
      'product_2_feature_3_desc': 'ఆదర్శ ప్లేస్‌మెంట్ కోసం కాంతి తీవ్రతను ట్రాక్ చేయండి',
      'product_2_feature_4_name': 'తక్షణ రీడింగ్‌లు',
      'product_2_feature_4_desc': '10 సెకన్లలోపు ఖచ్చితమైన ఫలితాలు',
      'product_2_purchase_subheader': '₹2,999 నుండి ప్రారంభించి అందుబాటులో ఉంది',
      'product_2_kit_1_name': 'ప్రామాణిక కిట్ – ₹2,999',
      'product_2_kit_1_desc': 'ఇల్లు మరియు తోట ఉపయోగం కోసం',
      'product_2_kit_2_name': 'వృత్తిపరమైన కిట్ – ₹6,499',
      'product_2_kit_2_desc': 'పెద్ద ఎత్తున పొలాలు మరియు సంస్థల కోసం',
      'product_3_title': 'స్మార్ట్ డ్రిప్ ఇరిగేషన్ మెకానిజం',
      'product_3_subtitle': 'ప్రతి చుక్క లెక్క.',
      'product_3_description': 'అవసరమైన చోట మాత్రమే పొడి మండలాలను స్వయంచాలకంగా గుర్తించి, ఖచ్చితమైన మొత్తంలో నీటిని సరఫరా చేసే తెలివైన డ్రిప్ ఇరిగేషన్ వ్యవస్థ. ఇది నీటి వృథాను తగ్గించేటప్పుడు సరైన ఆర్ద్రీకరణను నిర్ధారిస్తుంది - పర్యావరణ అనుకూల వ్యవసాయానికి సరైనది.',
      'product_3_tagline': 'ప్రతి చుక్క లెక్క.',
      'product_3_price_cta': '₹4,999 నుండి ప్రారంభం',
      'product_3_feature_1_name': 'స్మార్ట్ తేమ గుర్తింపు',
      'product_3_feature_1_desc': 'పొడి నేలను తక్షణమే గుర్తిస్తుంది',
      'product_3_feature_2_name': 'లక్ష్యంగా డ్రిప్ డెలివరీ',
      'product_3_feature_2_desc': 'నీటి వృథాను నిరోధిస్తుంది',
      'product_3_feature_3_name': 'స్వయంచాలక నియంత్రణ',
      'product_3_feature_3_desc': 'AI లాజిక్‌తో స్వతంత్రంగా పనిచేస్తుంది',
      'product_3_feature_4_name': 'సౌర శక్తితో పనిచేస్తుంది',
      'product_3_feature_4_desc': 'సమర్థవంతమైన మరియు స్థిరమైన ఆపరేషన్',
      'product_3_purchase_subheader': '₹4,999 నుండి ప్రారంభించి అందుబాటులో ఉంది',
      'product_3_kit_1_name': 'ప్రాథమిక కిట్ – ₹4,999',
      'product_3_kit_1_desc': 'తోటలు మరియు చిన్న పొలాల కోసం',
      'product_3_kit_2_name': 'ప్రో ఇరిగేషన్ సెటప్ – ₹9,999',
      'product_3_kit_2_desc': 'మధ్యస్థం నుండి పెద్ద పొలాల కోసం',
      'product_4_title': 'వర్దంత్ డ్రోన్',
      'product_4_subtitle': 'ఆకాశంలో మీ పొలం కన్ను.',
      'product_4_description': 'రియల్ టైమ్ పంట పర్యవేక్షణ, వ్యాధి గుర్తింపు మరియు ఖచ్చితమైన స్ప్రేయింగ్ కోసం తదుపరి తరం స్వయంప్రతిపత్త డ్రోన్. AI విశ్లేషణతో కూడినది, ఇది రైతులు పంట ఆరోగ్య సమస్యలను గుర్తించడానికి, నీటిపారుదలని నిర్వహించడానికి మరియు దిగుబడిని మరింత సమర్థవంతంగా అంచనా వేయడానికి సహాయపడుతుంది.',
      'product_4_tagline': 'ఆకాశంలో మీ పొలం కన్ను.',
      'product_4_price_cta': '₹29,999 నుండి ప్రారంభం',
      'product_4_feature_1_name': 'పంట స్కానింగ్',
      'product_4_feature_1_desc': 'తెగుళ్లు, పొడిబారడం మరియు వ్యాధిని తక్షణమే గుర్తించండి',
      'product_4_feature_2_name': 'వాతావరణ సూచన',
      'product_4_feature_2_desc': 'వర్షపాతం మరియు ఉష్ణోగ్రత మార్పులను అంచనా వేయండి',
      'product_4_feature_3_name': 'స్మార్ట్ AI మ్యాపింగ్',
      'product_4_feature_3_desc': 'ఆదర్శ నేల మరియు నీటిపారుదల అవసరాలను సూచిస్తుంది',
      'product_4_feature_4_name': 'రియల్ టైమ్ హెచ్చరికలు',
      'product_4_feature_4_desc': 'కల్పవృక్ష మొబైల్ యాప్ ద్వారా తక్షణ అంతర్దృష్టులు',
      'product_4_purchase_subheader': '₹29,999 నుండి ప్రారంభించి అందుబాటులో ఉంది',
      'product_4_kit_1_name': 'స్కౌట్ డ్రోన్ – ₹29,999',
      'product_4_kit_1_desc': 'చిన్న మరియు మధ్య తరహా పొలాల కోసం',
      'product_4_kit_2_name': 'ప్రో డ్రోన్ – ₹59,999',
      'product_4_kit_2_desc': 'అధునాతన AI విశ్లేషణలు మరియు యాప్ సమకాలీకరణతో',

      // Generic Product Keys
      'add-to-cart': 'కార్ట్‌లో చేర్చండి',
      'request-demo': 'ఉచిత డెమోను అభ్యర్థించండి',
      'key-features': 'ముఖ్య లక్షణాలు',
      'real-time-monitoring': 'AI ద్వారా ఆధారితమైన రియల్ టైమ్ పర్యవేక్షణ',
      'get-yours-today': 'ఈ రోజే మీది పొందండి',
      
      // Home Page Keys
      'hero-title': 'ఆవిష్కరణల ద్వారా వ్యవసాయాన్ని మార్చడం',
      'hero-subtitle': 'స్థిరమైన భవిష్యత్తు కోసం AI-ఆధారిత ఖచ్చితమైన సాధనాలతో రైతులకు శక్తినివ్వడం.',
      'explore': 'మా ఉత్పత్తులను అన్వేషించండి',
      'about-title': 'మా గురించి',
      'about-text-1': 'కల్పవృక్ష ప్రైవేట్ లిమిటెడ్ అనేది వ్యవసాయ-సాంకేతిక ఆవిష్కరణలలో అగ్రగామి, అధునాతన సెన్సార్ టెక్నాలజీ మరియు AI సొల్యూషన్స్‌తో ఆధునిక వ్యవసాయాన్ని మార్చడానికి అంకితం చేయబడింది.',
      'about-text-2': 'సాధారణ ప్రారంభం నుండి ఖచ్చితమైన వ్యవసాయంలో విశ్వసనీయ పేరుగా మారడం వరకు, మా ప్రయాణం రైతుల శ్రేయస్సు మరియు పర్యావరణ స్థిరత్వం పట్ల మా అచంచలమైన నిబద్ధతను ప్రతిబింబిస్తుంది.',
      'read-story': 'మా పూర్తి కథనాన్ని చదవండి',
      'data-monitor-title': 'మేము పర్యవేక్షించే డేటా',
      'light-condition': 'కాంతి పరిస్థితి',
      'light-desc': 'సరైన కిరణజన్య సంయోగక్రియను నిర్ధారించడానికి సూర్యరశ్మికి గురికావడాన్ని రియల్ టైమ్ ట్రాకింగ్.',
      'soil-health': 'నేల ఆరోగ్యం',
      'soil-desc': 'నేల పోషకాలు, తేమ మరియు pH స్థాయిల నిరంతర విశ్లేషణ.',
      'growth-analysis': 'వృద్ధి విశ్లేషణ',
      'growth-desc': 'మొక్కల పెరుగుదల దశలు మరియు సంభావ్య సమస్యలలో AI-ఆధారిత అంతర్దృష్టులు.',
      'water-usage': 'నీటి వినియోగం',
      'water-desc': 'నీటిపారుదల సామర్థ్యాన్ని ఆప్టిమైజ్ చేయడానికి నీటి వినియోగం యొక్క స్మార్ట్ పర్యవేక్షణ.',
      'flagship-products': 'మా ముఖ్య ఉత్పత్తులు',
      'soil-sensor': 'నేల నాణ్యత సెన్సార్',
      'soil-sensor-desc': 'మా తుస్మాడ్ 3-ఇన్-1 సెన్సార్‌ను ఉపయోగించి pH, పోషకాలు మరియు సూర్యరశ్మిని ఖచ్చితత్వంతో కొలవండి - ఏదైనా పొలం కోసం నేల ఆరోగ్య ఆప్టిమైజేషన్‌ను శక్తివంతం చేస్తుంది.',
      'drip-irrigation': 'అధునాతన డ్రిప్ ఇరిగేషన్',
      'drip-desc': 'స్మార్ట్ సెన్సార్‌లు పొడి మండలాలను గుర్తించి, ఖచ్చితమైన ఆర్ద్రీకరణను అందిస్తాయి, నీటిని సంరక్షిస్తూ దిగుబడి స్థిరత్వాన్ని పెంచుతాయి.',
      'verdant-drone': 'వర్దంత్ర డ్రోన్',
      'drone-desc': 'పంట పర్యవేక్షణ, తెగులు గుర్తింపు మరియు ప్రభావవంతమైన వ్యవసాయ నిర్వహణకు మార్గనిర్దేశం చేయడానికి వాతావరణ ఆధారిత అంతర్దృష్టుల కోసం స్వయంప్రతిపత్త వైమానిక వ్యవస్థ.',
      'agritech-app': 'కల్పవృక్ష అగ్రిటెక్ యాప్',
      'app-desc': 'మీ పొలాలను పర్యవేక్షించండి, డేటాను ట్రాక్ చేయండి మరియు రియల్ టైమ్ హెచ్చరికలను స్వీకరించండి - తెలివైన నిర్ణయాల కోసం అన్ని వర్దంత్ర ఉత్పత్తులను సజావుగా కనెక్ట్ చేస్తుంది.',
      'learn-more': 'మరింత తెలుసుకోండి',
      
      // Footer Keys
      'quick-links': 'త్వరిత లింక్‌లు',
      'contact-legal': 'సంప్రదించండి & చట్టపరమైన',
      'footer-brand': 'కల్పవృక్ష ఇండస్ట్రీస్',
      'footer-mission': 'స్థిరమైన భవిష్యత్తు కోసం వ్యవసాయ-సాంకేతిక పరిష్కారాలను అగ్రగామిగా చేయడం.',
      
      // About Us Page Keys
      'about-page-title': 'మా గురించి',
      'about-intro-1': '<strong>కల్పవృక్ష ప్రైవేట్ లిమిటెడ్</strong> వద్ద, వ్యవసాయం కేవలం జీవనోపాధి కంటే ఎక్కువ అని మేము నమ్ముతున్నాము—ఇది మన దేశం యొక్క హృదయ స్పందన. <strong>3 జనవరి 2025</strong> న స్థాపించబడిన <strong>కల్పవృక్ష</strong>, సాంప్రదాయ వ్యవసాయం మరియు అత్యాధునిక సాంకేతికత మధ్య అంతరాన్ని తగ్గించడానికి సృష్టించబడింది, పచ్చని రేపటి కోసం రైతులు నమ్మకమైన, డేటా-ఆధారిత నిర్ణయాలు తీసుకోవడానికి సహాయపడుతుంది.',
      'about-intro-2': '<em>కల్పవృక్ష</em> అనే పేరు <strong>సంస్కృత</strong> పదం <strong>"కల్పవృక్ష"</strong> నుండి వచ్చింది, దీని అర్థం <strong>కోరికలు తీర్చే దైవిక వృక్షం</strong>. ప్రాచీన భారతీయ పురాణాలలో, ఇది <strong>అనంతమైన సంభావ్యత మరియు దయగల సృష్టి</strong> యొక్క ఆలోచనను ప్రతిబింబిస్తూ, ప్రతి చిత్తశుద్ధి గల కోరికను మంజూరు చేస్తూ, <strong>సమృద్ధి, శ్రేయస్సు మరియు నెరవేర్పు యొక్క మూలాన్ని</strong> సూచిస్తుంది.',
      'vision-title': 'మా దృష్టి',
      'vision-text-1': '<strong>ఆలోచించే</strong>, <strong>నేర్చుకునే</strong>, మరియు <strong>అనుకూలించే</strong> సాధనాలతో ప్రతి రైతుకు <strong>శక్తినివ్వడం</strong>—వ్యవసాయాన్ని <strong>సులభతరం</strong>, <strong>స్థిరంగా</strong>, మరియు <strong>లాభదాయకంగా</strong> మార్చడం. ప్రతి విత్తనం <strong>జ్ఞానంతో</strong> నాటబడిన, ప్రతి నీటి చుక్క <strong>లెక్కించబడిన</strong>, మరియు ప్రతి పంట <strong>విజయం</strong> యొక్క కథను చెప్పే భవిష్యత్తును మేము కలలు కంటున్నాము.',
      'vision-text-2': 'కల్పవృక్ష కేవలం యంత్రాలను మాత్రమే నిర్మించడం లేదు; మేము భారతదేశం యొక్క వెన్నెముకగా ఉన్న రైతుల చేతుల్లో <strong>విశ్వాసం</strong> మరియు <strong>సాధికారతను</strong> నిర్మిస్తున్నాము.',
      'journey-title': 'మా ప్రయాణం',
      'journey-text-1': 'ఇది ఒక <strong>సాధారణ నేల పరీక్ష</strong> మరియు ఒక పెద్ద గ్రహణశక్తితో ప్రారంభమైంది—రైతులు ప్రతిరోజూ అనిశ్చితిని ఎదుర్కొంటారు. నేల ఎంత ఆరోగ్యంగా ఉంది? నీటిపారుదల ఎప్పుడు ప్రారంభించాలి? రాత్రికి రాత్రే తెగుళ్లు దాడి చేస్తే ఏమిటి? <strong>AI</strong>, <strong>IoT</strong>, మరియు <strong>డేటా విశ్లేషణలు</strong> ఉపయోగించి ఈ ప్రశ్నలకు సమాధానం ఇవ్వడానికి కల్పవృక్ష పుట్టింది—అన్నీ సరళంగా ఉంచుతూ.',
      'journey-text-2': 'స్థానిక పొలాల నుండి జాతీయ ఆవిష్కరణ ప్రదర్శనల వరకు, కల్పవృక్ష ఒక చిన్న ఆలోచన నుండి తెలివితేటలు మరియు శ్రద్ధతో వ్యవసాయాన్ని పునర్నిర్వచించే శక్తివంతమైన ఉద్యమంగా ఎదిగింది.',
      'innovation-title': 'ఉద్దేశంలో పాతుకుపోయిన ఆవిష్కరణ',
      'innovation-text': 'మేము రూపొందించే ప్రతి సాంకేతికత <strong>నేల ఆరోగ్యాన్ని పర్యవేక్షించడం</strong> నుండి <strong>నీటిపారుదలని ఆటోమేట్ చేయడం</strong> మరియు పంటలను రక్షించడం వరకు నిజమైన మార్పును తీసుకురావాలని లక్ష్యంగా పెట్టుకుంది. మా AI-ఆధారిత పరిష్కారాలు <strong>నిజమైన రైతులు ఉన్న నిజమైన పొలాలలో పరీక్షించబడతాయి</strong>, విశ్వసనీయత మరియు సరళతను నిర్ధారిస్తాయి.',
      'explore-innovations': 'మా ఆవిష్కరణలను అన్వేషించండి',
      'promise-title': 'కల్పవృక్ష వాగ్దానం',
      'promise-1': '<strong>తెలివైన వ్యవసాయం:</strong> మీ రోజువారీ పనిని సరళీకృతం చేసే AI మరియు సెన్సార్‌లు.',
      'promise-2': '<strong>స్థిరమైన వృద్ధి:</strong> నీటిని ఆదా చేయండి, నేల ఆరోగ్యాన్ని మెరుగుపరచండి మరియు గ్రహాన్ని రక్షించండి.',
      'promise-3': '<strong>రైతు ముందు:</strong> ప్రతి పరిష్కారం మీ అవసరాలు మరియు అభిప్రాయంతో ప్రారంభమవుతుంది.',
      'revolution-title': 'విప్లవంలో చేరండి',
      'revolution-text': 'అత్యాధునిక సాంకేతికతతో మీ వ్యవసాయ పద్ధతులను మార్చడానికి సిద్ధంగా ఉన్నారా? ఈ రోజు మా వ్యవసాయ నిపుణుల బృందంతో కనెక్ట్ అవ్వండి.',
      'get-started': 'ఈ రోజే ప్రారంభించండి',
      
      // Contact Us Page Keys
      'contact-page-title': 'సంప్రదించండి',
      'contact-subtitle': 'మేము మీ నుండి వినడానికి ఇష్టపడతాము. అమ్మకాల విచారణలు, సాంకేతిక మద్దతు లేదా భాగస్వామ్య చర్చలలో సహాయం చేయడానికి మా బృందం సిద్ధంగా ఉంది.',
      'send-message': 'మాకు ఒక సందేశం పంపండి',
      'your-name': 'మీ పేరు',
      'your-email': 'మీ ఇమెయిల్',
      'subject': 'విషయం',
      'your-message': 'మీ సందేశం',
      'send-message-btn': 'సందేశం పంపండి',
      'office-details': 'మా కార్యాలయ వివరాలు',
      'head-office': 'ప్రధాన కార్యాలయం చిరునామా',
      'call-us': 'మాకు కాల్ చేయండి',
      'email-us': 'మాకు ఇమెయిల్ చేయండి',
      'sales-general': 'అమ్మకాలు & జనరల్',
      'tech-support': 'సాంకేతిక మద్దతు',
      'thank-you': 'ధన్యవాదాలు',
      'message-received': 'మీ సందేశం అందింది. మేము త్వరలో మీతో సంప్రదిస్తాము.'
    },
    'kn': {
      'home': 'ಹೋಮ್',
      'about': 'ನಮ್ಮ ಬಗ್ಗೆ',
      'products': 'ಉತ್ಪನ್ನಗಳು',
      'contact': 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ',
      'signin': 'ಸೈನ್ ಇನ್',
      
      // Products Page Keys
      'product_1_title': 'ಕಲ್ಪವೃಕ್ಷ ಸ್ಮಾರ್ಟ್ ಸಂವೇದಕ',
      'product_1_subtitle': 'ನೈಜ-ಸಮಯದ AI-ಚಾಲಿತ ಫಾರ್ಮ್ ಮಾನಿಟರಿಂಗ್ ಸಾಧನ',
      'product_1_description': 'ಮಣ್ಣಿನ ಆರೋಗ್ಯ, ತೇವಾಂಶ, ಬೆಳಕು ಮತ್ತು ತಾಪಮಾನವನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತದೆ - ಬುದ್ಧಿವಂತ, ದತ್ತಾಂಶ-ಚಾಲಿತ ಒಳನೋಟಗಳೊಂದಿಗೆ ರೈತರನ್ನು ಸಶಕ್ತಗೊಳಿಸುತ್ತದೆ.',
      'product_1_tagline': 'ಸ್ಮಾರ್ಟ್ ಕ್ಷೇತ್ರಗಳು. ಆರೋಗ್ಯಕರ ಬೆಳೆಗಳು.',
      'product_1_price_cta': '₹3,499 ರಿಂದ ಪ್ರಾರಂಭ',
      'product_1_feature_1_name': 'ಬೆಳಕಿನ ಪತ್ತೆ',
      'product_1_feature_1_desc': 'ಸೂರ್ಯನ ಬೆಳಕಿನ ಮಾನ್ಯತೆಯನ್ನು ಉತ್ತಮಗೊಳಿಸುತ್ತದೆ',
      'product_1_feature_2_name': 'ಮಣ್ಣಿನ ತೇವಾಂಶ',
      'product_1_feature_2_desc': 'ಅತಿಯಾದ ನೀರಾವರಿ ತಡೆಯುತ್ತದೆ',
      'product_1_feature_3_name': 'ಪೋಷಕಾಂಶಗಳ ಮೇಲ್ವಿಚಾರಣೆ',
      'product_1_feature_3_desc': 'ಸಮತೋಲಿತ ಮಣ್ಣನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ',
      'product_1_feature_4_name': 'ವೈರ್‌ಲೆಸ್ ಸಂಪರ್ಕ',
      'product_1_feature_4_desc': 'ನಿಮ್ಮ ಫೋನ್‌ಗೆ ಡೇಟಾವನ್ನು ಸಿಂಕ್ ಮಾಡುತ್ತದೆ',
      'product_1_purchase_subheader': '₹3,499 ರಿಂದ ಪ್ರಾರಂಭವಾಗಿ ಲಭ್ಯವಿದೆ',
      'product_1_kit_1_name': 'ಹೋಮ್ ಕಿಟ್ – ₹3,499',
      'product_1_kit_1_desc': 'ಸಣ್ಣ ತೋಟಗಳಿಗೆ',
      'product_1_kit_2_name': 'ಪ್ರೊ ಕಿಟ್ – ₹7,999',
      'product_1_kit_2_desc': '5 ಎಕರೆಗಳವರೆಗಿನ ಫಾರ್ಮ್‌ಗಳಿಗೆ',
      'product_2_title': 'ಕಲ್ಪವೃಕ್ಷ ಮಣ್ಣಿನ ಗುಣಮಟ್ಟ ಸಂವೇದಕ',
      'product_2_subtitle': 'ನಿಮ್ಮ ಮಣ್ಣನ್ನು ತಿಳಿಯಿರಿ. ವಿಶ್ವಾಸದಿಂದ ಬೆಳೆಯಿರಿ.',
      'product_2_description': 'ಪಿಹೆಚ್ ಮಟ್ಟಗಳು, ಪೋಷಕಾಂಶಗಳ ಸಮತೋಲನ ಮತ್ತು ಸೂರ್ಯನ ಬೆಳಕಿನ ಮಾನ್ಯತೆಯನ್ನು ಅಳೆಯಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಸುಧಾರಿತ ಮಣ್ಣಿನ ಪರೀಕ್ಷಾ ಕಿಟ್. ಇದು ರೈತರು ಮತ್ತು ತೋಟಗಾರರಿಗೆ ಮಣ್ಣಿನ ಗುಣಮಟ್ಟವನ್ನು ತಕ್ಷಣವೇ ನಿರ್ಣಯಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ, ಇದು ಉತ್ತಮ ನೆಡುವ ನಿರ್ಧಾರಗಳು ಮತ್ತು ಸುಧಾರಿತ ಬೆಳೆ ಉತ್ಪಾದಕತೆಗೆ ಕಾರಣವಾಗುತ್ತದೆ.',
      'product_2_tagline': 'ನಿಮ್ಮ ಮಣ್ಣನ್ನು ತಿಳಿಯಿರಿ. ವಿಶ್ವಾಸದಿಂದ ಬೆಳೆಯಿರಿ.',
      'product_2_price_cta': '₹2,999 ರಿಂದ ಪ್ರಾರಂಭ',
      'product_2_feature_1_name': 'ಪಿಹೆಚ್ ಮೇಲ್ವಿಚಾರಣೆ',
      'product_2_feature_1_desc': 'ಮಣ್ಣಿನ ಆಮ್ಲೀಯತೆ ಮತ್ತು ಕ್ಷಾರೀಯತೆಯನ್ನು ವಿಶ್ಲೇಷಿಸಿ',
      'product_2_feature_2_name': 'ಪೋಷಕಾಂಶಗಳ ಸೂಚ್ಯಂಕ',
      'product_2_feature_2_desc': 'ಮಣ್ಣಿನ ಫಲವತ್ತತೆ ಮಟ್ಟವನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ',
      'product_2_feature_3_name': 'ಸೂರ್ಯನ ಬೆಳಕಿನ ಪತ್ತೆ',
      'product_2_feature_3_desc': 'ಸೂಕ್ತವಾದ ನಿಯೋಜನೆಗಾಗಿ ಬೆಳಕಿನ ತೀವ್ರತೆಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ',
      'product_2_feature_4_name': 'ತತ್ಕ್ಷಣದ ವಾಚನಗಳು',
      'product_2_feature_4_desc': '10 ಸೆಕೆಂಡುಗಳಿಗಿಂತ ಕಡಿಮೆ ಅವಧಿಯಲ್ಲಿ ನಿಖರವಾದ ಫಲಿತಾಂಶಗಳು',
      'product_2_purchase_subheader': '₹2,999 ರಿಂದ ಪ್ರಾರಂಭವಾಗಿ ಲಭ್ಯವಿದೆ',
      'product_2_kit_1_name': 'ಪ್ರಮಾಣಿತ ಕಿಟ್ – ₹2,999',
      'product_2_kit_1_desc': 'ಮನೆ ಮತ್ತು ಉದ್ಯಾನ ಬಳಕೆಗೆ',
      'product_2_kit_2_name': 'ವೃತ್ತಿಪರ ಕಿಟ್ – ₹6,499',
      'product_2_kit_2_desc': 'ದೊಡ್ಡ ಪ್ರಮಾಣದ ಫಾರ್ಮ್‌ಗಳು ಮತ್ತು ಸಂಸ್ಥೆಗಳಿಗೆ',
      'product_3_title': 'ಸ್ಮಾರ್ಟ್ ಡ್ರಿಪ್ ನೀರಾವರಿ ಯಾಂತ್ರಿಕತೆ',
      'product_3_subtitle': 'ಪ್ರತಿ ಡ್ರಾಪ್ ಎಣಿಕೆ.',
      'product_3_description': 'ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಒಣ ವಲಯಗಳನ್ನು ಪತ್ತೆಹಚ್ಚುವ ಮತ್ತು ಅಗತ್ಯವಿರುವಲ್ಲಿ ಮಾತ್ರ ನಿಖರವಾದ ಪ್ರಮಾಣದ ನೀರನ್ನು ಪೂರೈಸುವ ಬುದ್ಧಿವಂತ ಡ್ರಿಪ್ ನೀರಾವರಿ ವ್ಯವಸ್ಥೆ. ಇದು ಪರಿಸರ ಸ್ನೇಹಿ ಕೃಷಿಗೆ ಸೂಕ್ತವಾಗಿದೆ - ನೀರಿನ ವ್ಯರ್ಥವನ್ನು ಕಡಿಮೆ ಮಾಡುವಾಗ ಅತ್ಯುತ್ತಮ ಜಲಸಂಚಯನವನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ.',
      'product_3_tagline': 'ಪ್ರತಿ ಡ್ರಾಪ್ ಎಣಿಕೆ.',
      'product_3_price_cta': '₹4,999 ರಿಂದ ಪ್ರಾರಂಭ',
      'product_3_feature_1_name': 'ಸ್ಮಾರ್ಟ್ ತೇವಾಂಶ ಪತ್ತೆ',
      'product_3_feature_1_desc': 'ಒಣ ಮಣ್ಣನ್ನು ತಕ್ಷಣವೇ ಗುರುತಿಸುತ್ತದೆ',
      'product_3_feature_2_name': 'ಗುರಿಪಡಿಸಿದ ಡ್ರಿಪ್ ವಿತರಣೆ',
      'product_3_feature_2_desc': 'ನೀರಿನ ವ್ಯರ್ಥವನ್ನು ತಡೆಯುತ್ತದೆ',
      'product_3_feature_3_name': 'ಸ್ವಯಂಚಾಲಿತ ನಿಯಂತ್ರಣ',
      'product_3_feature_3_desc': 'AI ತರ್ಕದೊಂದಿಗೆ ಸ್ವಾಯತ್ತವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ',
      'product_3_feature_4_name': 'ಸೌರ ಚಾಲಿತ',
      'product_3_feature_4_desc': 'ದಕ್ಷ ಮತ್ತು ಸುಸ್ಥಿರ ಕಾರ್ಯಾಚರಣೆ',
      'product_3_purchase_subheader': '₹4,999 ರಿಂದ ಪ್ರಾರಂಭವಾಗಿ ಲಭ್ಯವಿದೆ',
      'product_3_kit_1_name': 'ಮೂಲ ಕಿಟ್ – ₹4,999',
      'product_3_kit_1_desc': 'ತೋಟಗಳು ಮತ್ತು ಸಣ್ಣ ಫಾರ್ಮ್‌ಗಳಿಗೆ',
      'product_3_kit_2_name': 'ಪ್ರೊ ನೀರಾವರಿ ಸೆಟಪ್ – ₹9,999',
      'product_3_kit_2_desc': 'ಮಧ್ಯಮದಿಂದ ದೊಡ್ಡ ಕ್ಷೇತ್ರಗಳಿಗೆ',
      'product_4_title': 'ವರ್ದಂತ್ ಡ್ರೋನ್',
      'product_4_subtitle': 'ಆಕಾಶದಲ್ಲಿ ನಿಮ್ಮ ಫಾರ್ಮ್‌ನ ಕಣ್ಣು.',
      'product_4_description': 'ನೈಜ-ಸಮಯದ ಬೆಳೆ ಮೇಲ್ವಿಚಾರಣೆ, ರೋಗ ಪತ್ತೆ ಮತ್ತು ನಿಖರವಾದ ಸಿಂಪಡಣೆಗಾಗಿ ಮುಂದಿನ ಪೀಳಿಗೆಯ ಸ್ವಾಯತ್ತ ಡ್ರೋನ್. AI ವಿಶ್ಲೇಷಣೆಯೊಂದಿಗೆ ಸಜ್ಜುಗೊಂಡಿದೆ, ಇದು ರೈತರಿಗೆ ಬೆಳೆ ಆರೋಗ್ಯ ಸಮಸ್ಯೆಗಳನ್ನು ಗುರುತಿಸಲು, ನೀರಾವರಿ ನಿರ್ವಹಿಸಲು ಮತ್ತು ಇಳುವರಿಯನ್ನು ಹೆಚ್ಚು ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಊಹಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.',
      'product_4_tagline': 'ಆಕಾಶದಲ್ಲಿ ನಿಮ್ಮ ಫಾರ್ಮ್‌ನ ಕಣ್ಣು.',
      'product_4_price_cta': '₹29,999 ರಿಂದ ಪ್ರಾರಂಭ',
      'product_4_feature_1_name': 'ಬೆಳೆ ಸ್ಕ್ಯಾನಿಂಗ್',
      'product_4_feature_1_desc': 'ಕೀಟಗಳು, ಶುಷ್ಕತೆ ಮತ್ತು ರೋಗವನ್ನು ತಕ್ಷಣವೇ ಪತ್ತೆ ಮಾಡಿ',
      'product_4_feature_2_name': 'ಹವಾಮಾನ ಮುನ್ಸೂಚನೆ',
      'product_4_feature_2_desc': 'ಮಳೆ ಮತ್ತು ತಾಪಮಾನದ ಬದಲಾವಣೆಗಳನ್ನು ಊಹಿಸಿ',
      'product_4_feature_3_name': 'ಸ್ಮಾರ್ಟ್ AI ಮ್ಯಾಪಿಂಗ್',
      'product_4_feature_3_desc': 'ಸೂಕ್ತವಾದ ಮಣ್ಣು ಮತ್ತು ನೀರಾವರಿ ಅಗತ್ಯಗಳನ್ನು ಸೂಚಿಸುತ್ತದೆ',
      'product_4_feature_4_name': 'ನೈಜ-ಸಮಯದ ಎಚ್ಚರಿಕೆಗಳು',
      'product_4_feature_4_desc': 'ಕಲ್ಪವೃಕ್ಷ ಮೊಬೈಲ್ ಅಪ್ಲಿಕೇಶನ್ ಮೂಲಕ ತಕ್ಷಣದ ಒಳನೋಟಗಳು',
      'product_4_purchase_subheader': '₹29,999 ರಿಂದ ಪ್ರಾರಂಭವಾಗಿ ಲಭ್ಯವಿದೆ',
      'product_4_kit_1_name': 'ಸ್ಕೌಟ್ ಡ್ರೋನ್ – ₹29,999',
      'product_4_kit_1_desc': 'ಸಣ್ಣ ಮತ್ತು ಮಧ್ಯಮ ಗಾತ್ರದ ಫಾರ್ಮ್‌ಗಳಿಗೆ',
      'product_4_kit_2_name': 'ಪ್ರೊ ಡ್ರೋನ್ – ₹59,999',
      'product_4_kit_2_desc': 'ಸುಧಾರಿತ AI ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಅಪ್ಲಿಕೇಶನ್ ಸಿಂಕ್‌ನೊಂದಿಗೆ',

      // Generic Product Keys
      'add-to-cart': 'ಕಾರ್ಟ್‌ಗೆ ಸೇರಿಸಿ',
      'request-demo': 'ಉಚಿತ ಡೆಮೊವನ್ನು ವಿನಂತಿಸಿ',
      'key-features': 'ಪ್ರಮುಖ ವೈಶಿಷ್ಟ್ಯಗಳು',
      'real-time-monitoring': 'AI ನಿಂದ ನಡೆಸಲ್ಪಡುವ ನೈಜ-ಸಮಯದ ಮೇಲ್ವಿಚಾರಣೆ',
      'get-yours-today': 'ಇಂದು ನಿಮ್ಮದನ್ನು ಪಡೆಯಿರಿ',
      
      // Home Page Keys
      'hero-title': 'ನಾವೀನ್ಯತೆಯ ಮೂಲಕ ಕೃಷಿಯ ರೂಪಾಂತರ',
      'hero-subtitle': 'ಸುಸ್ಥಿರ ಭವಿಷ್ಯಕ್ಕಾಗಿ AI-ಚಾಲಿತ ನಿಖರ ಸಾಧನಗಳೊಂದಿಗೆ ರೈತರನ್ನು ಸಬಲೀಕರಣಗೊಳಿಸುವುದು.',
      'explore': 'ನಮ್ಮ ಉತ್ಪನ್ನಗಳನ್ನು ಅನ್ವೇಷಿಸಿ',
      'about-title': 'ನಮ್ಮ ಬಗ್ಗೆ',
      'about-text-1': 'ಕಲ್ಪವೃಕ್ಷ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್ ಕೃಷಿ-ತಂತ್ರಜ್ಞಾನ ನಾವೀನ್ಯತೆಯಲ್ಲಿ ಪ್ರವರ್ತಕವಾಗಿದೆ, ಸುಧಾರಿತ ಸಂವೇದಕ ತಂತ್ರಜ್ಞಾನ ಮತ್ತು AI ಪರಿಹಾರಗಳೊಂದಿಗೆ ಆಧುನಿಕ ಕೃಷಿಯನ್ನು ಪರಿವರ್ತಿಸಲು ಸಮರ್ಪಿಸಲಾಗಿದೆ.',
      'about-text-2': 'ವಿನಮ್ರ ಪ್ರಾರಂಭದಿಂದ ನಿಖರ ಕೃಷಿಯಲ್ಲಿ ವಿಶ್ವಾಸಾರ್ಹ ಹೆಸರಾಗುವವರೆಗೆ, ನಮ್ಮ ಪ್ರಯಾಣವು ರೈತರ ಸಮೃದ್ಧಿ ಮತ್ತು ಪರಿಸರ ಸುಸ್ಥಿರತೆಗೆ ನಮ್ಮ ಅಚಲ ಬದ್ಧತೆಯನ್ನು ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ.',
      'read-story': 'ನಮ್ಮ ಸಂಪೂರ್ಣ ಕಥೆಯನ್ನು ಓದಿ',
      'data-monitor-title': 'ನಾವು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡುವ ಡೇಟಾ',
      'light-condition': 'ಬೆಳಕಿನ ಸ್ಥಿತಿ',
      'light-desc': 'ಸೂಕ್ತವಾದ ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಸೂರ್ಯನ ಬೆಳಕಿನ ಮಾನ್ಯತೆಯ ನೈಜ-ಸಮಯದ ಟ್ರ್ಯಾಕಿಂಗ್.',
      'soil-health': 'ಮಣ್ಣಿನ ಆರೋಗ್ಯ',
      'soil-desc': 'ಮಣ್ಣಿನ ಪೋಷಕಾಂಶಗಳು, ತೇವಾಂಶ ಮತ್ತು ಪಿಹೆಚ್ ಮಟ್ಟಗಳ ನಿರಂತರ ವಿಶ್ಲೇಷಣೆ.',
      'growth-analysis': 'ಬೆಳವಣಿಗೆ ವಿಶ್ಲೇಷಣೆ',
      'growth-desc': 'ಸಸ್ಯಗಳ ಬೆಳವಣಿಗೆಯ ಹಂತಗಳು ಮತ್ತು ಸಂಭಾವ್ಯ ಸಮಸ್ಯೆಗಳ ಬಗ್ಗೆ AI-ಚಾಲಿತ ಒಳನೋಟಗಳು.',
      'water-usage': 'ನೀರಿನ ಬಳಕೆ',
      'water-desc': 'ನೀರಾವರಿ ದಕ್ಷತೆಯನ್ನು ಉತ್ತಮಗೊಳಿಸಲು ನೀರಿನ ಬಳಕೆಯ ಸ್ಮಾರ್ಟ್ ಮೇಲ್ವಿಚಾರಣೆ.',
      'flagship-products': 'ನಮ್ಮ ಪ್ರಮುಖ ಉತ್ಪನ್ನಗಳು',
      'soil-sensor': 'ಮಣ್ಣಿನ ಗುಣಮಟ್ಟ ಸಂವೇದಕ',
      'soil-sensor-desc': 'ನಮ್ಮ ತುಸ್ಮಾಡ್ 3-ಇನ್-1 ಸಂವೇದಕವನ್ನು ಬಳಸಿಕೊಂಡು ಪಿಹೆಚ್, ಪೋಷಕಾಂಶಗಳು ಮತ್ತು ಸೂರ್ಯನ ಬೆಳಕನ್ನು ನಿಖರವಾಗಿ ಅಳೆಯಿರಿ - ಯಾವುದೇ ಫಾರ್ಮ್‌ಗೆ ಮಣ್ಣಿನ ಆರೋಗ್ಯ ಉತ್ತಮಗೊಳಿಸುವಿಕೆಯನ್ನು ಸಶಕ್ತಗೊಳಿಸುತ್ತದೆ.',
      'drip-irrigation': 'ಸುಧಾರಿತ ಡ್ರಿಪ್ ನೀರಾವರಿ',
      'drip-desc': 'ಸ್ಮಾರ್ಟ್ ಸಂವೇದಕಗಳು ಒಣ ವಲಯಗಳನ್ನು ಪತ್ತೆಹಚ್ಚುತ್ತವೆ ಮತ್ತು ನಿಖರವಾದ ಜಲಸಂಚಯನವನ್ನು ನೀಡುತ್ತವೆ, ಇಳುವರಿ ಸ್ಥಿರತೆಯನ್ನು ಹೆಚ್ಚಿಸುವಾಗ ನೀರನ್ನು ಸಂರಕ್ಷಿಸುತ್ತವೆ.',
      'verdant-drone': 'ವರ್ದಂತ್ರ ಡ್ರೋನ್',
      'drone-desc': 'ಬೆಳೆ ಮೇಲ್ವಿಚಾರಣೆ, ಕೀಟ ಪತ್ತೆ ಮತ್ತು ಪರಿಣಾಮಕಾರಿ ಫಾರ್ಮ್ ನಿರ್ವಹಣೆಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡಲು ಹವಾಮಾನ ಆಧಾರಿತ ಒಳನೋಟಗಳಿಗಾಗಿ ಸ್ವಾಯತ್ತ ವೈಮಾನಿಕ ವ್ಯವಸ್ಥೆ.',
      'agritech-app': 'ಕಲ್ಪವೃಕ್ಷ ಕೃಷಿ ತಂತ್ರಜ್ಞಾನ ಅಪ್ಲಿಕೇಶನ್',
      'app-desc': 'ನಿಮ್ಮ ಕ್ಷೇತ್ರಗಳನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ, ಡೇಟಾವನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ ಮತ್ತು ನೈಜ-ಸಮಯದ ಎಚ್ಚರಿಕೆಗಳನ್ನು ಸ್ವೀಕರಿಸಿ - ಸ್ಮಾರ್ಟ್ ನಿರ್ಧಾರಗಳಿಗಾಗಿ ಎಲ್ಲಾ ವರ್ದಂತ್ರ ಉತ್ಪನ್ನಗಳನ್ನು ಮನಬಂದಂತೆ ಸಂಪರ್ಕಿಸುತ್ತದೆ.',
      'learn-more': 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ',
      
      // Footer Keys
      'quick-links': 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು',
      'contact-legal': 'ಸಂಪರ್ಕ ಮತ್ತು ಕಾನೂನು',
      'footer-brand': 'ಕಲ್ಪವೃಕ್ಷ ಇಂಡಸ್ಟ್ರೀಸ್',
      'footer-mission': 'ಸುಸ್ಥಿರ ಭವಿಷ್ಯಕ್ಕಾಗಿ ಕೃಷಿ-ತಂತ್ರಜ್ಞಾನ ಪರಿಹಾರಗಳಿಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡುವುದು.',
      
      // About Us Page Keys
      'about-page-title': 'ನಮ್ಮ ಬಗ್ಗೆ',
      'about-intro-1': '<strong>ಕಲ್ಪವೃಕ್ಷ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್</strong> ನಲ್ಲಿ, ಕೃಷಿಯು ಕೇವಲ ಜೀವನೋಪಾಯಕ್ಕಿಂತ ಹೆಚ್ಚಾಗಿ ನಮ್ಮ ರಾಷ್ಟ್ರದ ಹೃದಯ ಬಡಿತ ಎಂದು ನಾವು ನಂಬುತ್ತೇವೆ. <strong>ಜನವರಿ 3, 2025</strong> ರಂದು ಸ್ಥಾಪನೆಯಾದ <strong>ಕಲ್ಪವೃಕ್ಷ</strong>, ಸಾಂಪ್ರದಾಯಿಕ ಕೃಷಿ ಮತ್ತು ಅತ್ಯಾಧುನಿಕ ತಂತ್ರಜ್ಞಾನದ ನಡುವಿನ ಅಂತರವನ್ನು ಕಡಿಮೆ ಮಾಡಲು, ಹಸಿರು ನಾಳೆಗಾಗಿ ಆತ್ಮವಿಶ್ವಾಸ, ಡೇಟಾ-ಚಾಲಿತ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಲು ರೈತರಿಗೆ ಸಹಾಯ ಮಾಡಲು ರಚಿಸಲಾಗಿದೆ.',
      'about-intro-2': '<em>ಕಲ್ಪವೃಕ್ಷ</em> ಎಂಬ ಹೆಸರು <strong>ಸಂಸ್ಕೃತ</strong> ಪದ <strong>"ಕಲ್ಪವೃಕ್ಷ"</strong> ದಿಂದ ಬಂದಿದೆ, ಇದರರ್ಥ <strong>ಇಚ್ಛೆಯನ್ನು ಪೂರೈಸುವ ದೈವಿಕ ಮರ</strong>. ಪ್ರಾಚೀನ ಭಾರತೀಯ ಪುರಾಣಗಳಲ್ಲಿ, ಇದು <strong>ಸಮೃದ್ಧಿ, ಸಂಪತ್ತು ಮತ್ತು ನೆರವೇರಿಕೆಯ ಮೂಲವನ್ನು</strong> ಸಂಕೇತಿಸುತ್ತದೆ, ಪ್ರತಿ ಪ್ರಾಮಾಣಿಕ ಇಚ್ಛೆಯನ್ನು ನೀಡುತ್ತದೆ—ಇದು <strong>ಅಪರಿಮಿತ ಸಾಮರ್ಥ್ಯ ಮತ್ತು ದಯೆಯ ಸೃಷ್ಟಿಯ</strong> ಕಲ್ಪನೆಯನ್ನು ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ.',
      'vision-title': 'ನಮ್ಮ ದೃಷ್ಟಿ',
      'vision-text-1': 'ಪ್ರತಿ ರೈತರಿಗೆ <strong>ಯೋಚಿಸುವ</strong>, <strong>ಕಲಿಯುವ</strong> ಮತ್ತು <strong>ಹೊಂದಿಕೊಳ್ಳುವ</strong> ಸಾಧನಗಳೊಂದಿಗೆ <strong>ಸಶಕ್ತಗೊಳಿಸುವುದು</strong>—ಕೃಷಿಯನ್ನು <strong>ಶ್ರಮರಹಿತ</strong>, <strong>ಸುಸ್ಥಿರ</strong> ಮತ್ತು <strong>ಪ್ರತಿಫಲದಾಯಕ</strong> ವನ್ನಾಗಿ ಮಾಡುವುದು. ಪ್ರತಿಯೊಂದು ಬೀಜವನ್ನು <strong>ಜ್ಞಾನದಿಂದ</strong> ಬಿತ್ತಿದ, ಪ್ರತಿ ನೀರಿನ ಹನಿಯು <strong>ಎಣಿಸಿದ</strong>, ಮತ್ತು ಪ್ರತಿ ಸುಗ್ಗಿಯು <strong>ಯಶಸ್ಸಿನ</strong> ಕಥೆಯನ್ನು ಹೇಳುವ ಭವಿಷ್ಯವನ್ನು ನಾವು ಕನಸು ಕಾಣುತ್ತೇವೆ.',
      'vision-text-2': 'ಕಲ್ಪವೃಕ್ಷ ಕೇವಲ ಯಂತ್ರಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತಿಲ್ಲ; ನಾವು ಭಾರತದ ಬೆನ್ನೆಲುಬಾಗಿರುವ ರೈತರ ಕೈಯಲ್ಲಿ <strong>ವಿಶ್ವಾಸ</strong> ಮತ್ತು <strong>ಸಬಲೀಕರಣವನ್ನು</strong> ನಿರ್ಮಿಸುತ್ತಿದ್ದೇವೆ.',
      'journey-title': 'ನಮ್ಮ ಪ್ರಯಾಣ',
      'journey-text-1': 'ಇದು <strong>ಸರಳ ಮಣ್ಣಿನ ಪರೀಕ್ಷೆ</strong> ಮತ್ತು ದೊಡ್ಡ ಅರಿವಿನೊಂದಿಗೆ ಪ್ರಾರಂಭವಾಯಿತು—ರೈತರು ಪ್ರತಿದಿನ ಅನಿಶ್ಚಿತತೆಯನ್ನು ಎದುರಿಸುತ್ತಾರೆ. ಮಣ್ಣು ಎಷ್ಟು ಆರೋಗ್ಯಕರವಾಗಿದೆ? ನೀರಾವರಿ ಯಾವಾಗ ಪ್ರಾರಂಭಿಸಬೇಕು? ರಾತ್ರೋರಾತ್ರಿ ಕೀಟಗಳು ಅಪ್ಪಳಿಸಿದರೆ ಏನು? <strong>AI</strong>, <strong>IoT</strong> ಮತ್ತು <strong>ದತ್ತಾಂಶ ವಿಶ್ಲೇಷಣೆ</strong> ಬಳಸಿ ಈ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಲು ಕಲ್ಪವೃಕ್ಷ ಜನಿಸಿತು—ಎಲ್ಲವನ್ನೂ ಸರಳವಾಗಿ ಇರಿಸುವಾಗ.',
      'journey-text-2': 'ಸ್ಥಳೀಯ ಫಾರ್ಮ್‌ಗಳಿಂದ ರಾಷ್ಟ್ರೀಯ ನಾವೀನ್ಯತೆ ಪ್ರದರ್ಶನಗಳವರೆಗೆ, ಕಲ್ಪವೃಕ್ಷವು ಸಣ್ಣ ಕಲ್ಪನೆಯಿಂದ ಬುದ್ಧಿಮತ್ತೆ ಮತ್ತು ಕಾಳಜಿಯೊಂದಿಗೆ ಕೃಷಿಯನ್ನು ಪುನರ್ ವ್ಯಾಖ್ಯಾನಿಸುವ ಪ್ರಬಲ ಚಳುವಳಿಯಾಗಿ ಬೆಳೆದಿದೆ.',
      'innovation-title': 'ಉದ್ದೇಶದಲ್ಲಿ ಬೇರೂರಿರುವ ನಾವೀನ್ಯತೆ',
      'innovation-text': 'ನಾವು ವಿನ್ಯಾಸಗೊಳಿಸುವ ಪ್ರತಿಯೊಂದು ತಂತ್ರಜ್ಞಾನವು <strong>ಮಣ್ಣಿನ ಆರೋಗ್ಯವನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡುವುದರಿಂದ</strong> ಹಿಡಿದು <strong>ನೀರಾವರಿ ಸ್ವಯಂಚಾಲಿತಗೊಳಿಸುವ</strong> ಮತ್ತು ಬೆಳೆಗಳನ್ನು ರಕ್ಷಿಸುವವರೆಗೆ ನಿಜವಾದ ವ್ಯತ್ಯಾಸವನ್ನು ಮಾಡಲು ಗುರಿಯನ್ನು ಹೊಂದಿದೆ. ನಮ್ಮ AI-ಚಾಲಿತ ಪರಿಹಾರಗಳನ್ನು <strong>ನಿಜವಾದ ರೈತರೊಂದಿಗೆ ನಿಜವಾದ ಫಾರ್ಮ್‌ಗಳಲ್ಲಿ ಪರೀಕ್ಷಿಸಲಾಗುತ್ತದೆ</strong>, ವಿಶ್ವಾಸಾರ್ಹತೆ ಮತ್ತು ಸರಳತೆಯನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ.',
      'explore-innovations': 'ನಮ್ಮ ನಾವೀನ್ಯತೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ',
      'promise-title': 'ಕಲ್ಪವೃಕ್ಷ ಭರವಸೆ',
      'promise-1': '<strong>ಸ್ಮಾರ್ಟರ್ ಫಾರ್ಮಿಂಗ್:</strong> ನಿಮ್ಮ ದೈನಂದಿನ ಕೆಲಸವನ್ನು ಸರಳೀಕರಿಸುವ AI ಮತ್ತು ಸಂವೇದಕಗಳು.',
      'promise-2': '<strong>ಸುಸ್ಥಿರ ಬೆಳವಣಿಗೆ:</strong> ನೀರನ್ನು ಉಳಿಸಿ, ಮಣ್ಣಿನ ಆರೋಗ್ಯವನ್ನು ಸುಧಾರಿಸಿ ಮತ್ತು ಗ್ರಹವನ್ನು ರಕ್ಷಿಸಿ.',
      'promise-3': '<strong>ರೈತ ಮೊದಲು:</strong> ಪ್ರತಿ ಪರಿಹಾರವು ನಿಮ್ಮ ಅಗತ್ಯತೆಗಳು ಮತ್ತು ಪ್ರತಿಕ್ರಿಯೆಯೊಂದಿಗೆ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ.',
      'revolution-title': 'ಕ್ರಾಂತಿಗೆ ಸೇರಿಕೊಳ್ಳಿ',
      'revolution-text': 'ಅತ್ಯಾಧುನಿಕ ತಂತ್ರಜ್ಞಾನದೊಂದಿಗೆ ನಿಮ್ಮ ಕೃಷಿ ಪದ್ಧತಿಗಳನ್ನು ಪರಿವರ್ತಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ? ಇಂದು ನಮ್ಮ ಕೃಷಿ ತಜ್ಞರ ತಂಡದೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸಿ.',
      'get-started': 'ಇಂದೇ ಪ್ರಾರಂಭಿಸಿ',
      
      // Contact Us Page Keys
      'contact-page-title': 'ಸಂಪರ್ಕದಲ್ಲಿರಿ',
      'contact-subtitle': 'ನಿಮ್ಮಿಂದ ಕೇಳಲು ನಾವು ಇಷ್ಟಪಡುತ್ತೇವೆ. ಮಾರಾಟ ವಿಚಾರಣೆಗಳು, ತಾಂತ್ರಿಕ ಬೆಂಬಲ ಅಥವಾ ಪಾಲುದಾರಿಕೆ ಚರ್ಚೆಗಳೊಂದಿಗೆ ಸಹಾಯ ಮಾಡಲು ನಮ್ಮ ತಂಡ ಸಿದ್ಧವಾಗಿದೆ.',
      'send-message': 'ನಮಗೆ ಸಂದೇಶ ಕಳುಹಿಸಿ',
      'your-name': 'ನಿಮ್ಮ ಹೆಸರು',
      'your-email': 'ನಿಮ್ಮ ಇಮೇಲ್',
      'subject': 'ವಿಷಯ',
      'your-message': 'ನಿಮ್ಮ ಸಂದೇಶ',
      'send-message-btn': 'ಸಂದೇಶ ಕಳುಹಿಸಿ',
      'office-details': 'ನಮ್ಮ ಕಚೇರಿ ವಿವರಗಳು',
      'head-office': 'ಪ್ರಧಾನ ಕಚೇರಿ ವಿಳಾಸ',
      'call-us': 'ನಮಗೆ ಕರೆ ಮಾಡಿ',
      'email-us': 'ನಮಗೆ ಇಮೇಲ್ ಮಾಡಿ',
      'sales-general': 'ಮಾರಾಟ ಮತ್ತು ಸಾಮಾನ್ಯ',
      'tech-support': 'ತಾಂತ್ರಿಕ ಬೆಂಬಲ',
      'thank-you': 'ಧನ್ಯವಾದಗಳು',
      'message-received': 'ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಸ್ವೀಕರಿಸಲಾಗಿದೆ. ನಾವು ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮೊಂದಿಗೆ ಸಂಪರ್ಕದಲ್ಲಿರುತ್ತೇವೆ.'
    }
  };

  // Function to apply translations
  function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;
    
    // Update the language button text to reflect the current language
    const languageBtn = document.querySelector('.language-btn');
    if (languageBtn) {
      languageBtn.innerHTML = lang.toUpperCase() + ' <span class="dropdown-icon">▼</span>';
    }

    // ----------------------------
    // UNIVERSAL data-i18n TRANSLATION
    // ----------------------------
    // This loop is the single source of truth for any element annotated with data-i18n.
    // It is designed to handle plain text, rich HTML (<strong>, <em>), and preserve icon tags (<i>).
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const value = t[key];
      if (!value) return; // missing translation; leave original text

      // If translation contains HTML tags, set innerHTML (useful for <strong>, <em>, etc.)
      const containsHtml = /<[^>]+>/.test(value);
      const icon = element.querySelector('i');
      
      if (containsHtml) {
        // if element also contains an icon, preserve it
        if (icon) {
          element.innerHTML = icon.outerHTML + ' ' + value;
        } else {
          element.innerHTML = value;
        }
      } else {
        // plain text translation — preserve icon markup if present
        if (icon) {
          element.innerHTML = icon.outerHTML + ' ' + value;
        } else {
          element.textContent = value;
        }
      }
    });
  }

  // Language change handler
  languageLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const newLang = this.getAttribute('data-lang');
      localStorage.setItem('selectedLanguage', newLang);
      applyTranslations(newLang);
    });
  });
  
  // Initial load
  const storedLang = localStorage.getItem('selectedLanguage') || 'en';
  applyTranslations(storedLang);
}