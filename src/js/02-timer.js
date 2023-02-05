import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const timer = document.querySelector('.timer');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

// console.log(input);
// console.log(btnStart);
// console.log(timer);
// console.log(dataDays);
// console.log(dataHours);
// console.log(dataMinutes);
// console.log(dataSeconds);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (selectedDates[0] <= new Date()) {
      Notiflix.Notify.warning('Please choose a date in the future');
    } else {
      btnStart.disabled = false;
    }
    btnStart.addEventListener('click', () => {
      const intervalId = setInterval(() => {
        const difTime = selectedDates[0] - Date.now();
        if (difTime < 1000) {
          clearInterval(intervalId);
        }
        const difTimeConvert = convertMs(difTime);
        console.log(difTimeConvert);

        dataDays.textContent = addLeadingZero(difTimeConvert.days);
        dataHours.textContent = addLeadingZero(difTimeConvert.hours);
        dataMinutes.textContent = addLeadingZero(difTimeConvert.minutes);
        dataSeconds.textContent = addLeadingZero(difTimeConvert.seconds);
      }, 1000);
    });
  },
};

flatpickr(input, options);

btnStart.disabled = true;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
