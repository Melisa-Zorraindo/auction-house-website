import { registerProfile } from "../api/auth/register.mjs";
import * as validation from "../errorHandling/index.mjs";

const AVATAR_FIELD = document.querySelector("#avatar");

//select registration form and validate on submission
const REGISTRATION_FORM = document.querySelector("#registration-form");
REGISTRATION_FORM.addEventListener("submit", validateRegistrationForm);

//display errors or hide error messages on key up
const USERNAME_FIELD = document.querySelector("#username");
const USERNAME_ERROR = document.querySelector("#username-error");

const EMAIL_FIELD = document.querySelector("#email");
const EMAIL_ERROR = document.querySelector("#email-error");

const PASSWORD_FIELD = document.querySelector("#password");
const PASSWORD_ERROR = document.querySelector("#pass-error");

const PASSWORD_REPEAT_FIELD = document.querySelector("#password-repeat");
const PASSWORD_MATCH_ERROR = document.querySelector("#pass-match-error");

USERNAME_FIELD.addEventListener("keyup", () => {
  if (validation.checkUsername(USERNAME_FIELD.value)) {
    validation.removeError(USERNAME_FIELD, USERNAME_ERROR);
  } else {
    validation.displayError(USERNAME_FIELD, USERNAME_ERROR);
  }
});

EMAIL_FIELD.addEventListener("keyup", () => {
  if (validation.checkEmail(EMAIL_FIELD.value)) {
    validation.removeError(EMAIL_FIELD, EMAIL_ERROR);
  } else {
    validation.displayError(EMAIL_FIELD, EMAIL_ERROR);
  }
});

PASSWORD_FIELD.addEventListener("keyup", () => {
  if (validation.checkPasswordLength(PASSWORD_FIELD.value)) {
    validation.removeError(PASSWORD_FIELD, PASSWORD_ERROR);
  } else {
    validation.displayError(PASSWORD_FIELD, PASSWORD_ERROR);
  }
});

PASSWORD_REPEAT_FIELD.addEventListener("keyup", () => {
  if (
    validation.checkPasswordsMatch(
      PASSWORD_FIELD.value,
      PASSWORD_REPEAT_FIELD.value
    )
  ) {
    validation.removeError(PASSWORD_REPEAT_FIELD, PASSWORD_MATCH_ERROR);
  } else {
    validation.displayError(PASSWORD_REPEAT_FIELD, PASSWORD_MATCH_ERROR);
  }
});

/**
 * If values entered pass validation,
 * it calls API to register new user.
 * If values don't pass validation
 * it displays errors on submission
 * @param {event} event
 */
export function validateRegistrationForm(event) {
  event.preventDefault();

  if (
    validation.checkUsername(USERNAME_FIELD.value) &&
    validation.checkEmail(EMAIL_FIELD.value) &&
    validation.checkPasswordLength(PASSWORD_FIELD.value) &&
    validation.checkPasswordsMatch(
      PASSWORD_FIELD.value,
      PASSWORD_REPEAT_FIELD.value
    )
  ) {
    registerProfile(
      USERNAME_FIELD.value,
      EMAIL_FIELD.value,
      PASSWORD_FIELD.value,
      AVATAR_FIELD.value
    );
  } else {
    if (validation.checkUsername(USERNAME_FIELD.value)) {
      validation.removeError(USERNAME_FIELD, USERNAME_ERROR);
    } else {
      validation.displayError(USERNAME_FIELD, USERNAME_ERROR);
    }

    if (validation.checkEmail(EMAIL_FIELD.value)) {
      validation.removeError(EMAIL_FIELD, EMAIL_ERROR);
    } else {
      validation.displayError(EMAIL_FIELD, EMAIL_ERROR);
    }

    if (validation.checkPasswordLength(PASSWORD_FIELD.value)) {
      validation.removeError(PASSWORD_FIELD, PASSWORD_ERROR);
    } else {
      validation.displayError(PASSWORD_FIELD, PASSWORD_ERROR);
    }

    if (
      validation.checkPasswordsMatch(
        PASSWORD_FIELD.value,
        PASSWORD_REPEAT_FIELD.value
      )
    ) {
      validation.removeError(PASSWORD_REPEAT_FIELD, PASSWORD_MATCH_ERROR);
    } else {
      validation.displayError(PASSWORD_REPEAT_FIELD, PASSWORD_MATCH_ERROR);
    }
  }
}
