import { API_AUCTION_URL } from "../constants.mjs";
import { displayFeedback } from "../feedbackMessage/feedback.mjs";

/**
 * Sends a PUT request to the API
 * to update listing's data
 * @param {string} accessToken that grants permissions to API
 * @param {string} newTitle chosen by user, if no title chosen it won't be changed
 * @param {string} newDescription chosen by the user
 * @param {Array} newTags array of strings
 * @param {Array} newUrls array of fully formed urls
 * @param {string} id listing's id
 * @returns listing with updated data
 */
export async function editListing(
  accessToken,
  newTitle,
  newDescription,
  newTags,
  newUrls,
  id
) {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      title: newTitle,
      description: newDescription,
      tags: newTags,
      media: newUrls,
    }),
  };

  const USER_SUCCESS_FEEDBACK = document.querySelector(
    "#update-listing-success"
  );
  const USER_ERROR_FEEDBACK = document.querySelector("#update-listing-error");

  try {
    const response = await fetch(`${API_AUCTION_URL}listings/${id}`, options);
    const result = await response.json();
    if (response.ok) {
      displayFeedback(
        USER_SUCCESS_FEEDBACK,
        "Awesome",
        "Your listing was successfully updated",
        "success"
      );
      setTimeout(() => {
        location.reload();
      }, 1500);
    } else {
      const {
        errors: [{ message }],
      } = result;
      displayFeedback(
        USER_ERROR_FEEDBACK,
        "An error occurred",
        message,
        "danger"
      );
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
