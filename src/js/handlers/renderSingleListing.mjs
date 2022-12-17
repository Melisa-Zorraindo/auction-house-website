import { renderNavbarDesktop } from "../components/navbar/desktopNavbar.mjs";
import { renderNavbarMobile } from "../components/navbar/mobileNavbar.mjs";
import { loadFromStorage } from "../storage/load.mjs";
import { logout } from "./logout.mjs";
import { fetchSingleListing } from "../api/feed/read.mjs";
import { createSingleListingHTML } from "../components/listings/singleListing.mjs";
import { selectAvatar } from "./selectAvatar.mjs";
import { createNewListing } from "./createNewListing.mjs";
import { createFooterHTML } from "../components/footer/footer.mjs";

const profile = loadFromStorage("profile");
const accessToken = loadFromStorage("accessToken");

//get string param to display single listing
const parameterString = window.location.search;
const searchParams = new URLSearchParams(parameterString);
const listingId = searchParams.get("id");

export async function renderSingleListingPage() {
  //render navigation bars
  await renderNavbarDesktop();
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
