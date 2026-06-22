const form = document.getElementById('contact-form');
const messageEl = document.getElementById('form-message');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    messageEl.textContent = 'Merci ! Votre demande a bien été envoyée. Nous revenons vers vous sous 24h.';
    form.reset();
  });
}
