import { API_AUCTION_URL } from "../constants.js";
import { displayApiError } from "../../errorHandling/apiError.js";
import { saveToStorage } from "../../storage/save.js";

/**
 * Sends a PUT request to the API
 * to update user's avatar
 * @param {string} accessToken that grants permissions to API
 * @param {URL} media picture's url to be sent to API
 * @param {string} name profile's name
 * @returns profile with new avatar
 */
export async function editProfile(accessToken, media, name) {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      avatar: media,
    }),
  };

  const response = await fetch(
    `${API_AUCTION_URL}profiles/${name}/media`,
    options
  );
  const result = await response.json();

  const USER_FEEDBACK = document.querySelector("#edit-profile-feedback");

  if (response.ok) {
    const { accessToken, credits, ...profile } = result;
    saveToStorage("profile", profile);
    location.reload();
  } else {
    const {
      errors: [{ message }],
    } = result;
    displayApiError(USER_FEEDBACK, message);
  }
}
