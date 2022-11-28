import { renderNavbarDesktop } from "../components/navbar/desktopNavbar.js";
import { renderNavbarMobile } from "../components/navbar/mobileNavbar.js";
import { loadFromStorage } from "../storage/load.js";
import { logout } from "./logout.js";
import { getFinishSoonItems } from "../components/listings/finishSoon.js";
import { createListingsHTML } from "../components/listings/allListings.js";
import { selectAvatar } from "./selectAvatar.js";
import { createFooterHTML } from "../components/footer/footer.js";

const profile = loadFromStorage("profile");

export async function renderEndSoonPage() {
  //render navigation bars
  renderNavbarDesktop();
  renderNavbarMobile();

  //make log out functionality available only if there's a profile saved in storage
  if (profile) {
    logout();
  }

  //render listings
  const END_SOON = await getFinishSoonItems();
  const END_SOON_LISTINGS = document.querySelector("#hurry-up");
  createListingsHTML(END_SOON_LISTINGS, "Short time bids", END_SOON);

  //edit profile functionality
  selectAvatar();

  //render footer
  createFooterHTML();
}
