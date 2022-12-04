import { API_AUCTION_URL } from "../constants.js";
import { displayApiError } from "../../errorHandling/apiError.js";

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
  const USER_FEEDBACK = document.querySelector("#bid-feedback");

  if (response.ok) {
    USER_FEEDBACK.classList.add("bg-success");
    USER_FEEDBACK.innerHTML = "Your bid has been placed";
  } else {
    const {
      errors: [{ message }],
    } = result;
    console.log(result);
    displayApiError(USER_FEEDBACK, message);
  }
}
