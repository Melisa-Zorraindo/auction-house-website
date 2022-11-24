import { renderNavbarDesktop } from "./components/navbar/desktopNavbar.js";
import { renderNavbarMobile } from "./components/navbar/mobileNavbar.js";
import { loadFromStorage } from "./storage/load.js";
import { logout } from "./handlers/logout.js";
import { createListingsHTML } from "./components/listings/listings.js";
import { fetchListings } from "./api/feed/read.js";

const profile = loadFromStorage("profile");

//render navigation bars
renderNavbarDesktop();
renderNavbarMobile();

//make log out functionaliy available only if there's a profile saved in storage
if (profile) {
  logout();
}

//render listings on homepage
const LATEST_ITEMS = await fetchListings();

const LATEST_LISTINGS = document.querySelector("#latest-listings");
createListingsHTML(LATEST_LISTINGS, "Latest listings", LATEST_ITEMS);
