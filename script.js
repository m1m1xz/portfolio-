
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuBtn.textContent = "✕";
  } else {
    menuBtn.textContent = "☰";
  }
});

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtn.textContent = "☰";
  });

});

const typingElement = document.getElementById("typing");

const words = [
  "Web Developer",
  "UI Designer",
  "Creative Coder",
  "Frontend Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

  const currentWord = words[wordIndex];

  if (!deleting) {

    typingElement.textContent =
      currentWord.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentWord.length) {

      deleting = true;

      setTimeout(typeEffect, 1500);
      return;
    }

  } else {

    typingElement.textContent =
      currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {

      deleting = false;

      wordIndex++;

      if (wordIndex === words.length) {
        wordIndex = 0;
      }

    }

  }

  setTimeout(
    typeEffect,
    deleting ? 50 : 100
  );
}

typeEffect();

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

  event.preventDefault();

  const button = contactForm.querySelector("button");

  button.textContent = "Message Sent ✓";

  button.style.background = "#16a34a";

  contactForm.reset();

  setTimeout(() => {

    button.textContent = "Send Message →";
    button.style.background = "";

  }, 3000);

});

const revealElements = document.querySelectorAll(
  ".section-heading, .about-text, .stat-card, .skill-card, .project-card, .contact-info, #contactForm"
);

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

      }

    });

  },
  {
    threshold: 0.1
  }
);

revealElements.forEach(element => {
  element.classList.add("reveal");
  observer.observe(element);
});
