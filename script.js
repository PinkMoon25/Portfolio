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
article.innerHTML = `<img src='./images/multi-post.png' alt='project image' class='project-image'>
<div class='multi-post content'>
<h1 class='post-title'>Multi Post Stories</h1>
<p class='post-description'>A daily selection of privately personalized reads; no accounts or sign-ups required.
  has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a standard dummy text.</p>
  <ul class='article-tags'>
    <li>Css</li>
    <li>html</li>
    <li>bootstrap</li>
    <li>Ruby</li>
  </ul>
<button type='button' class='article-btn'>See Project</button>
</div>`

projects.appendChild(article);

function addProjectCards() {
  for (let i = 0; i < 6; i += 1) {
    const div = document.createElement('div');
    div.classList.add('project-card');
    if (i == 0) {
      div.classList.add('one');
    }
    else if (i == 1) {
      div.classList.add('two');
    }
    else if (i == 2) {
      div.classList.add('three');
    }
    else if (i == 3) {
      div.classList.add('four');
    }
    else if (i == 4) {
      div.classList.add('five');
    }
    else if (i == 5) {
      div.classList.add('six');
    }

    div.innerHTML = `<h1 class='project-title'>Professional Art Printing Data</h1>
    <p class='project-description'>A daily selection of privately personalized reads; 
      no accounts or sign-ups required.
      has been the industry's standard</p>
    <ul class='project-tags'>
      <li>html</li>
      <li>bootstrap</li>
      <li>Ruby</li>
    </ul>
    <button type='button' class='project-btn'>See Project</button>`
    projects.appendChild(div);
  }
}

addProjectCards();

const popupArray = [
  {
    name: `<h1 class='post-title'>Multi Post Stories</h1>`,
    closeBtn: `<span class='close-popup'><i class='fa-solid fa-xmark'></i></span>`,
    technologies: `<ul class='article-tags'>
    <li>Css</li>
    <li>html</li>
    <li>bootstrap</li>
    <li>Ruby</li>
  </ul>`,
    image: `<img src='./images/multi-post.png' alt='project image' class='project-image'>`,
    description: `<p class='post-description'>A daily selection of privately personalized reads; no accounts or sign-ups required.
    has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a standard dummy text.</p>`,
    live: `<button type='button' class='article-btn'>See Live<img src='Icons/Iconlive.png'></button>`,
    Source: `<button type='button' class='article-btn'>See Source<i class='fa-brands fa-github'></button>`
  },

  {
    name: `<h1 class='project-title'>Professional Art Printing Data 1</h1>`,
    closeBtn: `<span class='close-popup'><i class='fa-solid fa-xmark'></i></span>`,
    technologies: `<ul class='project-tags'>
    <li>html</li>
    <li>bootstrap</li>
    <li>Ruby</li>
  </ul>`,
    image: `<img src='./images/multi-post.png' alt='project image' class='project-image'>`,
    description: `<p class='project-description'>A daily selection of privately personalized reads; 
    no accounts or sign-ups required.
    has been the industry's standard</p>`,
    live: `<button type='button' class='project-btn'>See Live<img src='Icons/Iconlive.png'></button>`,
    Source: `<button type='button' class='project-btn'>See Source<i class='fa-brands fa-github'></i></button>`
  },

  {
    name: `<h1 class='project-title'>Professional Art Printing Data 2</h1>`,
    closeBtn: `<span class='close-popup'><i class='fa-solid fa-xmark'></i></span>`,
    technologies: `<ul class='project-tags'>
    <li>html</li>
    <li>bootstrap</li>
    <li>Ruby</li>
  </ul>`,
    image: `<img src='./images/multi-post.png' alt='project image' class='project-image'>`,
    description: `<p class='project-description'>A daily selection of privately personalized reads; 
    no accounts or sign-ups required.
    has been the industry's standard</p>`,
    live: `<button type='button' class='project-btn'>See Live<img src='Icons/Iconlive.png'></button>`,
    Source: `<button type='button' class='project-btn'>See Source<i class='fa-brands fa-github'></i></button>`
  },
  
  {
    name: `<h1 class='project-title'>Professional Art Printing Data 3</h1>`,
    closeBtn: `<span class='close-popup'><i class='fa-solid fa-xmark'></i></span>`,
    technologies: `<ul class='project-tags'>
    <li>html</li>
    <li>bootstrap</li>
    <li>Ruby</li>
  </ul>`,
    image: `<img src='./images/multi-post.png' alt='project image' class='project-image'>`,
    description: `<p class='project-description'>A daily selection of privately personalized reads; 
    no accounts or sign-ups required.
    has been the industry's standard</p>`,
    live: `<button type='button' class='project-btn'>See Live<img src='Icons/Iconlive.png'></button>`,
    Source: `<button type='button' class='project-btn'>See Source<i class='fa-brands fa-github'></i></button>`
  },

  {
    name: `<h1 class='project-title'>Professional Art Printing Data 4</h1>`,
    closeBtn: `<span class='close-popup'><i class='fa-solid fa-xmark'></i></span>`,
    technologies: `<ul class='project-tags'>
    <li>html</li>
    <li>bootstrap</li>
    <li>Ruby</li>
  </ul>`,
    image: `<img src='./images/multi-post.png' alt='project image' class='project-image'>`,
    description: `<p class='project-description'>A daily selection of privately personalized reads; 
    no accounts or sign-ups required.
    has been the industry's standard</p>`,
    live: `<button type='button' class='project-btn'>See Live<img src='Icons/Iconlive.png'></button>`,
    Source: `<button type='button' class='project-btn'>See Source<i class='fa-brands fa-github'></i></button>`
  },

  {
    name: `<h1 class='project-title'>Professional Art Printing Data 5</h1>`,
    closeBtn: `<span class='close-popup'><i class='fa-solid fa-xmark'></i></span>`,
    technologies: `<ul class='project-tags'>
    <li>html</li>
    <li>bootstrap</li>
    <li>Ruby</li>
  </ul>`,
    image: `<img src='./images/multi-post.png' alt='project image' class='project-image'>`,
    description: `<p class='project-description'>A daily selection of privately personalized reads; 
    no accounts or sign-ups required.
    has been the industry's standard</p>`,
    live: `<button type='button' class='project-btn'>See Live<img src='Icons/Iconlive.png'></button>`,
    Source: `<button type='button' class='project-btn'>See Source<i class='fa-brands fa-github'></i></button>`
  },

  {
    name: `<h1 class='project-title'>Professional Art Printing Data 6</h1>`,
    closeBtn: `<span class='close-popup'><i class='fa-solid fa-xmark'></i></span>`,
    technologies: `<ul class='project-tags'>
    <li>html</li>
    <li>bootstrap</li>
    <li>Ruby</li>
  </ul>`,
    image: `<img src='./images/multi-post.png' alt='project image' class='project-image'>`,
    description: `<p class='project-description'>A daily selection of privately personalized reads; 
    no accounts or sign-ups required.
    has been the industry's standard</p>`,
    live: `<button type='button' class='project-btn'>See Live<img src='Icons/Iconlive.png'></button>`,
    Source: `<button type='button' class='project-btn'>See Source<i class='fa-brands fa-github'></i></button>`
  },
]

