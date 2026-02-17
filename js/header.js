document.addEventListener("DOMContentLoaded", () => {

  const header = document.querySelector(".header");
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const faders = document.querySelectorAll(".fade-scroll");

  let lastScroll = 0;

  /* =========================
     HEADER SCROLL
  ========================= */

  // Mostrar header al cargar
  header.classList.add("visible");

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    // En mobile el header siempre visible
    if (window.innerWidth <= 900) {
      header.classList.remove("hide");
      lastScroll = currentScroll;
      return;
    }

    // Oculta solo si baja y el menú no está abierto
    if (
      currentScroll > lastScroll &&
      currentScroll > 100 &&
      !navLinks.classList.contains("active")
    ) {
      header.classList.add("hide");
    } else {
      header.classList.remove("hide");
    }

    lastScroll = currentScroll;
  });


  /* =========================
     HAMBURGUESA
  ========================= */

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("active");
      navLinks.classList.toggle("active");
      document.body.classList.toggle("menu-open");

      header.classList.remove("hide"); // asegura que se vea
    });

    // Cerrar menu al hacer click en link
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        toggle.classList.remove("active");
        navLinks.classList.remove("active");
        document.body.classList.remove("menu-open");
      });
    });
  }


  /* =========================
     FADE SCROLL
  ========================= */

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, { threshold: 0.1 });

  faders.forEach(fader => observer.observe(fader));


  /* =========================
     RESIZE FIX
  ========================= */

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 900) {
      header.classList.remove("hide");
    }
  });

});
