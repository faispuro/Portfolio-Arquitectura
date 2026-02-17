const footerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    }
  });
});

document.querySelectorAll(".site-footer").forEach(footer => {
  footerObserver.observe(footer);
});
