// Include loader for modular HTML components
async function loadInclude(elementId, filePath) {
  try {
    const response = await fetch(filePath);
    if (response.ok) {
      const html = await response.text();
      document.getElementById(elementId).innerHTML = html;
    } else {
      console.error(`Failed to load ${filePath}: ${response.status}`);
    }
  } catch (error) {
    console.error(`Error loading ${filePath}:`, error);
  }
}

// Load all includes when page loads
document.addEventListener('DOMContentLoaded', async function() {
  // Load all sections
  await Promise.all([
    loadInclude('header-content', 'includes/header.html'),
    loadInclude('publications-content', 'includes/publications.html'),
    loadInclude('news-content', 'includes/news.html'),
    loadInclude('experience-content', 'includes/experience.html'),
    loadInclude('footer-content', 'includes/footer.html')
  ]);
  
  // Initialize JavaScript functions after content is loaded
  initializeHoverEffects();
});

// Initialize hover effects for publications
function initializeHoverEffects() {
  // Re-declare the hover functions for C-Shenron
  window.cshenron_start = function() {
    const staticImage = document.getElementById('cshenron_static');
    const animatedOverlay = document.getElementById('cshenron_image');
    
    if (staticImage && animatedOverlay) {
      console.log('Hover start - showing animation');
      staticImage.style.opacity = "0"; // Hide static image
      animatedOverlay.style.opacity = "1"; // Show animated GIF
      animatedOverlay.classList.add('active');
    }
  };
  
  window.cshenron_stop = function() {
    const staticImage = document.getElementById('cshenron_static');
    const animatedOverlay = document.getElementById('cshenron_image');
    
    if (staticImage && animatedOverlay) {
      console.log('Hover stop - showing static image');
      staticImage.style.opacity = "1"; // Show static image
      animatedOverlay.style.opacity = "0"; // Hide animated GIF
      animatedOverlay.classList.remove('active');
    }
  };
  
  // Initialize the hover effect (show static, hide animated)
  setTimeout(() => {
    window.cshenron_stop();
    console.log('Initialized C-Shenron hover effect');
  }, 100);
}