const signupForm = document.querySelector("#newsletter-form");
const formErrorMessage = document.querySelector(".form-error-message");
const emailInput = document.querySelector("#email");

emailInput.addEventListener("input", function () {
  formErrorMessage.textContent = "";
});

function handleSignUpForm(e) {
  e.preventDefault();

  const formEntries = new FormData(signupForm).entries();
  const { email } = Object.fromEntries(formEntries);

  const emailErrorMessage = validateEmail(email);

  if (emailErrorMessage) {
    formErrorMessage.textContent = emailErrorMessage;
  }
}

signupForm.addEventListener("submit", handleSignUpForm);

function validateEmail(email) {
  if (!email) return "Email is required";

  const isValidEmail = /^\S+@\S+$/;
  if (!isValidEmail.test(email)) {
    return "Valid email required";
  }

  return "";
}
