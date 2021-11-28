import { throttle } from 'lodash';

const isFeedbackFormFill = document.querySelector('.feedback-form')

isFeedbackFormFill.addEventListener('input', throttle(onFeedbackFormInput, 500));
isFeedbackFormFill.addEventListener('submit', onFeedbackFormSubmit);

function onFeedbackFormInput() {
  const data = {
    email: isFeedbackFormFill.email.value,
    message: isFeedbackFormFill.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function onFeedbackFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();

  localStorage.removeItem('feedback-form-state');
}

function fillOutForm() {
  const filledForm = localStorage.getItem('feedback-form-state');
  const parseForm = JSON.parse(filledForm);

  if (filledForm) {
    isFeedbackFormFill.email.value = parseForm.email;
    isFeedbackFormFill.message.value = parseForm.message;
  }
}

fillOutForm();