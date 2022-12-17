import { API_AUCTION_URL } from "../constants.mjs";
import { saveToStorage } from "../../storage/save.mjs";
import { displayFeedback } from "../feedbackMessage/feedback.mjs";

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

  const USER_FEEDBACK = document.querySelector("#update-avatar-feedback");

  try {
    const response = await fetch(
      `${API_AUCTION_URL}profiles/${name}/media`,
      options
    );
    const result = await response.json();

    if (response.ok) {
      const { accessToken, credits, ...profile } = result;
      saveToStorage("profile", profile);
      displayFeedback(
        USER_FEEDBACK,
        "Awesome",
        "Your profile picture was successfully updated",
        "success"
      );
      location.reload();
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
