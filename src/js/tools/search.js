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

  if (filteredListings.length === 0) {
    container.innerHTML = `<div
                            class="my-3 alert alert-warning alert-dismissible fade show"
                            role="alert"
                          >
                            <h6 class="alert-heading fw-bold">Oops</h6>
                            <div>There are no listings that match your search terms</div>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="alert"
                              aria-label="Close"
                            ></button>
                          </div>`;
  } else {
    createListingsHTML(container, "Your search results:", filteredListings);
  }
}
