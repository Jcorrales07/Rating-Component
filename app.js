const btnSubmit = document.getElementById('submitBtn');
const ratingBtns = document.querySelectorAll('.option');
const ratingState = document.querySelector('.rating-state');
const thankUState = document.querySelector('.thank-you-state');
let valueRating;

ratingBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    ratingValueFunction(index);
  });
});

function ratingValueFunction(idx) {
  valueRating = idx + 1;

  ratingBtns.forEach((btn) => {
    btn.style.backgroundColor = 'hsl(215, 19%, 24%)';
    btn.style.color = 'hsl(216, 12%, 54%)';
  });

  ratingBtns[idx].style.backgroundColor = 'hsl(216, 12%, 54%)';
  ratingBtns[idx].style.color = 'white';
}

btnSubmit.addEventListener('click', () => {
  if (!valueRating) {
    alert('please select your rating');
    return;
  }
  ratingState.classList.remove('visible');
  thankUState.classList.add('visible');

  const span = document.querySelector('.user-rating');
  span.textContent = valueRating;
});
