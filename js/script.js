// Confetti effect on load
document.addEventListener('DOMContentLoaded', () => {
  createConfetti();
  
  // Intersection Observer for fade-in animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.slide').forEach(slide => {
    slide.classList.add('fade-in');
    observer.observe(slide);
  });
});

function createConfetti() {
  const container = document.getElementById('confetti');
  const colors = ['#e85d04', '#ffb703', '#fb8500', '#ff6b6b', '#4ecdc4', '#ffe66d'];
  
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = Math.random() * 100 + 'vw';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.width = (Math.random() * 10 + 5) + 'px';
      piece.style.height = (Math.random() * 10 + 5) + 'px';
      piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
      piece.style.animationDuration = (Math.random() * 3 + 2) + 's';
      piece.style.animationDelay = (Math.random() * 2) + 's';
      
      container.appendChild(piece);
      
      // Remove after animation
      setTimeout(() => piece.remove(), 6000);
    }, i * 100);
  }
}

// Add fade-in animation styles
const style = document.createElement('style');
style.textContent = `
  .fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);
