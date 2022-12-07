import { API_AUCTION_URL } from "../constants.js";
import { displayApiError } from "../../errorHandling/apiError.js";

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

  const response = await fetch(
    `${API_AUCTION_URL}${REMOVE_LISTING_PATH}${id}`,
    options
  );

  const USER_FEEDBACK = document.querySelector("#delete-feedback");

  if (response.ok) {
    alert("Your listing has been removed");
    window.location.assign("index.html");
  } else {
    const result = await response.json();
    const {
      errors: [{ message }],
    } = result;
    console.log(result);
    displayApiError(USER_FEEDBACK, message);
  }
}