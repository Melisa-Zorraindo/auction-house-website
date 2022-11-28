import { renderNavbarDesktop } from "../components/navbar/desktopNavbar.js";
import { renderNavbarMobile } from "../components/navbar/mobileNavbar.js";
import { loadFromStorage } from "../storage/load.js";
import { logout } from "./logout.js";
import { fetchListings } from "../api/feed/read.js";
import { createListingsHTML } from "../components/listings/allListings.js";
import { selectAvatar } from "./selectAvatar.js";
import { createFooterHTML } from "../components/footer/footer.js";

const profile = loadFromStorage("profile");

export async function renderAllListingsPage() {
  //render navigation bars
  renderNavbarDesktop();
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

  //render footer
  createFooterHTML();
}
