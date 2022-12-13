import { API_AUCTION_URL } from "../constants.js";
import { handleSubmission } from "../../handlers/submission.js";
import { displayFeedback } from "../feedbackMessage/feedback.js";

const REGISTER_PATH = "auth/register";

/**
 * Sends a POST request to the API
 * to register a new user
 * @param {string} name
 * @param {email} email
 * @param {string} password
 * @param {URL} avatar
 */
export async function registerProfile(name, email, password, avatar) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      name,
      email,
      password,
      avatar,
    }),
  };

  const response = await fetch(`${API_AUCTION_URL}${REGISTER_PATH}`, options);
  const result = await response.json();

  const USER_FEEDBACK = document.querySelector("#feedback");

  if (response.ok) {
    handleSubmission();
  } else {
    const {
      errors: [{ message }],
    } = result;
    displayFeedback(USER_FEEDBACK, "An error occurred", message, "danger");
  }
}
