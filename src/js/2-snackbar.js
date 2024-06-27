import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const elements = {
    form: document.querySelector('.js-form'),
    delayInput: document.querySelector('.js-delay'),
    fulfilledRadio: document.querySelector('.js-fulfilled'),
    rejectedRadio: document.querySelector('.js-rejected'),
    submitBtn: document.querySelector('.js-submit-btn'),
  };

  elements.form.addEventListener('submit', function (event) {
    event.preventDefault();

    const delay = parseInt(elements.delayInput.value);
    const state = elements.fulfilledRadio.checked ? 'fulfilled' : 'rejected';

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
