// Form validation and error handling
const form = document.querySelector('form');
const errorMessage = document.getElementById('errorMessage');
const uniqueCodeInput = document.getElementById('uniqueCode');
const productSelect = document.getElementById('productSelect');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const code = uniqueCodeInput.value.trim();
  const product = productSelect.value;
  
  // Clear previous error
  errorMessage.textContent = '';
  
  // Validation
  if (!code) {
    errorMessage.textContent = 'Please enter your unique code';
    uniqueCodeInput.focus();
    return;
  }
  
  if (!product) {
    errorMessage.textContent = 'Please select a product';
    productSelect.focus();
    return;
  }
  
  // If validation passes, redirect to product page
  errorMessage.style.color = '#27ae60';
  errorMessage.textContent = 'Signing in...';
  
  // Redirect based on selected product
  setTimeout(() => {
    switch(product) {
      case 'Kalpavriksha-soil':
        window.location.href = 'pages/product-soil-sensor.html';
        break;
      case 'smart-drip':
        window.location.href = 'pages/product-drip-irrigation.html';
        break;
      case 'Kalpavriksha-drone':
        window.location.href = 'pages/product-agricultural-drone.html';
        break;
      default:
        errorMessage.style.color = '#e74c3c';
        errorMessage.textContent = 'Invalid product selection';
    }
  }, 500);
});
