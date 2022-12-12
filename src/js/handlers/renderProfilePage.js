import { renderNavbarDesktop } from "../components/navbar/desktopNavbar.js";
import { renderNavbarMobile } from "../components/navbar/mobileNavbar.js";
import { loadFromStorage } from "../storage/load.js";
import { logout } from "./logout.js";
import { createUserInfoContainer } from "../components/profile/userInfo.js";
import { fetchSingleProfile } from "../api/profile/read.js";
import { fetchUserListings } from "../api/feed/read.js";
import { createListingsHTML } from "../components/listings/allListings.js";
import { selectAvatar } from "./selectAvatar.js";
import { createNewListing } from "./createNewListing.js";
import { createFooterHTML } from "../components/footer/footer.js";

const profile = loadFromStorage("profile");
const accessToken = loadFromStorage("accessToken");

export async function renderProfile() {
  const userName = profile.name;

  //render navigation bars
  await renderNavbarDesktop();
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
