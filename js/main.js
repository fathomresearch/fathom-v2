// Main JavaScript for Fathom website

document.addEventListener('DOMContentLoaded', function() {
  
  // Bubble hover interactions
  const bubbles = document.querySelectorAll('.bubble');
  
  bubbles.forEach(bubble => {
    bubble.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
    });
    
    bubble.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
    
    // Click to navigate (placeholder for now)
    bubble.addEventListener('click', function() {
      const cta = this.querySelector('.bubble-cta');
      if (cta) {
        // Future: Link to specific case studies
        console.log('Navigate to case study');
      }
    });
  });
  
  // Smooth scroll for CTAs
  const ctaButtons = document.querySelectorAll('a[href^="#"]');
  
  ctaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});
