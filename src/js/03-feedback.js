import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const isFeedbackFormFill = 'feedback-form-state';

form.addEventListener('input', throttle(onFeedbackFormInput, 500));
form.addEventListener('submit', onFeedbackFormSubmit);

fillOutForm();
function onFeedbackFormSubmit(event) {
    event.preventDefault();
    console.log({
    email: form.email.value,
    message: form.message.value,
});
    
    event.currentTarget.reset();
    localStorage.removeItem(isFeedbackFormFill);
}

function onFeedbackFormInput() {
const formData = {
    email: form.email.value,
    message: form.message.value,
};
    
localStorage.setItem(isFeedbackFormFill, JSON.stringify(formData));  
}

function fillOutForm() {
    const filledForm = localStorage.getItem(isFeedbackFormFill);
    const parsedForm = JSON.parse(filledForm);
    
    if (filledForm) {
        form.email.value = parsedForm.email;
        form.message.value = parsedForm.message;
    } 
}