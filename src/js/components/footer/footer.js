import { fetchListings } from "../../api/feed/read.js";

//get number of listings, profiles, and bids to print in footer
const listings = await fetchListings();

const sumOfBids = listings.reduce((total, currentObject) => {
  total += currentObject._count.bids;
  return total;
}, 0);

//create footer
export function createFooterHTML() {
  const footerContainer = document.querySelector("#footer");

  const apiInfoDiv = document.createElement("div");
  apiInfoDiv.classList.add(
    "bg-primary",
    "py-5",
    "d-flex",
    "justify-content-around"
  );
  footerContainer.append(apiInfoDiv);

  const infoListingsDiv = document.createElement("div");
  infoListingsDiv.classList.add("d-flex", "flex-column", "text-light");
  apiInfoDiv.append(infoListingsDiv);

  const listingsSpan = document.createElement("span");
  listingsSpan.innerHTML = "Listings";
  infoListingsDiv.append(listingsSpan);

  const listingsAmountSpan = document.createElement("span");
  listingsAmountSpan.innerHTML = `${listings.length}`;
  infoListingsDiv.append(listingsAmountSpan);

  const infoProfilesDiv = document.createElement("div");
  infoProfilesDiv.classList.add("d-flex", "flex-column", "text-light");
  apiInfoDiv.append(infoProfilesDiv);

  const profilesSpan = document.createElement("span");
  profilesSpan.innerHTML = "Profiles";
  infoProfilesDiv.append(profilesSpan);

  const profilesAmountSpan = document.createElement("span");
  profilesAmountSpan.innerHTML = "2";
  infoProfilesDiv.append(profilesAmountSpan);

  const infoBidsDiv = document.createElement("div");
  infoBidsDiv.classList.add("d-flex", "flex-column", "text-light");
  apiInfoDiv.append(infoBidsDiv);

  const bidsSpan = document.createElement("span");
  bidsSpan.innerHTML = "Bids";
  infoBidsDiv.append(bidsSpan);

  const bidsAmountSpan = document.createElement("span");
  bidsAmountSpan.innerHTML = `${sumOfBids}`;
  infoBidsDiv.append(bidsAmountSpan);

  const logoDiv = document.createElement("div");
  logoDiv.classList.add(
    "d-flex",
    "justify-content-center",
    "position-absolute",
    "top-50",
    "start-50",
    "translate-middle"
  );
  footerContainer.append(logoDiv);

  const logoImage = document.createElement("img");
  logoImage.setAttribute("src", "src/assets/logo-footer.png");
  logoImage.setAttribute("alt", "logo");
  logoDiv.append(logoImage);

  const copyrightDiv = document.createElement("div");
  copyrightDiv.classList.add(
    "bg-light",
    "py-5",
    "d-flex",
    "justify-content-center"
  );
  footerContainer.append(copyrightDiv);

  const copyrightSpan = document.createElement("span");
  copyrightSpan.innerHTML = "Copyright 2022";
  copyrightDiv.append(copyrightSpan);
}
