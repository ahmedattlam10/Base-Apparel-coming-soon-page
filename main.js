import "./style.css";

const form = document.querySelector("form");
const input = document.querySelector("#email-address");
const errorMsg = document.querySelector("#email-error");
const errorIcon = document.querySelector("#icon-error");

form.noValidate = true;

function errorState(element, hasError) {
  errorMsg.hidden = !hasError;
  errorIcon.hidden = !hasError;
  element.ariaInvalid = String(hasError);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const isEmpty = input.value.trim() === "";
  const isInvalid = input.validity.typeMismatch;
  const hasError = isEmpty || isInvalid;

  if (isEmpty) {
    errorMsg.textContent = "Whoops! It looks like you forgot to add your email";
  } else if (isInvalid) {
    errorMsg.textContent = "Please provide a valid email";
  }
  errorState(input, hasError);
});

input.addEventListener("input", () => {
  if (!input.validity.typeMismatch && input.value.trim() !== "")
    errorState(input, false);
});
