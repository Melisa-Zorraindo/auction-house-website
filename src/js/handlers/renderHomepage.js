import { fetchListings } from "../api/feed/read.js";
import { sortByMostPopular } from "../components/listings/mostPopular.js";
import { createListingsHTML } from "../components/listings/latestListings.js";

export async function renderHomepage() {
  const LATEST_ITEMS = await fetchListings();

  const LATEST_LISTINGS = document.querySelector("#latest-listings");
  createListingsHTML(LATEST_LISTINGS, "Latest listings", LATEST_ITEMS);

  const MOST_POPULAR = await sortByMostPopular();

  const MOST_POPULAR_LISTINGS = document.querySelector("#popular-listings");
  createListingsHTML(MOST_POPULAR_LISTINGS, "Most popular", MOST_POPULAR);
}
