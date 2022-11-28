import { API_AUCTION_URL } from "../constants.js";
import { displayApiError } from "../../errorHandling/apiError.js";

let LISTINGS_PATH = "listings?sort=created&sortOrder=desc";

/**
 * Sends a GET request to the API
 * to fetch existing listings
 * @retuns a list of listing items
 */
export async function fetchListings() {
  const options = {
    method: "GET",
  };

  const response = await fetch(`${API_AUCTION_URL}${LISTINGS_PATH}`, options);
  const result = await response.json();

  if (response.ok) {
    return result;
  } else {
    const {
      errors: [{ message }],
    } = result;
    const USER_FEEDBACK = document.querySelector("#listings-feedback");
    displayApiError(USER_FEEDBACK, message);
  }
}
