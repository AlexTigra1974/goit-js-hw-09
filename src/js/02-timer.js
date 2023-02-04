import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

// const input = document.querySelector('#datetime-picker');
// const btnStart = document.querySelector('[data-start]');

// const dataDays = document.querySelector('[data-days]');
// const dataHours = document.querySelector('[data-hours]');
// const dataMinutes = document.querySelector('[data-minutes]');
// const dataSeconds = document.querySelector('[data-seconds]');

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//   },
// };

// btnStart.disabled = true;

// const fp = flatpickr(input, options);
// console.log(fp);

// input.addEventListener('input', selectedDates);
// btnStart.addEventListener('click', timeStart);

// const timer = document.querySelector('.timer');

// function selectedDates(e) {
//   if (endDate === currentDate || endDate < currentDate) {
//     window.alert('Please choose a date in the future');
//   }
// }

// function timeStart(e) {
//   btnStart.disabled = false;
//   setInterval(() => {
//     // {
//     //   window.alert('Please choose a date in the future');
//     // }

//     const endDate = new Date(input.value);
//     const currentDate = new Date();
//     const difTime = endDate - currentDate;
//     const difTimeConvert = convertMs(difTime);
//     console.log(difTimeConvert);

//     dataDays.textContent = addLeadingZero(difTimeConvert.days);
//     dataHours.textContent = addLeadingZero(difTimeConvert.hours);
//     dataMinutes.textContent = addLeadingZero(difTimeConvert.minutes);
//     dataSeconds.textContent = addLeadingZero(difTimeConvert.seconds);
//   }, 1000);
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }

// // import { Notify } from 'notiflix/build/notiflix-notify-aio';
// // import flatpickr from 'flatpickr';
// // import 'flatpickr/dist/flatpickr.min.css';

// // const startBtn = document.querySelector('button[data-start]');
// // const daysEl = document.querySelector('span[data-days]');
// // const hoursEl = document.querySelector('[data-hours]');
// // const minutesEl = document.querySelector('[data-minutes]');
// // const secondsEl = document.querySelector('[data-seconds]');

// // const options = {
// //   enableTime: true,
// //   time_24hr: true,
// //   defaultDate: new Date(),
// //   minuteIncrement: 1,
// //   onClose(selectedDates) {
// //     console.log(selectedDates[0]);
// //     chosenDate(selectedDates[0]);
// //   },
// // };

// // let timeToEnd = 0;
// // let timerId = null;

// // flatpickr('input#datetime-picker', options);

// // startBtn.disabled = true;

// // startBtn.addEventListener('click', onBtnStart);

// // function onBtnStart() {
// //   timerId = setInterval(timerUpdate, 1000);
// // }

// // function chosenDate(selectedDate) {
// //   const currentDate = Date.now();

// //   if (currentDate > selectedDate) {
// //     return Notify.failure('Please choose a date in the future');
// //   }

// //   startBtn.disabled = false;

// //   timeToEnd = selectedDate - currentDate;

// //   renderDate(convertMs(timeToEnd));
// // }

// // function timerUpdate() {
// //   startBtn.disabled = true;
// //   timeToEnd -= 1000;
// //   if (timeToEnd <= 0) {
// //     clearInterval(timerId);
// //     Notify.success(`Time's out!`);
// //     renderDate(convertMs(0));
// //     return;
// //   }
// //   renderDate(convertMs(timeToEnd));
// // }

// // function renderDate(timeToEndObj) {
// //   daysEl.textContent = addLeadingZero(timeToEndObj.days);
// //   hoursEl.textContent = addLeadingZero(timeToEndObj.hours);
// //   secondsEl.textContent = addLeadingZero(timeToEndObj.seconds);
// //   minutesEl.textContent = addLeadingZero(timeToEndObj.minutes);
// // }
// // function convertMs(ms) {
// //   // Number of milliseconds per unit of time
// //   const second = 1000;
// //   const minute = second * 60;
// //   const hour = minute * 60;
// //   const day = hour * 24;

// //   // Remaining days
// //   const days = Math.floor(ms / day);
// //   // Remaining hours
// //   const hours = Math.floor((ms % day) / hour);
// //   // Remaining minutes
// //   const minutes = Math.floor(((ms % day) % hour) / minute);
// //   // Remaining seconds
// //   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

// //   return { days, hours, minutes, seconds };
// // }

// // function addLeadingZero(value) {
// //   return value.toString().padStart(2, '0');
// // }
