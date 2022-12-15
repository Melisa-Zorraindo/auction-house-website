import { loadFromStorage } from "../storage/load.js";
import { fetchSingleProfile } from "../api/profile/read.js";
import { placeBid } from "../api/feed/create.js";

const accessToken = loadFromStorage("accessToken");
const profile = loadFromStorage("profile");

export async function handlePlaceBidSubmission(amount, id) {
  const { credits } = await fetchSingleProfile(accessToken, profile.name);

  const quantity = parseInt(amount);
  //send amount to API only if user has filled in the amount field and if the amount of credits to be sent is less than the amount of credits the user has
  //alert user if errors
  if (quantity && quantity < credits) {
    placeBid(accessToken, quantity, id);
  } else if (!amount) {
    alert("Please enter amount");
  } else if (amount > credits) {
    alert(
      `You cannot bid higher than your current amount of credits. You have ${credits} credits`
    );
  }
}
