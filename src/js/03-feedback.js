import { throttle } from 'lodash';

const isFeedbackFormFill = document.querySelector('.feedback-form')
let textData;

isFeedbackFormFill.addEventListener('input', throttle(onFeedbackFormInput, 500));
isFeedbackFormFill.addEventListener('submit', onFeedbackFormSubmit);

function onFeedbackFormInput() {
  const data = {
    email: isFeedbackFormFill.email.value,
    message: isFeedbackFormFill.message.value,
  };
  textData = data;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function onFeedbackFormSubmit(evt) {
  evt.preventDefault();
  console.log(textData);
  evt.currentTarget.reset();

  localStorage.clear('feedback-form-state');
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