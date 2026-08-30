const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".navbar a");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("show");
  menuBtn.textContent = navbar.classList.contains("show") ? "✕" : "☰";
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("show");
    menuBtn.textContent = "☰";
  });
});

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

const elements = document.querySelectorAll('.info-box, .timeline-item');

elements.forEach(element => {

    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        element.style.setProperty('--x', `${x}px`);
        element.style.setProperty('--y', `${y}px`);
    });

    element.addEventListener('mouseleave', () => {
        element.style.setProperty('--x', `-100px`);
        element.style.setProperty('--y', `-100px`);
    });

});



document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("formMessage");

  message.textContent = `Thank you, ${name}! Your message has been received.`;

  event.target.reset();
});

const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");
  themeToggle.innerHTML = isDark
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';

  localStorage.setItem("theme", isDark ? "dark" : "light");
});

document.getElementById("year").textContent = new Date().getFullYear();

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 400 ? "flex" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const texts = [
  "BSC (Hons) in Software Engineering ",
  "Undergraduate",
  "Aspiring Software Engineer"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const changingText = document.getElementById("changing-text");

function typeEffect() {
  const currentText = texts[textIndex];

  if (!isDeleting) {
    changingText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    changingText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex++;

      if (textIndex === texts.length) {
        textIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 80);
}

typeEffect();


