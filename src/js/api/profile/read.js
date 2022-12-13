import { API_AUCTION_URL } from "../constants.js";
import { displayFeedback } from "../feedbackMessage/feedback.js";

/**
 * Sends a GET request to API
 * to fetch a single profile
 * @param {string} accessToken that grants permissions to API
 * @param {string} name user's name
 * @returns item that matches user's name
 */
export async function fetchSingleProfile(accessToken, name) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const response = await fetch(
    `${API_AUCTION_URL}profiles/${name}?_listings=true`,
    options
  );
  const result = await response.json();
  const USER_FEEDBACK = document.querySelector("#feedback");

  if (response.ok) {
    return result;
  } else {
    const {
      errors: [{ message }],
    } = result;
    displayFeedback(USER_FEEDBACK, "An error ocurred", message, "danger");
  }
}
