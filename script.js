// Efek navbar berubah saat scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.custom-navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Efek aktif pada menu
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

// Efek mengetik pada subtitle
const typingText = document.querySelector('.typing-text');
const words = ["Frontend Dev", "Mahasiswa", "Freelancer", "Backend Dev"];
let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
    currentWord = words[wordIndex];
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 500);
        } else {
            setTimeout(typeEffect, 50);
        }
    } else {
        typingText.textContent = currentWord.substring(0, charIndex++);
        if (charIndex > currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
        } else {
            setTimeout(typeEffect, 100);
        }
    }
}
document.addEventListener("DOMContentLoaded", typeEffect);

// Animasi fade-in saat section muncul di viewport
const aboutSection = document.querySelector('.about-section');

function checkScroll() {
    const sectionPos = aboutSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;
    if (sectionPos < screenPos) {
        aboutSection.classList.add('fade-in');
    }
}

window.addEventListener('scroll', checkScroll);

// Animasi fade-in untuk project cards
const projectCards = document.querySelectorAll('.project-card');

function showOnScroll() {
  projectCards.forEach(card => {
    const cardPos = card.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;
    if (cardPos < screenPos) {
      card.classList.add('fade-in');
    }
  });
}

window.addEventListener('scroll', showOnScroll);

// Skill progress animation
function animateSkills() {
  const skillSection = document.querySelector('.skill-section');
  const sectionPos = skillSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.2;

  if (sectionPos < screenPos) {
    document.querySelector('.html-bar').style.width = '90%';
    document.querySelector('.html-bar').textContent = '90%';

    document.querySelector('.css-bar').style.width = '90%';
    document.querySelector('.css-bar').textContent = '90%';

    document.querySelector('.php-bar').style.width = '75%';
    document.querySelector('.php-bar').textContent = '75%';

    document.querySelector('.js-bar').style.width = '60%';
    document.querySelector('.js-bar').textContent = '60%';

    window.removeEventListener('scroll', animateSkills); // hanya sekali
  }
}

window.addEventListener('scroll', animateSkills);

// Fade-in contact section
const contactSection = document.querySelector('.contact-section');

function showContact() {
  const pos = contactSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.2;
  if (pos < screenPos) {
    contactSection.classList.add('fade-in');
    window.removeEventListener('scroll', showContact);
  }
}
window.addEventListener('scroll', showContact);