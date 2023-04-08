import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");

const STORAGE_KEY = "feedback-form-state";

const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

for (let i = 0; i < form.elements.length; i++) {
  form.elements[i].value = formData[form.elements[i].name];
}

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();

  for (let i = 0; i < form.elements.length; i++) {
    formData[form.elements[i].name] = form.elements[i].value;
  }

  console.log(formData);

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
}

form.addEventListener("input", throttle(onFormInput, 500));
form.addEventListener("submit", onFormSubmit);
