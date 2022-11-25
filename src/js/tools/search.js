import { createListingsHTML } from "../components/listings/allListings.js";

/**
 * Uses the string passed in by the user
 * in the search bar to filter posts which
 * include the string either in the body
 * or in the username
 * @param {Array} array to implement filter on
 * @param {string} queryString
 * @param {HTMLDivElement} container where to render the filtered elements
 */
export function searchListings(arr, queryString, container) {
  const filteredPosts = arr.filter(({ title, description, tags }) => {
    return title.toLowerCase().includes(queryString.toLowerCase());
    // ||  description.toLowerCase().includes(queryString.toLowerCase())
  });

  container.innerHTML = "";

  createListingsHTML(container, "Your search results:", filteredPosts);
}
