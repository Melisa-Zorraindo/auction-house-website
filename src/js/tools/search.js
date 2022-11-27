import { createListingsHTML } from "../components/listings/allListings.js";

/**
 * Uses the string passed in by the user
 * in the search bar to filter posts which
 * include the string either in the listing
 * title or in its description
 * @param {Array} array to implement filter on
 * @param {string} queryString
 * @param {HTMLDivElement} container where to render the filtered elements
 */
export function searchListings(arr, queryString, container) {
  const filteredListings = arr.filter(({ title, description }) => {
    if (description) {
      return (
        title.toLowerCase().includes(queryString.toLowerCase()) ||
        description.toLowerCase().includes(queryString.toLowerCase())
      );
    } else {
      return title.toLowerCase().includes(queryString.toLowerCase());
    }
  });

  container.innerHTML = "";

  //discard finished bids (earlier than today)
  const today = new Date();

  let array = [];
  filteredListings.map((item) => {
    const newDate = new Date(item.endsAt);
    if (newDate >= today) {
      array.push(item);
    }
  });

  createListingsHTML(container, "Your search results:", array);
}