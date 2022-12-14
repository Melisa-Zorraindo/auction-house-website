import { renderHomepage } from "./handlers/renderHomepage.js";
import { renderAllListingsPage } from "./handlers/renderAllListingsPage.js";
import { renderMostPopularPage } from "./handlers/renderMostPopular.js";
import { renderEndSoonPage } from "./handlers/renderEndSoonPage.js";
import { renderSingleListingPage } from "./handlers/renderSingleListing.js";
import { renderProfile } from "./handlers/renderProfilePage.js";

//render different pages
const path = location.pathname;

if (
  path !== "/all-listings.html" &&
  path !== "/most-popular.html" &&
  path !== "/hurry-up.html" &&
  !path.includes("/feed-item.html") &&
  !path.includes("/profile.html")
) {
  //render homepage
  await renderHomepage();
} else if (path === "/all-listings.html") {
  //render all listings page
  await renderAllListingsPage();
} else if (path === "/most-popular.html") {
  //render most popular page
  await renderMostPopularPage();
} else if (path === "/hurry-up.html") {
  //render hurry up page
  await renderEndSoonPage();
} else if (path.includes("/feed-item.html")) {
  //render single item page
  await renderSingleListingPage();
} else if (path.includes("/profile.html")) {
  //render profile page
  await renderProfile();
}
