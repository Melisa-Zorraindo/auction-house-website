import { renderNavbarDesktop } from "../components/navbar/desktopNavbar.mjs";
import { renderNavbarMobile } from "../components/navbar/mobileNavbar.mjs";
import { loadFromStorage } from "../storage/load.mjs";
import { logout } from "./logout.mjs";
import { fetchListings } from "../api/feed/read.mjs";
import { createListingsHTML } from "../components/listings/allListings.mjs";
import { selectAvatar } from "./selectAvatar.mjs";
import { createNewListing } from "./createNewListing.mjs";
import { createFooterHTML } from "../components/footer/footer.mjs";

const profile = loadFromStorage("profile");

export async function renderAllListingsPage() {
  //render navigation bars
  await renderNavbarDesktop();
  renderNavbarMobile();

  //make log out functionality available if there's a profile saved in storage
  if (profile) {
    logout();
  }

  //render listings
  const ALL_LISTINGS = await fetchListings();
  const ALL_LISTINGS_ITEMS = document.querySelector("#all-listings");
  createListingsHTML(ALL_LISTINGS_ITEMS, "Latest listings", ALL_LISTINGS);

  //edit profile functionality
  selectAvatar();

  //create new listing functionality
  createNewListing();

  //render footer
  createFooterHTML();
}
