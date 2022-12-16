import { API_AUCTION_URL } from "../constants.js";
import { displayFeedback } from "../feedbackMessage/feedback.js";
import * as storage from "../../storage/index.js";

const LOGIN_PATH = "auth/login";

/**
 * Sends a POST request to the API
 * to log in an existing user
 * @param {email} email
 * @param {string} password
 */
export async function login(email, password) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  };

  const USER_FEEDBACK = document.querySelector("#feedback");

  try {
    const response = await fetch(`${API_AUCTION_URL}${LOGIN_PATH}`, options);
    const result = await response.json();

    if (response.ok) {
      const { accessToken, credits, ...profile } = result;
      storage.saveToStorage("accessToken", accessToken);
      storage.saveToStorage("credits", credits);
      storage.saveToStorage("profile", profile);
      window.location.assign("./index.html");
    } else {
      const {
        errors: [{ message }],
      } = result;
      displayFeedback(USER_FEEDBACK, "An error occurred", message, "danger");
    }
  } catch (error) {
    console.log(error);
    displayFeedback(
      USER_FEEDBACK,
      "An error occurred",
      "Please try again later",
      "danger"
    );
  }
}
