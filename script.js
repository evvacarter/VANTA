 const menuToggle = document.querySelector(".menu-toggle");
 const navLinks = document.querySelector(".nav-links");
 menuToggle.addEventListener("click", () => { const isopen = navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active", isopen);
    menuToggle.setAttribute("aria-expanded", isopen);
  });