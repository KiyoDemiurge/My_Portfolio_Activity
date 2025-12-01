
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.style.color = 'red';
        return;
    }

    // Display success message
    formMessage.textContent = 'Thank you! Your message has been sent.';
    formMessage.style.color = 'green';

    // Reset form
    form.reset();
});
