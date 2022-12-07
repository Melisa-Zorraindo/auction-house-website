import { loadFromStorage } from "../storage/load.js";
import { placeBid } from "../api/feed/create.js";

const credits = loadFromStorage("credits");
const accessToken = loadFromStorage("accessToken");

export function handlePlaceBidSubmission(amount, id) {
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
