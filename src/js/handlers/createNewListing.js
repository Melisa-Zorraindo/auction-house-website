import { createListing } from "../api/feed/create.js";
import { loadFromStorage } from "../storage/load.js";

export async function createNewListing() {
  const NEW_LISTING_FORM = document.querySelector("form#new-listing");
  const LISTING_TITLE = document.querySelector("#listing-title");
  const LISTING_DESCRIPTION = document.querySelector("#listing-description");
  const LISTING_TAGS = document.querySelector("#listing-tags");
  const LISTING_URLS = document.querySelector("#listing-urls");
  const LISTING_END_DATE = document.querySelector("#end-date");
  const LISTING_END_MONTH = document.querySelector("#end-month");
  const LISTING_END_YEAR = document.querySelector("#end-year");

  NEW_LISTING_FORM.addEventListener("submit", (event) => {
    event.preventDefault();

    //convert string into array and limit amount of tags according to API restrictions
    const TAGS_ARRAY = LISTING_TAGS.value.split(",", "8");

    //convert string into array and limit amount of urls according to API restrictions
    let URLS_ARRAY = LISTING_URLS.value.split(",", "8");

    //if empty url array, make it null for the API to accept it
    if (URLS_ARRAY[0].length === 0) {
      URLS_ARRAY = null;
    }

    const today = new Date();
    const day = 1000 * 60 * 60 * 24;

    const BIDS_END_DATE = new Date(
      LISTING_END_DATE.value +
        " " +
        LISTING_END_MONTH.value +
        " " +
        LISTING_END_YEAR.value
    );

    //prevent user from setting a past date for bids deadline
    if (BIDS_END_DATE < today - day) {
      alert("Choose a future date");
    } else {
      const accessToken = loadFromStorage("accessToken");
      createListing(
        accessToken,
        LISTING_TITLE.value,
        LISTING_DESCRIPTION.value,
        TAGS_ARRAY,
        URLS_ARRAY,
        BIDS_END_DATE
      );
    }
  });
}
