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

const projects = document.querySelector('.projects');

const article = document.createElement('article');
article.classList.add('multi-post');
article.innerHTML = `<img src='./images/devHome' alt='project image' class='project-image'>
<div class='multi-post content'>
<h1 class='post-title'>devHome</h1>
<p class='post-description'>devHome is an open-source learning platform for things related to Web.
We work towards sharing information & knowledge to make it availaible to everyone, everywhere.<br>
<em>All it's gonna take is your time and effort</em>.</p>
  <ul class='article-tags'>
    <li>Css</li>
    <li>Html</li>
    <li>JavaScript</li>
  </ul>
<button type='button' class='article-btn'>See Project</button>
</div>`;

projects.appendChild(article);

const popupArray = [
  {
    name: 'devHome',
    technologies: ['Css', 'Html', 'JavaScript'],
    image: {
      imageSrc: './images/devHome',
      imageAlt: 'project image',
    },
    description: `devHome is an open-source learning platform for things related to Web.
    We work towards sharing information & knowledge to make it availaible to everyone, everywhere.<br>
    <em>All it's gonna take is your time and effort.</em>`,
    live: 'https://pinkmoon25.github.io/Capstone-project-Website/',
    Source: 'https://github.com/PinkMoon25/Capstone-project-Website',
  },

  {
    name: 'BookList',
    technologies: ['Html', 'JavaScript', 'Css'],
    image: {
      imageSrc: './images/booklist.png',
      imageAlt: 'project image',
    },
    description: `A single page application, Booklist. To help you find and remember the best books you read.`,
    live: 'https://pinkmoon25.github.io/books-website/',
    Source: 'https://github.com/PinkMoon25/books-website',
  },

  {
    name: 'Professional Art Printing Data 2',
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: {
      imageSrc: './images/card_background.png',
      imageAlt: 'project image',
    },
    description: `A daily selection of privately personalized reads 
    no accounts or sign-ups required.
    has been the industry's standard`,
    live: 'https://pinkmoon25.github.io/Portfolio/',
    Source: 'https://github.com/PinkMoon25/Portfolio',
  },

  {
    name: 'Professional Art Printing Data 3',
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: {
      imageSrc: './images/card_background.png',
      imageAlt: 'project image',
    },
    description: `A daily selection of privately personalized reads 
    no accounts or sign-ups required.
    has been the industry's standard`,
    live: 'https://pinkmoon25.github.io/Portfolio/',
    Source: 'https://github.com/PinkMoon25/Portfolio',
  },

  {
    name: 'Professional Art Printing Data 4',
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: {
      imageSrc: './images/card_background.png',
      imageAlt: 'project image',
    },
    description: `A daily selection of privately personalized reads 
    no accounts or sign-ups required.
    has been the industry's standard`,
    live: 'https://pinkmoon25.github.io/Portfolio/',
    Source: 'https://github.com/PinkMoon25/Portfolio',
  },

  {
    name: 'Professional Art Printing Data 5',
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: {
      imageSrc: './images/card_background.png',
      imageAlt: 'project image',
    },
    description: `A daily selection of privately personalized reads 
    no accounts or sign-ups required.
    has been the industry's standard`,
    live: 'https://pinkmoon25.github.io/Portfolio/',
    Source: 'https://github.com/PinkMoon25/Portfolio',
  },

  {
    name: 'Professional Art Printing Data 6',
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: {
      imageSrc: './images/card_background.png',
      imageAlt: 'project image',
    },
    description: `A daily selection of privately personalized reads 
    no accounts or sign-ups required.
    has been the industry's standard`,
    live: 'https://pinkmoon25.github.io/Portfolio/',
    Source: 'https://github.com/PinkMoon25/Portfolio',
  },
];

function addProjectCards() {
  for (let i = 1; i < 7; i += 1) {
    const div = document.createElement('div');
    div.classList.add('project-card');
    if (i === 1) {
      div.classList.add('one');
    } else if (i === 2) {
      div.classList.add('two');
    } else if (i === 3) {
      div.classList.add('three');
    } else if (i === 4) {
      div.classList.add('four');
    } else if (i === 5) {
      div.classList.add('five');
    } else if (i === 6) {
      div.classList.add('six');
    }

    div.innerHTML = `<h1 class='project-title'>${popupArray[i].name}</h1>
    <p class='project-description'> ${popupArray[i].description} </p>
    <ul class='project-tags'>
      <li>Html</li>
      <li>JavaScript</li>
      <li>Css</li>
    </ul>
    <button type='button' class='project-btn'>See Project</button>`;
    projects.appendChild(div);
  }
}

