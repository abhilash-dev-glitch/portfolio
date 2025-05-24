// Contact form handler and UI animations
document.addEventListener('DOMContentLoaded', function () {
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      document.getElementById('formAlert').classList.remove('d-none');
      contactForm.reset();
    });
  }

  // Animate hamburger icon on click
const toggler = document.querySelector('.navbar-toggler');
if (toggler) {
  toggler.addEventListener('click', function () {
    this.classList.toggle('open');
  });
}

  // Animate sections on scroll
  const animatedEls = document.querySelectorAll('.animate-fade-in, .animate-fade-in-down, .animate-fade-in-up, .animate-slide-up, .animate-pop-in');
  function animateOnScroll() {
    animatedEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.style.animationPlayState = 'running';
      }
    });
  }
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();
});
