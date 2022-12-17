import { login } from "../api/auth/login.mjs";

function submitLoginForm() {
  const LOGIN_FORM = document.querySelector("form#login-form");
  const email = document.querySelector("input#login-email");
  const password = document.querySelector("input#login-password");

  LOGIN_FORM.addEventListener("submit", (event) => {
    event.preventDefault();

    login(email.value, password.value);
  });
}

submitLoginForm();
