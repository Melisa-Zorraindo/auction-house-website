import { renderHomepage } from "./handlers/renderHomepage.mjs";
import { renderAllListingsPage } from "./handlers/renderAllListingsPage.mjs";
import { renderMostPopularPage } from "./handlers/renderMostPopular.mjs";
import { renderEndSoonPage } from "./handlers/renderEndSoonPage.mjs";
import { renderSingleListingPage } from "./handlers/renderSingleListing.mjs";
import { renderProfile } from "./handlers/renderProfilePage.mjs";

//render different pages

const path = location.pathname;

switch (path) {
  case "/all-listings.html":
    await renderAllListingsPage();
    break;
  case "/most-popular.html":
    await renderMostPopularPage();
    break;
  case "/hurry-up.html":
    await renderEndSoonPage();
    break;
  default:
    if (path.includes("/feed-item.html")) {
      await renderSingleListingPage();
      break;
    } else if (path.includes("/profile.html")) {
      await renderProfile();
      break;
    } else {
      await renderHomepage();
      break;
    }
}
