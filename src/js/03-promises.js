import Notiflix from 'notiflix';

const form = document.querySelector('.form');
console.dir(form);

const inputDelay = document.querySelector('input[name = "delay"]');
// console.log(inputDelay);
const inputStep = document.querySelector('input[name = "step"]');
// console.log(inputStep);
const inputAmount = document.querySelector('input[name = "amount"]');
// console.log(inputAmount);
const btn = document.querySelector('button');

form.addEventListener('submit', e => {
  e.preventDefault();
  const fistInputDelay = Number(inputDelay.value);
  const step = Number(inputStep.value);
  const amount = Number(inputAmount.value);

  for (let position = 0; position < amount; position += 1) {
    const delay = fistInputDelay + step * position;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    btn.disabled = true;
  }
});
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}
