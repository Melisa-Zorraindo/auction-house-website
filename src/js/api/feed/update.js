import { API_AUCTION_URL } from "../constants.js";
import { displayApiError } from "../../errorHandling/apiError.js";

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

  const response = await fetch(`${API_AUCTION_URL}listings/${id}`, options);
  const result = await response.json();

  const USER_FEEDBACK = document.querySelector("#update-listing-feedback");

  if (response.ok) {
    location.reload();
  } else {
    const {
      errors: [{ message }],
    } = result;
    displayApiError(USER_FEEDBACK, message);
  }
}
