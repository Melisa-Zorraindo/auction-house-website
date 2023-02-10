import { renderNavbarDesktop } from "../components/navbar/desktopNavbar.mjs";
import { renderNavbarMobile } from "../components/navbar/mobileNavbar.mjs";
import { renderSecondaryNavbar } from "../components/navbar/secondaryNavbar.mjs";
import { links } from "../components/navbar/secondaryNavbarLinks.mjs";
import { loadFromStorage } from "../storage/load.mjs";
import { logout } from "./logout.mjs";
import { getFinishSoonItems } from "../components/listings/finishSoon.mjs";
import { createListingsHTML } from "../components/listings/allListings.mjs";
import { selectAvatar } from "./selectAvatar.mjs";
import { createNewListing } from "./createNewListing.mjs";
import { createFooterHTML } from "../components/footer/footer.mjs";

const profile = loadFromStorage("profile");

export async function renderEndSoonPage() {
  //render navigation bars
  const SEC_NAVBAR_UL = document.querySelector("#sec-nav");
  await renderNavbarDesktop();
  renderSecondaryNavbar(SEC_NAVBAR_UL, links);
  renderNavbarMobile();

  //make log out functionality available only if there's a profile saved in storage
  if (profile) {
    logout();
  }

  //render listings
  const END_SOON = await getFinishSoonItems();
  const END_SOON_LISTINGS = document.querySelector("#hurry-up");
  createListingsHTML(END_SOON_LISTINGS, "Finishing soon", END_SOON);

  //edit profile functionality
  selectAvatar();

  //create new listing functionality
  createNewListing();

  //render footer
  createFooterHTML();
}
