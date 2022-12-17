import { renderHomepage } from "./handlers/renderHomepage.mjs";
import { renderAllListingsPage } from "./handlers/renderAllListingsPage.mjs";
import { renderMostPopularPage } from "./handlers/renderMostPopular.mjs";
import { renderEndSoonPage } from "./handlers/renderEndSoonPage.mjs";
import { renderSingleListingPage } from "./handlers/renderSingleListing.mjs";
import { renderProfile } from "./handlers/renderProfilePage.mjs";

//render different pages
const path = location.pathname;

if (path === "/all-listings.html") {
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
} else {
  //render homepage
  await renderHomepage();
}
