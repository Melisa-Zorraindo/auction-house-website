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
  // console.log(result);

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

/**
 * Sends a GET request to API
 * to fetch single item
 * @param {string} accessToken that grants permissions to API
 * @param {string} id listing's id
 * @returns item that matches id
 */
export async function fetchSingleListing(accessToken, id) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const response = await fetch(
    `${API_AUCTION_URL}listings/${id}?_seller=true&_bids=true`,
    options
  );
  return await response.json();
}
