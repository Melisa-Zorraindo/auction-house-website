import { loadFromStorage } from "../storage/load.mjs";
import { fetchSingleProfile } from "../api/profile/read.mjs";
import { placeBid } from "../api/feed/create.mjs";
import { displayFeedback } from "../api/feedbackMessage/feedback.mjs";

const accessToken = loadFromStorage("accessToken");
const profile = loadFromStorage("profile");

export async function handlePlaceBidSubmission(amount, id) {
  const { credits } = await fetchSingleProfile(accessToken, profile.name);

  const USER_FEEDBACK = document.querySelector("#bid-feedback");

  const quantity = parseInt(amount);
  //send amount to API only if user has filled in the amount field and if the amount of credits to be sent is less than the amount of credits the user has
  //alert user if errors
  if (quantity && quantity < credits) {
    placeBid(accessToken, quantity, id);
  } else if (!amount) {
    displayFeedback(
      USER_FEEDBACK,
      "An error occurred",
      "Please enter amount",
      "danger"
    );
  } else if (amount > credits) {
    displayFeedback(
      USER_FEEDBACK,
      "An error occurred",
      `You cannot bid higher than your current amount of credits. You have ${credits} credits`,
      "danger"
    );
  }
}
