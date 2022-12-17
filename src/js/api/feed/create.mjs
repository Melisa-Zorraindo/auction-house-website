import { API_AUCTION_URL } from "../constants.mjs";
import { displayFeedback } from "../feedbackMessage/feedback.mjs";

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

  const USER_FEEDBACK = document.querySelector("#new-listing-feedback");

  try {
    const response = await fetch(
      `${API_AUCTION_URL}${NEW_LISTING_PATH}`,
      options
    );
    const result = await response.json();

    if (response.ok) {
      const { id } = result;
      window.location.assign(`/feed-item.html?id=${id}`);
    } else {
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

  const USER_FEEDBACK = document.querySelector("#feedback");
  const USER_BID_FEEDBACK = document.querySelector("#bid-feedback");

  try {
    const response = await fetch(
      `${API_AUCTION_URL}listings/${id}/bids`,
      options
    );
    const result = await response.json();

    if (response.ok) {
      displayFeedback(
        USER_BID_FEEDBACK,
        "Good luck!",
        "Your bid was successfully placed",
        "success"
      );
      setTimeout(() => {
        location.reload();
      }, 1500);
      return result;
    } else {
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
