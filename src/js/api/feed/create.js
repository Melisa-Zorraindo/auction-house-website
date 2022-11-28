import { API_AUCTION_URL } from "../constants.js";
import { displayApiError } from "../../errorHandling/apiError.js";

const NEW_LISTING_PATH = "listings";

/**
 * Sends a POST request to the API
 * to create a new listing
 * @param {string} accessToken that grants permissions to API
 * @param {string} title user has chosen for their item
 * @param {string} description user has chosen for their item
 * @param {array} tags array of strings
 * @param {array} media array of urls
 * @param {date} date end of bids date
 */
export async function createListing(
  accessToken,
  title,
  description,
  tags,
  media,
  date
) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      title: title,
      description: description,
      tags: tags,
      media: media,
      endsAt: date,
    }),
  };

  const response = await fetch(
    `${API_AUCTION_URL}${NEW_LISTING_PATH}`,
    options
  );
  const result = await response.json();
  const USER_FEEDBACK = document.querySelector("#new-listing-feedback");

  if (response.ok) {
    location.reload();
  } else {
    const {
      errors: [{ message }],
    } = result;
    console.log(result);
    displayApiError(USER_FEEDBACK, message);
  }
}
