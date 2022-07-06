const question = document.querySelector('#question');
const answer = document.querySelector('#input');
const btn = document.querySelector('.btn');
const form = document.querySelector('#form');
const scoreEl = document.querySelector('#score');
const warning = document.querySelector('.warning');
let correctAns;
let score = 0;

function generateQuestion() {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  question.textContent = `What is ${num1} multiplied by ${num2}?`;
  correctAns = num1 * num2;
}
function setScore(score) {
  scoreEl.textContent = score;
}

window.addEventListener('load', () => {
  generateQuestion();
  setScore(score);
});

function resetForm() {
  warning.textContent = '';
  answer.classList.remove('warn');
}

function warningMessage(message) {
  answer.classList.add('warn');
  warning.textContent = message;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  resetForm();

  if (answer.value === '') {
    warningMessage(`Please enter some value first`);
    return;
  }

  if (+answer.value === correctAns) {
    score++;
    setScore(score);
    generateQuestion();
    answer.value = '';
  } else {
    score--;
    setScore(score);
    warningMessage(`Write Correct answer`);
  }
});
