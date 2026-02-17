document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".testimonios-header");
  const cards = document.querySelectorAll(".testimonial-card");

  // Animar primero el header
  setTimeout(() => {
    header.classList.add("appear");
  }, 100); // aparece 100ms después de cargar la página

  // Animar las tarjetas después del header
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.classList.add("appear");
    }, 400 + i * 200); // empieza 400ms después y con delay incremental
  });
});
