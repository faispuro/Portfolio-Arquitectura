document.addEventListener('DOMContentLoaded', () => {

  /* ===============================
     BEFORE / AFTER + CAROUSEL
  =============================== */

  document.querySelectorAll('.ba-wrapper').forEach(wrapper => {

    /* ===== BEFORE / AFTER (pointer events: mobile + desktop) ===== */

    const slider = wrapper.querySelector('.ba-slider');

    if (slider) {

      const before = wrapper.querySelector('.ba-before');
      const divider = wrapper.querySelector('.ba-divider');

      const update = (clientX) => {
        const rect = wrapper.getBoundingClientRect();
        let percent = ((clientX - rect.left) / rect.width) * 100;
        percent = Math.max(0, Math.min(100, percent));

        before.style.width = `calc(${percent}% + 1px)`;
        if (divider) divider.style.left = percent + '%';
        slider.value = percent;
      };

      let isDragging = false;

      wrapper.addEventListener("pointerdown", (e) => {
        isDragging = true;
        update(e.clientX);
      });

      window.addEventListener("pointerup", () => {
        isDragging = false;
      });

      window.addEventListener("pointermove", (e) => {
        if (!isDragging) return;
        update(e.clientX);
      });
    }

    /* ===== CARRUSEL ===== */

    const images = wrapper.querySelectorAll('.ba-carousel-image');

    if (images.length > 0) {

      const prevBtn = wrapper.querySelector('.ba-prev');
      const nextBtn = wrapper.querySelector('.ba-next');

      let index = 0;

      function showImage(i) {
        images.forEach(img => img.classList.remove('active'));
        images[i].classList.add('active');
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          index = (index + 1) % images.length;
          showImage(index);
        });
      }

      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          index = (index - 1 + images.length) % images.length;
          showImage(index);
        });
      }
    }

    // Animación inicial
    wrapper.classList.add('fade-in-init');
  });


  /* ===============================
     BOTÓN VER MÁS / MENOS
  =============================== */

  document.querySelectorAll(".ba-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".ba-card");
      card.classList.toggle("active");

      btn.textContent = card.classList.contains("active")
        ? "Ver menos"
        : "Ver más";
    });
  });


  /* ===============================
     INTERSECTION OBSERVER
  =============================== */

  const elements = document.querySelectorAll(".ba-card, .ba-header, .ba-wrapper");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  elements.forEach(el => observer.observe(el));

});