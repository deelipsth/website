document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      document.getElementById('formMessage').textContent = 'Thank you! Your message has been sent.';
      form.reset();
    });
  }
});