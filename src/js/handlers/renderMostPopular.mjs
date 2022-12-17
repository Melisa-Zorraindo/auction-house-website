import { renderNavbarDesktop } from "../components/navbar/desktopNavbar.mjs";
import { renderNavbarMobile } from "../components/navbar/mobileNavbar.mjs";
import { loadFromStorage } from "../storage/load.mjs";
import { logout } from "./logout.mjs";
import { sortByMostPopular } from "../components/listings/mostPopular.mjs";
import { createListingsHTML } from "../components/listings/allListings.mjs";
import { selectAvatar } from "./selectAvatar.mjs";
import { createNewListing } from "./createNewListing.mjs";
import { createFooterHTML } from "../components/footer/footer.mjs";

const profile = loadFromStorage("profile");

export async function renderMostPopularPage() {
  //render navigation bars
  await renderNavbarDesktop();
  renderNavbarMobile();

  //make log out funcionality available only if there's a profile saved in storage
  if (profile) {
    logout();
  }

  //render listings
  const MOST_POPULAR = await sortByMostPopular();
  const MOST_POPULAR_LISTINGS = document.querySelector("#most-popular");
  createListingsHTML(MOST_POPULAR_LISTINGS, "Most popular", MOST_POPULAR);

  //edit profile funtionality
  selectAvatar();

  //create new listing functionality
  createNewListing();

  //render footer
  createFooterHTML();
}
