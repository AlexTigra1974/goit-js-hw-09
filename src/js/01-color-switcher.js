const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
console.log(btnStart);
console.log(btnStop);

let timerId = null;

btnStart.addEventListener('click', () => {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = `#${Math.floor(
      Math.random() * 16777215
    ).toString(16)}`;
  }, 1000);

  btnStart.disabled = true;
  btnStop.disabled = false;
});

btnStop.addEventListener('click', () => {
  clearInterval(timerId);

  btnStart.disabled = false;
  btnStop.disabled = true;
});
