import { renderNavbarDesktop } from "../components/navbar/desktopNavbar.js";
import { renderNavbarMobile } from "../components/navbar/mobileNavbar.js";
import { loadFromStorage } from "../storage/load.js";
import { logout } from "./logout.js";
import { sortByMostPopular } from "../components/listings/mostPopular.js";
import { createListingsHTML } from "../components/listings/allListings.js";
import { createFooterHTML } from "../components/footer/footer.js";

const profile = loadFromStorage("profile");

export async function renderMostPopularPage() {
  //render navigation bars
  renderNavbarDesktop();
  renderNavbarMobile();

  //make log out funcionality available only if there's a profile saved in storage
  if (profile) {
    logout();
  }

  //render listings
  const MOST_POPULAR = await sortByMostPopular();
  const MOST_POPULAR_LISTINGS = document.querySelector("#most-popular");
  createListingsHTML(MOST_POPULAR_LISTINGS, "Most popular", MOST_POPULAR);

  //render footer
  createFooterHTML();
}
