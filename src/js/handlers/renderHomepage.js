import { renderNavbarDesktop } from "../components/navbar/desktopNavbar.js";
import { renderNavbarMobile } from "../components/navbar/mobileNavbar.js";
import { loadFromStorage } from "../storage/load.js";
import { logout } from "./logout.js";
import { fetchListings } from "../api/feed/read.js";
import { sortByMostPopular } from "../components/listings/mostPopular.js";
import { createCardGroups } from "../components/listings/latestListings.js";
import { getFinishSoonItems } from "../components/listings/finishSoon.js";
import { createFooterHTML } from "../components/footer/footer.js";

const profile = loadFromStorage("profile");

export async function renderHomepage() {
  //render navigation bars
  renderNavbarDesktop();
  renderNavbarMobile();

  //make log out functionaliy available only if there's a profile saved in storage
  if (profile) {
    logout();
  }

  //render listings
  const MOST_POPULAR = await sortByMostPopular();
  const MOST_POPULAR_LISTINGS = document.querySelector("#popular-listings");
  createCardGroups(MOST_POPULAR_LISTINGS, "Most popular", MOST_POPULAR);

  const LATEST_ITEMS = await fetchListings();
  const LATEST_LISTINGS = document.querySelector("#latest-listings");
  createCardGroups(LATEST_LISTINGS, "Latest listings", LATEST_ITEMS);

  const FINISH_SOON = await getFinishSoonItems();
  const FINISH_SOON_ITEMS = document.querySelector("#finish-soon");
  createCardGroups(FINISH_SOON_ITEMS, "Finish soon", FINISH_SOON);

  //render footer
  createFooterHTML();
}
