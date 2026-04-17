const signupForm = document.querySelector("#newsletter-form");
const formErrorMessage = document.querySelector(".form-error-message");
const emailInput = document.querySelector("#email");

const newsletterContainer = document.querySelector(".newsletter-container");
const successPageContainer = document.querySelector(".success-page-container");
const successEmail = document.querySelector(".success-desc strong");
const dismissBtn = document.querySelector(".success-page button");

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
    return;
  }

  if (!emailErrorMessage) {
    successEmail.textContent = email;

    newsletterContainer.style.display = "none";
    successPageContainer.style.display = "flex";
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

dismissBtn.addEventListener("click", function () {
  successPageContainer.style.display = "none";
  newsletterContainer.style.display = "block";

  const isDesktop = window.matchMedia("(min-width: 1440px)");
  if (isDesktop.matches) {
    newsletterContainer.style.display = "flex";
  }

  signupForm.reset();
});
