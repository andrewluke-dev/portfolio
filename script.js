// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.08,
  }
);

// Animate sections + project cards
document
  .querySelectorAll(".reveal, .project-card")
  .forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });


// ========================================
// PROJECT FILTER
// ========================================

const filterButtons =
  document.querySelectorAll("[data-filter]");

const projectCards =
  document.querySelectorAll("[data-project]");

filterButtons.forEach((button) => {

  button.addEventListener("click", () => {

    // Remove active state
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add active state
    button.classList.add("active");

    const filter =
      button.dataset.filter;

    projectCards.forEach((card, index) => {

      if (filter === "featured") {

        // First 5 projects are featured
        if (index < 5) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }

      } else {

        // Show all
        card.classList.remove("hidden");

      }

    });

  });

});


// ========================================
// SMOOTH INTERNAL LINKS
// ========================================

document
  .querySelectorAll('a[href^="#"]')
  .forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId =
        link.getAttribute("href");

      if (
        !targetId ||
        targetId === "#"
      ) {
        return;
      }

      const target =
        document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    });

  });


// ========================================
// NAVBAR EFFECT ON SCROLL
// ========================================

const navbar =
  document.querySelector(".nav");

window.addEventListener("scroll", () => {

  if (!navbar) return;

  if (window.scrollY > 40) {

    navbar.style.opacity = "0.96";

  } else {

    navbar.style.opacity = "1";

  }

});


// ========================================
// CONSOLE
// ========================================

console.log(
  "%cAndrei Portfolio",
  "font-size:20px;font-weight:bold;"
);

console.log(
  "14 projects loaded successfully 🚀"
);