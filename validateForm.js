const form = document.querySelector('form');
const email = form.elements['user-email'];
const message = document.createElement('small');
message.classList.add('form-message');

form.appendChild(message);

function validateEmail(){

  let regex = /^[a-z0-9@.]+$/;

  if(email.value.trim() === '') {
    message.textContent = "Please enter your email-address";
    email.classList.remove('success');
    email.classList.add('error');
    return false;
  }
  else if (regex.test(email.value.trim()) === false) {
    message.textContent = "Please use smallcase letters for email-address";
    email.classList.remove('success');
    email.classList.add('error');
    return false;
  }
  else {
    email.classList.remove('error');
    email.classList.add('success');
    return true;
  }
}

form.addEventListener('submit', (e) => {

  e.preventDefault();

  if(validateEmail()){
    form.submit();
  }
  else validateEmail();
})
