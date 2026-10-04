// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        // Stop observing after reveal
        observer.unobserve(entry.target);
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

    // Remove active state from all buttons
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });


    // Add active state to selected button
    button.classList.add("active");


    const filter =
      button.dataset.filter;


    projectCards.forEach((card) => {

      // ALL PROJECTS
      if (filter === "all") {
        card.classList.remove("hidden");
        return;
      }


      // FEATURED PROJECTS
      if (filter === "featured") {

        if (card.classList.contains("featured-card")) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }

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

  if (!navbar) {
    return;
  }


  if (window.scrollY > 40) {

    navbar.style.opacity = "0.96";

  } else {

    navbar.style.opacity = "1";

  }

});


// ========================================
// IMAGE ERROR CHECK
// ========================================

// Helpful while testing the portfolio.
// If an image filename is wrong or missing,
// the browser console will show exactly which one.

document
  .querySelectorAll(".project-shot img")
  .forEach((image) => {

    image.addEventListener("error", () => {

      console.error(
        `Could not load image: ${image.getAttribute("src")}`
      );

    });

  });


// ========================================
// PORTFOLIO STATUS
// ========================================

console.log(
  "%cAndrei Portfolio",
  "font-size:20px;font-weight:bold;"
);

console.log(
  "6 projects loaded 🚀"
);

console.log(
  "17 project screenshots configured 📸"
);