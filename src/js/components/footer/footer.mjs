import { fetchListings } from "../../api/feed/read.mjs";

//get number of listings and bids to print in footer
const listings = await fetchListings();

const sumOfBids = listings.reduce((total, { _count: { bids } }) => {
  total += bids;
  return total;
}, 0);

//create footer
export function createFooterHTML() {
  const footerContainer = document.querySelector("#footer");

  const apiInfoDiv = document.createElement("div");
  apiInfoDiv.classList.add(
    "bg-secondary",
    "py-3",
    "d-flex",
    "flex-wrap",
    "justify-content-around"
  );
  footerContainer.append(apiInfoDiv);

  const infoListingsDiv = document.createElement("div");
  infoListingsDiv.classList.add(
    "d-flex",
    "flex-column",
    "align-items-center",
    "text-white",
    "popart-font",
    "h4"
  );
  apiInfoDiv.append(infoListingsDiv);

  const listingsAmountSpan = document.createElement("span");
  listingsAmountSpan.classList.add("popart-font");
  listingsAmountSpan.innerHTML = `${listings.length}`;
  infoListingsDiv.append(listingsAmountSpan);

  const listingsSpan = document.createElement("span");
  listingsSpan.innerHTML = "Listings";
  infoListingsDiv.append(listingsSpan);

  const infoProfilesDiv = document.createElement("div");
  infoProfilesDiv.classList.add(
    "d-flex",
    "flex-column",
    "align-items-center",
    "text-white",
    "popart-font",
    "h4"
  );
  apiInfoDiv.append(infoProfilesDiv);

  const profilesAmountSpan = document.createElement("span");
  profilesAmountSpan.innerHTML = "+100";
  infoProfilesDiv.append(profilesAmountSpan);

  const profilesSpan = document.createElement("span");
  profilesSpan.innerHTML = "Profiles";
  infoProfilesDiv.append(profilesSpan);

  const infoBidsDiv = document.createElement("div");
  infoBidsDiv.classList.add(
    "d-flex",
    "flex-column",
    "align-items-center",
    "text-white",
    "popart-font",
    "h4"
  );
  apiInfoDiv.append(infoBidsDiv);

  const bidsAmountSpan = document.createElement("span");
  bidsAmountSpan.innerHTML = `${sumOfBids}`;
  infoBidsDiv.append(bidsAmountSpan);

  const bidsSpan = document.createElement("span");
  bidsSpan.innerHTML = "Bids";
  infoBidsDiv.append(bidsSpan);

  const copyrightDiv = document.createElement("div");
  copyrightDiv.classList.add(
    "bg-primary",
    "py-3",
    "mb-2",
    "d-flex",
    "justify-content-center",
    "text-white"
  );
  footerContainer.append(copyrightDiv);

  const copyrightSpan = document.createElement("span");
  copyrightSpan.innerHTML = "Biddable Copyright 2022";
  copyrightDiv.append(copyrightSpan);
}
