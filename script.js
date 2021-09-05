import { reviews } from './data.js';

const image = document.querySelector('#image');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const description = document.querySelector('#description');
const btns = document.querySelectorAll('.btn');

let personId = 1;

function changeReview() {
  reviews.forEach((person) => {
    if (person.id === personId) {
      image.src = person.img;
      author.textContent = person.name;
      job.textContent = person.job.toUpperCase();
      description.textContent = person.text;
    }
  });
}

// Add event listeners to all buttons

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains('left')) {
      if (personId === 1) {
        personId = reviews.length + 1;
      }
      --personId;
      changeReview();
    }
    if (styles.contains('right')) {
      if (personId === 6) {
        personId = 0;
      }
      ++personId;
      changeReview();
    }

    if (styles.contains('random')) {
      personId = Math.floor(Math.random() * reviews.length + 1);
      changeReview();
    }
  });
});

// On Load

changeReview();
