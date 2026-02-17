/* ================================
   SERVICIOS - ACORDEÓN
================================ */

document.addEventListener("DOMContentLoaded", function () {

  const items = document.querySelectorAll('.servicio-item');

  items.forEach(item => {

    const header = item.querySelector('.servicio-header');

    header.addEventListener('click', () => {

      const isActive = item.classList.contains('active');

      // Cerrar todos
      items.forEach(i => i.classList.remove('active'));

      // Abrir solo si no estaba activo
      if (!isActive) {
        item.classList.add('active');
      }

    });

  });

});


document.addEventListener("DOMContentLoaded", () => {

  const serviciosSection = document.querySelector(".servicios");
  const left = document.querySelector(".servicios-left");
  const items = document.querySelectorAll(".servicio-item");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        // animar lado izquierdo
        left.classList.add("show");

        // animar items con delay
        items.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add("show");
          }, index * 150);
        });

        observer.unobserve(serviciosSection);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(serviciosSection);

});
