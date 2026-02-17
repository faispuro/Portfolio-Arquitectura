document.addEventListener("DOMContentLoaded", () => {

  // Fade up
  const elements = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));


  // Hero slider
  const slides = document.querySelectorAll('.hero-slider .slide');
  let current = 0;

  if (slides.length > 0) {
    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 5000);
  }

});
