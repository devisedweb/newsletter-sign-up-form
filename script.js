const signupForm = document.querySelector("#newsletter-form");

function handleSignUpForm(e) {
  e.preventDefault();

  const formEntries = new FormData(signupForm).entries();
  const { email } = Object.fromEntries(formEntries);

  const emailErrorMessage = validateEmail(email);

  if (emailErrorMessage) {
    const formErrorMessage = document.querySelector(".form-error-message");

    formErrorMessage.textContent = emailErrorMessage;
  }
}

signupForm.addEventListener("submit", handleSignUpForm);

function validateEmail(email) {
  if (!email) return "Email is required";

  const isValidEmail = /^\S+@\S+$/g;
  if (!isValidEmail.test(email)) {
    return "Valid email required";
  }

  return "";
}
