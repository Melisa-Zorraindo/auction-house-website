import { fetchListings } from "../api/feed/read.js";
import { sortByMostPopular } from "../components/listings/mostPopular.js";
import { createListingsHTML } from "../components/listings/latestListings.js";
import { getFinishSoonItems } from "../components/listings/finishSoon.js";

export async function renderHomepage() {
  const MOST_POPULAR = await sortByMostPopular();
  const MOST_POPULAR_LISTINGS = document.querySelector("#popular-listings");
  createListingsHTML(MOST_POPULAR_LISTINGS, "Most popular", MOST_POPULAR);

  const LATEST_ITEMS = await fetchListings();
  const LATEST_LISTINGS = document.querySelector("#latest-listings");
  createListingsHTML(LATEST_LISTINGS, "Latest listings", LATEST_ITEMS);

  const FINISH_SOON = await getFinishSoonItems();
  const FINISH_SOON_ITEMS = document.querySelector("#finish-soon");
  createListingsHTML(FINISH_SOON_ITEMS, "Finish soon", FINISH_SOON);
}