const body = document.querySelector('body');
const popupContainer = document.createElement('div');
const popupContent = document.createElement('article');

function popup(i){
  popupContent.innerHTML = '';
    if ( i === 0) {
      Object.values(popupArray[0]).forEach(item => popupContent.innerHTML += item);      
    }
    else if ( i === 1) {
      Object.values(popupArray[1]).forEach(item => {
        popupContent.innerHTML += item;
      });  
    }
    else if ( i === 2) {
      Object.values(popupArray[2]).forEach(item => popupContent.innerHTML += item);  
    }
    else if ( i === 3) {
      Object.values(popupArray[3]).forEach(item => popupContent.innerHTML += item);  
    }
    else if ( i === 4) {
      Object.values(popupArray[4]).forEach(item => popupContent.innerHTML += item); 
    }
    else if ( i === 5) {
      Object.values(popupArray[5]).forEach(item => popupContent.innerHTML += item); 
    }
    else if ( i === 6) {
      Object.values(popupArray[6]).forEach(item => popupContent.innerHTML += item); 
    }
  popupContainer.classList.add('popup-container');
  popupContent.classList.add('popup-content');
  popupContainer.appendChild(popupContent);
  body.appendChild(popupContainer);
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
  popupContainer.style.display = 'block';
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});

buttonOne.addEventListener('click', () => {
  popup(1);
  popupContainer.style.display = 'block';
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});

buttonTwo.addEventListener('click', () => {
  popup(2);
  popupContainer.style.display = 'block';
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});

buttonThree.addEventListener('click', () => {
  popup(3);
  popupContainer.style.display = 'block';
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});

buttonFour.addEventListener('click', () => {
  popup(4);
  popupContainer.style.display = 'block';
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});

buttonFive.addEventListener('click', () => {
  popup(5);
  popupContainer.style.display = 'block';
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});

buttonSix.addEventListener('click', () => {
  popup(6);
  popupContainer.style.display = 'block';
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});
