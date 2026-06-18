/* =============================================
   DV – script.js
   ============================================= */

// --- Hamburger Menu ---
const hamburger = document.getElementById('hamburger');
const nav       = document.getElementById('main-nav');

function closeNav() {
  nav.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}

if (hamburger) {
  hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });
}

// Close nav when clicking outside
document.addEventListener('click', (e) => {
  if (nav && !nav.contains(e.target) && !hamburger.contains(e.target)) {
    closeNav();
  }
});

// --- Scroll-triggered fade-in ---
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
fadeEls.forEach(el => observer.observe(el));

// --- Free Hosting Popup ---
function openPopup() {
  const popup = document.getElementById('hostingPopup');
  if (popup) {
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closePopup() {
  const popup = document.getElementById('hostingPopup');
  if (popup) {
    popup.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close popup on backdrop click
window.addEventListener('click', (e) => {
  const popup = document.getElementById('hostingPopup');
  if (e.target === popup) closePopup();
});

// Close popup on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closePopup();
});