addProjectCards();

const body = document.querySelector('body');
const popupContainer = document.createElement('div');
const popupContent = document.createElement('article');

function popup(i) {
  popupContent.innerHTML = '';

  popupContainer.classList.add('popup-container');
  popupContent.classList.add('popup-content');
  popupContainer.appendChild(popupContent);
  body.appendChild(popupContainer);

  const h1 = document.createElement('h1');
  h1.classList.add('project-title');
  popupContent.appendChild(h1);

  const span = document.createElement('span');
  span.classList.add('close-popup');
  popupContent.appendChild(span);

  const icon = document.createElement('i');
  icon.classList.add('fa-solid', 'fa-xmark');
  span.appendChild(icon);

  const ul = document.createElement('ul');
  ul.classList.add('project-tags');
  popupContent.appendChild(ul);

  const image = document.createElement('img');
  image.classList.add('project-image', 'modal-img');
  popupContent.appendChild(image);

  const para = document.createElement('p');
  para.classList.add('project-description');
  popupContent.appendChild(para);

  const buttonLive = document.createElement('button');
  buttonLive.classList.add('project-btn', 'popup-btn-live');
  buttonLive.setAttribute('type', 'button');
  popupContent.appendChild(buttonLive);

  const buttonSource = document.createElement('button');
  buttonSource.classList.add('project-btn', 'popup-btn-source');
  buttonSource.setAttribute('type', 'button');
  popupContent.appendChild(buttonSource);

  const liveLink = document.createElement('a');
  liveLink.classList.add('popupLink');
  liveLink.textContent = 'See Live';
  buttonLive.appendChild(liveLink);

  const sourceLink = document.createElement('a');
  sourceLink.classList.add('popupLink');
  sourceLink.textContent = 'See Source';
  buttonSource.appendChild(sourceLink);

  const btnIcon = document.createElement('img');
  btnIcon.setAttribute('src', 'Icons/Iconlive.png');
  btnIcon.setAttribute('alt', 'button icon');
  buttonLive.appendChild(btnIcon);

  const btnIcon2 = document.createElement('i');
  btnIcon2.classList.add('fa-brands', 'fa-github');
  buttonSource.appendChild(btnIcon2);

  h1.textContent = popupArray[i].name;

  Object.values(popupArray[i].technologies).forEach(
    (item) => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    },
  );

  image.setAttribute('src', `${popupArray[i].image.imageSrc}`);
  image.setAttribute('alt', `${popupArray[i].image.imageAlt}`);

  para.innerHTML = popupArray[i].description;

  liveLink.setAttribute('href', `${popupArray[i].live}`);

  sourceLink.setAttribute('href', `${popupArray[i].Source}`);
}

const articleBtn = document.querySelector('.article-btn');
const buttonOne = document.querySelector('.one .project-btn');
const buttonTwo = document.querySelector('.two .project-btn');
const buttonThree = document.querySelector('.three .project-btn');
const buttonFour = document.querySelector('.four .project-btn');
const buttonFive = document.querySelector('.five .project-btn');
const buttonSix = document.querySelector('.six .project-btn');

articleBtn.addEventListener('click', () => {
  popup(0);
  popupContainer.style.display = 'flex';
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});

buttonOne.addEventListener('click', () => {
  popup(1);
  popupContainer.style.display = 'flex';
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});

buttonTwo.addEventListener('click', () => {
  popup(2);
  popupContainer.style.display = 'flex';
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});

buttonThree.addEventListener('click', () => {
  popup(3);
  popupContainer.style.display = 'flex';
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});

buttonFour.addEventListener('click', () => {
  popup(4);
  popupContainer.style.display = 'flex';
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});

buttonFive.addEventListener('click', () => {
  popup(5);
  popupContainer.style.display = 'flex';
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});

buttonSix.addEventListener('click', () => {
  popup(6);
  popupContainer.style.display = 'flex';
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});
