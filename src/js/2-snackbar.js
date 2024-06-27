import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.js-form');
  const delayInput = document.querySelector('.js-delay');
  const fulfilledRadio = document.querySelector('.js-fulfilled');
  const rejectedRadio = document.querySelector('.js-rejected');
  const submitBtn = document.querySelector('.js-submit-btn');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const delay = parseInt(delayInput.value);
    const state = fulfilledRadio.checked ? 'fulfilled' : 'rejected';

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });

    promise
      .then(delay => {
        iziToast.success({
          title: 'Success',
          message: `✅ Fulfilled promise in ${delay}ms`,
          position: 'topCenter',
        });
      })
      .catch(delay => {
        iziToast.error({
          title: 'Error',
          message: `❌ Rejected promise in ${delay}ms`,
          position: 'topCenter',
        });
      });
  });
});
