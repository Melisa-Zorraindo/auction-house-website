import { API_AUCTION_URL } from "../constants.mjs";
import { displayFeedback } from "../feedbackMessage/feedback.mjs";

const REMOVE_LISTING_PATH = "listings/";

/**
 * Sends a DELETE request to the API
 * to remove a listing
 * @param {string} accessToken that grants permissions to API
 * @param {string} id single item's id
 */
export async function removeListing(accessToken, id) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const USER_FEEDBACK = document.querySelector("#remove-listing-feedback");

  try {
    const response = await fetch(
      `${API_AUCTION_URL}${REMOVE_LISTING_PATH}${id}`,
      options
    );

    if (response.ok) {
      displayFeedback(
        USER_FEEDBACK,
        "Awesome",
        "Your listing has been removed",
        "success"
      );
      setTimeout(() => {
        window.location.assign("index.html");
      }, 1500);
    } else {
      const result = await response.json();
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
