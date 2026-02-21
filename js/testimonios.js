document.addEventListener("DOMContentLoaded", () => {

  const section = document.querySelector(".testimonios");
  const header = document.querySelector(".testimonios-header");
  const cards = document.querySelectorAll(".testimonial-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        // animar header
        header.classList.add("appear");

        // animar cards con delay
        cards.forEach((card, i) => {
          setTimeout(() => {
            card.classList.add("appear");
          }, 300 + i * 200);
        });

        observer.unobserve(section); // solo una vez
      }
    });
  }, {
    threshold: 0.1
  });

  observer.observe(section);

});
