import { renderNavbarDesktop } from "../components/navbar/desktopNavbar.mjs";
import { renderNavbarMobile } from "../components/navbar/mobileNavbar.mjs";
import { renderSecondaryNavbar } from "../components/navbar/secondaryNavbar.mjs";
import { links } from "../components/navbar/secondaryNavbarLinks.mjs";
import { loadFromStorage } from "../storage/load.mjs";
import { logout } from "./logout.mjs";
import { createUserInfoContainer } from "../components/profile/userInfo.mjs";
import { fetchSingleProfile } from "../api/profile/read.mjs";
import { fetchUserListings } from "../api/feed/read.mjs";
import { createListingsHTML } from "../components/listings/allListings.mjs";
import { selectAvatar } from "./selectAvatar.mjs";
import { createNewListing } from "./createNewListing.mjs";
import { createFooterHTML } from "../components/footer/footer.mjs";

const profile = loadFromStorage("profile");
const accessToken = loadFromStorage("accessToken");

//get string param to display profile
const parameterString = window.location.search;
const searchParams = new URLSearchParams(parameterString);
const userName = searchParams.get("userName");

export async function renderProfile() {
  //render navigation bars
  const SEC_NAVBAR_UL = document.querySelector("#sec-nav");
  await renderNavbarDesktop();
  renderSecondaryNavbar(SEC_NAVBAR_UL, links);
  renderNavbarMobile();

  //make log out functionality available if there's a profile saved in storage
  if (profile) {
    logout();
  }

  //render user info
  const userContainer = document.querySelector("#user-info");
  const userProfile = await fetchSingleProfile(accessToken, userName);
  createUserInfoContainer(userContainer, userProfile);

  //render user's listings
  const USER_LISTINGS = await fetchUserListings(accessToken, userName);
  const USER_LISTINGS_CONTAINER = document.querySelector("#user-listings");
  createListingsHTML(
    USER_LISTINGS_CONTAINER,
    `${userName}'s listings`,
    USER_LISTINGS
  );

  //edit profile funtionality
  selectAvatar();

  //create new listing functionality
  createNewListing();

  //render footer
  createFooterHTML();
}
