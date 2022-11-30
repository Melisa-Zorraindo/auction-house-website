import { renderNavbarDesktop } from "../components/navbar/desktopNavbar.js";
import { renderNavbarMobile } from "../components/navbar/mobileNavbar.js";
import { loadFromStorage } from "../storage/load.js";
import { logout } from "./logout.js";
import { fetchSingleListing } from "../api/feed/read.js";
import { createSingleListingHTML } from "../components/listings/singleListing.js";
import { selectAvatar } from "./selectAvatar.js";
import { createNewListing } from "./createNewListing.js";
import { createFooterHTML } from "../components/footer/footer.js";

const profile = loadFromStorage("profile");
const accessToken = loadFromStorage("accessToken");

//get string param to display single listing
const parameterString = window.location.search;
const searchParams = new URLSearchParams(parameterString);
const listingId = searchParams.get("id");

export async function renderSingleListingPage() {
  //render navigation bars
  renderNavbarDesktop();
  renderNavbarMobile();

  //make log out functionality available if there's a profile saved in storage
  if (profile) {
    logout();
  }

  //render listings
  const SINGLE_LISTING = await fetchSingleListing(accessToken, listingId);
  const SINGLE_LISTING_CONTAINER = document.querySelector(
    "#single-listing-container"
  );
  createSingleListingHTML(SINGLE_LISTING_CONTAINER, SINGLE_LISTING);

  //edit profile funtionality
  selectAvatar();

  //create new listing functionality
  createNewListing();

  //render footer
  createFooterHTML();
}
