import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const datetimePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('.js-start-btn');
let timer;

startBtn.disabled = true;

function showError(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topCenter',
    timeout: 5000,
    transitionIn: 'fadeInDown',
    transitionOut: 'fadeOutUp',
  });
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const userSelectedDate = selectedDates[0];
    if (userSelectedDate <= new Date()) {
      showError('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

startBtn.addEventListener('click', () => {
  const endDate = new Date(datetimePicker.value);
  startBtn.disabled = true;
  datetimePicker.disabled = true;

  timer = setInterval(() => {
    const now = new Date();
    const timeDifference = endDate - now;

    if (timeDifference <= 0) {
      clearInterval(timer);
      updateTimerDisplay(0, 0, 0, 0);
      datetimePicker.disabled = false;
      return;
    }

    const time = convertMs(timeDifference);
    updateTimerDisplay(time.days, time.hours, time.minutes, time.seconds);
  }, 1000);
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateTimerDisplay(days, hours, minutes, seconds) {
  document.querySelector('.js-days').textContent = addLeadingZero(days);
  document.querySelector('.js-hours').textContent = addLeadingZero(hours);
  document.querySelector('.js-minutes').textContent = addLeadingZero(minutes);
  document.querySelector('.js-seconds').textContent = addLeadingZero(seconds);
}
