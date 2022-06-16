const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const userText = document.getElementById('user-text');
const contactForm = document.querySelector('form');
const resetBtn = document.querySelector('.form-reset');

function storeFormData(){
  const formData = {
    name: userName.value,
    email: userEmail.value,
    text: userText.value
  };
  localStorage.setItem('form',JSON.stringify(formData));
}

contactForm.addEventListener('change', storeFormData);

function populateForm(){
  const getData = JSON.parse(localStorage.getItem('form'));
  if(getData === null) return;
  else{
    userName.value = getData.name;
    userEmail.value = getData.email;
    userText.value = getData.text;
  }
}

document.addEventListener('DOMContentLoaded', populateForm);

resetBtn.addEventListener('click', () => {
  userName.value = '';
  userEmail.value = '';
  userText.value = '';
  localStorage.clear();
});