import { API_AUCTION_URL } from "../constants.mjs";
import { displayFeedback } from "../feedbackMessage/feedback.mjs";

let LISTINGS_PATH = "listings?_active=true&sort=created&sortOrder=desc";

/**
 * Sends a GET request to the API
 * to fetch existing listings
 * @retuns a list of listing items
 */
export async function fetchListings() {
  const options = {
    method: "GET",
  };

  const USER_FEEDBACK = document.querySelector("#feedback");

  try {
    const response = await fetch(`${API_AUCTION_URL}${LISTINGS_PATH}`, options);
    const result = await response.json();

    if (response.ok) {
      return result;
    } else {
      const {
        errors: [{ message }],
      } = result;
      displayFeedback(USER_FEEDBACK, "An error ocurred", message, "danger");
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

  const USER_FEEDBACK = document.querySelector("#feedback");

  try {
    const response = await fetch(
      `${API_AUCTION_URL}listings/${id}?_seller=true&_bids=true`,
      options
    );
    const result = await response.json();

    if (response.ok) {
      return result;
    } else {
      const {
        errors: [{ message }],
      } = result;

      displayFeedback(USER_FEEDBACK, "An error ocurred", message, "danger");
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
 * Sends a GET request to the API
 * to fetch user's existing listings
 * @param {string} name user's name
 * @retuns a list of listing items
 */
export async function fetchUserListings(accessToken, name) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const USER_FEEDBACK = document.querySelector("#feedback");

  try {
    const response = await fetch(
      `${API_AUCTION_URL}profiles/${name}/listings`,
      options
    );
    const result = await response.json();

    if (response.ok) {
      return result;
    } else {
      const {
        errors: [{ message }],
      } = result;
      displayFeedback(USER_FEEDBACK, "An error ocurred", message, "danger");
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
