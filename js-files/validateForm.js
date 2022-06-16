const form = document.querySelector('form');
const email = form.elements['user-email'];
const message = document.createElement('small');
message.classList.add('form-message');

form.appendChild(message);

function validateEmail() {
  const regex = /^[a-z0-9@.]+$/;

  if (email.value.trim() === '') {
    message.textContent = 'Please enter your email-address';
    email.classList.add('error');
    return false;
  }
  if (regex.test(email.value.trim()) === false) {
    message.textContent = 'Please use smallcase letters for email-address';
    email.classList.add('error');
    return false;
  }

  email.classList.remove('error');
  return true;
}

email.addEventListener('change', () => {
  if (validateEmail()) {
    validateEmail();
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (validateEmail()) {
    form.submit();
  } else validateEmail();
});
