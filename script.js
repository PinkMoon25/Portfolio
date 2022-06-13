const dropdown = document.querySelector('.dropdown');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const links = document.querySelectorAll('.modal-links');

dropdown.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener('click', () => {
    modal.style.display = 'none';
  });
}
