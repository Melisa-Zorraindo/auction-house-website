import { API_AUCTION_URL } from "../constants.js";
import { displayFeedback } from "../feedbackMessage/feedback.js";

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
    const { id } = result;
    window.location.assign(`/feed-item.html?id=${id}`);
  } else {
    const {
      errors: [{ message }],
    } = result;
    console.log(result);
    displayFeedback(USER_FEEDBACK, "An error occurred", message, "danger");
  }
}

/**
 * Sends a POST request to the API
 * to bid on listing
 * @param {string} accessToken that grants permissions to API
 * @param {number} quantity amount of credits user is bidding
 * @param {string} id single item's id
 */
export async function placeBid(accessToken, quantity, id) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      amount: quantity,
    }),
  };

  const response = await fetch(
    `${API_AUCTION_URL}listings/${id}/bids`,
    options
  );
  const result = await response.json();
  const USER_FEEDBACK = document.querySelector("#feedback");

  if (response.ok) {
    displayFeedback(
      USER_FEEDBACK,
      "Good luck!",
      "Your bid was successfully placed",
      "success"
    );
    location.reload();
    return result;
  } else {
    const {
      errors: [{ message }],
    } = result;
    console.log(result);
    displayFeedback(USER_FEEDBACK, "An error occurred", message, "danger");
  }
}
