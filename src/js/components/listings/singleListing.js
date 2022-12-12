import { loadFromStorage } from "../../storage/load.js";
import { handlePlaceBidSubmission } from "../../handlers/placeBidSubmission.js";
import { editListing } from "../../api/feed/update.js";
import { removeListing } from "../../api/feed/delete.js";

const profile = loadFromStorage("profile");
const accessToken = loadFromStorage("accessToken");

export async function createSingleListingHTML(container, item) {
  const {
    title,
    media,
    seller: { avatar, name },
    _count: { bids: bidsQuantity },
    description,
    bids,
    id,
    endsAt,
  } = item;

  const pageTitle = document.querySelector("title");
  pageTitle.innerHTML = `Biddable | ${title}`;

  const firstRow = document.createElement("div");
  firstRow.classList.add("row");
  container.append(firstRow);

  const col = document.createElement("div");
  col.classList.add("col");
  firstRow.append(col);

  const carouselContainer = document.createElement("div");
  carouselContainer.classList.add("mb-3");
  col.append(carouselContainer);

  const secondRow = document.createElement("div");
  secondRow.classList.add("row");
  carouselContainer.append(secondRow);

  const carouselIndicators = document.createElement("div");
  carouselIndicators.setAttribute("id", "carouselExampleIndicators");
  carouselIndicators.setAttribute("data-bs-ride", "carousel");
  carouselIndicators.classList.add("carousel", "slide", "col-sm-4");
  secondRow.append(carouselIndicators);

  const carouselButtonsContainer = document.createElement("div");
  carouselButtonsContainer.classList.add(
    "carousel-indicators",
    "btn",
    "btn-primary"
  );
  carouselIndicators.append(carouselButtonsContainer);

  const carouselInner = document.createElement("div");
  carouselInner.classList.add("carousel-inner");
  carouselIndicators.append(carouselInner);

  if (media.length === 0 || !media) {
    let placeholderContainer = document.createElement("div");
    placeholderContainer.classList.add("text-center");
    carouselInner.append(placeholderContainer);

    let placeholderImage = document.createElement("img");
    placeholderImage.setAttribute("alt", "no image");
    placeholderImage.setAttribute(
      "src",
      "/src/assets/compressed-image-placeholder.jpg"
    );
    placeholderImage.classList.add("img-fluid");
    placeholderContainer.append(placeholderImage);

    carouselButtonsContainer.classList.add("d-none");
  } else {
    for (let i = 0; i < media.length; i++) {
      const carouselButton = document.createElement("button");
      carouselButton.setAttribute("type", "button");
      carouselButton.setAttribute(
        "data-bs-target",
        "#carouselExampleIndicators"
      );
      carouselButton.setAttribute("data-bs-slide-to", `${i - 1}`);
      carouselButton.setAttribute("aria-label", `Slide ${i}`);
      carouselButtonsContainer.append(carouselButton);

      const carouselItem = document.createElement("div");
      if (carouselButton.ariaLabel === "Slide 0") {
        carouselButton.classList.add("active");
        carouselButton.setAttribute("aria-current", "true");
        carouselItem.classList.add("active");
        carouselButton.setAttribute("data-bs-slide-to", `${media.length - 1}`);
      }
      carouselItem.classList.add("carousel-item", "text-center");
      carouselInner.append(carouselItem);

      const carouselPicture = document.createElement("img");
      carouselPicture.setAttribute("alt", "image uploaded by the user");
      carouselPicture.setAttribute("src", media[i]);
      carouselPicture.classList.add("img-fluid");
      carouselItem.append(carouselPicture);
    }
  }

  if (media.length > 0) {
    const carouselControlPrev = document.createElement("button");
    carouselControlPrev.setAttribute("type", "button");
    carouselControlPrev.setAttribute(
      "data-bs-target",
      "#carouselExampleIndicators"
    );
    carouselControlPrev.setAttribute("data-bs-slide", "prev");
    carouselControlPrev.classList.add("carousel-control-prev");
    carouselIndicators.append(carouselControlPrev);

    const carouselControlPrevIcon = document.createElement("span");
    carouselControlPrevIcon.setAttribute("aria-hidden", "true");
    carouselControlPrevIcon.classList.add(
      "carousel-control-prev-icon",
      "btn",
      "btn-primary"
    );
    carouselControlPrev.append(carouselControlPrevIcon);

    const carouselControlPrevText = document.createElement("span");
    carouselControlPrevText.classList.add("visually-hidden");
    carouselControlPrevText.innerHTML = "Previous";
    carouselControlPrev.append(carouselControlPrevText);

    const carouselControlNext = document.createElement("button");
    carouselControlNext.setAttribute("type", "button");
    carouselControlNext.setAttribute(
      "data-bs-target",
      "#carouselExampleIndicators"
    );
    carouselControlNext.setAttribute("data-bs-slide", "next");
    carouselControlNext.classList.add("carousel-control-next");
    carouselIndicators.append(carouselControlNext);

    const carouselControlNextIcon = document.createElement("span");
    carouselControlNextIcon.setAttribute("aria-hidden", "true");
    carouselControlNextIcon.classList.add(
      "carousel-control-next-icon",
      "btn",
      "btn-primary"
    );
    carouselControlNext.append(carouselControlNextIcon);

    const carouselControlNextText = document.createElement("span");
    carouselControlNextText.classList.add("visually-hidden");
    carouselControlNextText.innerHTML = "Next";
    carouselControlNext.append(carouselControlNextText);
  }

  const listingInfoContainer = document.createElement("div");
  listingInfoContainer.classList.add("col-sm-8", "my-5", "my-sm-0");
  secondRow.append(listingInfoContainer);

  const outerDiv = document.createElement("div");
  listingInfoContainer.append(outerDiv);

  const innerDiv = document.createElement("div");
  outerDiv.append(innerDiv);

  const listingInfoSellerContainer = document.createElement("div");
  listingInfoSellerContainer.classList.add(
    "d-flex",
    "flex-wrap",
    "gap-2",
    "justify-content-between",
    "align-items-center",
    "border-bottom",
    "border-1",
    "border-secondary",
    "pb-3",
    "border-opacity-25"
  );
  innerDiv.append(listingInfoSellerContainer);

  const profilePictureContainer = document.createElement("a");
  profilePictureContainer.setAttribute(
    "href",
    `/profile.html?userName=${name}`
  );
  profilePictureContainer.classList.add(
    "d-flex",
    "flex-wrap",
    "align-items-center",
    "gap-2",
    "text-decoration-none"
  );
  listingInfoSellerContainer.append(profilePictureContainer);

  const profilePicture = document.createElement("img");
  profilePicture.setAttribute("alt", "profile picture");

  //set default profile picture if user's void
  let userAvatar = avatar || "/src/assets/compressed-avatar-placeholder.jpg";
  profilePicture.setAttribute("src", `${userAvatar}`);
  profilePicture.classList.add(
    "img-fluid",
    "profile-img-small",
    "rounded-circle"
  );
  profilePictureContainer.append(profilePicture);

  const sellerName = document.createElement("h2");
  sellerName.classList.add("h3", "popart-font");
  sellerName.innerHTML = `${name}`;
  profilePictureContainer.append(sellerName);

  const listingBidsAndTimeContainer = document.createElement("div");
  listingBidsAndTimeContainer.classList.add("d-flex", "gap-2");
  listingInfoSellerContainer.append(listingBidsAndTimeContainer);

  const bidsSpan = document.createElement("span");
  bidsSpan.classList.add("bg-info", "text-light", "p-2", "rounded-3");
  listingBidsAndTimeContainer.append(bidsSpan);

  const bidsAmount = document.createElement("small");
  bidsAmount.innerHTML = `${bidsQuantity} bids`;
  bidsSpan.append(bidsAmount);

  //calculate time left to bid on item
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;

  const day = hour * 24;
  let today = new Date();
  let timeSpan = new Date(endsAt) - today;

  const daysLeft = Math.floor(timeSpan / day);
  const hoursLeft = Math.floor((timeSpan % day) / hour);

  let timeLeft;

  if (daysLeft < 0) {
    timeLeft = "Ended";
  } else if (daysLeft === 0) {
    timeLeft = `${hoursLeft} hours left`;
  } else if (daysLeft > 0) {
    timeLeft = `${daysLeft} days left`;
  }

  const timeSpanEl = document.createElement("span");
  timeSpanEl.classList.add("bg-info", "text-light", "p-2", "rounded-3");
  listingBidsAndTimeContainer.append(timeSpanEl);

  const timeText = document.createElement("small");
  timeText.innerHTML = timeLeft;
  timeSpanEl.append(timeText);

  const listingTitle = document.createElement("h3");
  listingTitle.classList.add("h5", "mt-4", "text-uppercase");
  listingTitle.innerHTML = `${title}`;
  outerDiv.append(listingTitle);

  const listingDescription = document.createElement("p");
  listingDescription.classList.add(
    "border-bottom",
    "border-1",
    "border-secondary",
    "border-opacity-25",
    "pb-3"
  );
  listingDescription.innerHTML = `${description}`;
  outerDiv.append(listingDescription);

  const interactionsContainer = document.createElement("div");
  outerDiv.append(interactionsContainer);

  const highestBid = document.createElement("h4");
  highestBid.classList.add("h5", "mt-4");
  highestBid.innerHTML = "Highest bid";
  interactionsContainer.append(highestBid);

  const highestBidAmount = document.createElement("p");
  highestBidAmount.classList.add("h5", "fw-bold", "mt-3");

  //display highest bid by reversing bids array
  let bidsArray = bids;
  if (bidsArray.length > 0) {
    let bidToDisplay = bidsArray.reverse();
    highestBidAmount.innerHTML = `${bidToDisplay[0].amount} credits`;
  } else {
    highestBidAmount.innerHTML = "0";
  }
  interactionsContainer.append(highestBidAmount);

  //render interaction buttons
  //when item belongs to logged in user
  if (profile.name === name) {
    const loggedUserInteractionsContainer = document.createElement("div");
    loggedUserInteractionsContainer.classList.add(
      "d-flex",
      "gap-3",
      "flex-wrap",
      "mt-5"
    );
    interactionsContainer.append(loggedUserInteractionsContainer);

    const updateListingButton = document.createElement("button");
    updateListingButton.setAttribute("type", "button");
    updateListingButton.setAttribute("data-bs-toggle", "modal");
    updateListingButton.setAttribute("data-bs-target", "#update-listing-modal");
    updateListingButton.classList.add("btn", "btn-primary");
    updateListingButton.innerHTML = "Update listing";
    loggedUserInteractionsContainer.append(updateListingButton);

    const deleteListingButton = document.createElement("button");
    deleteListingButton.setAttribute("type", "button");
    deleteListingButton.setAttribute("data-bs-toggle", "modal");
    deleteListingButton.setAttribute("data-bs-target", "#remove-listing-modal");
    deleteListingButton.classList.add("btn", "btn-outline-primary");
    deleteListingButton.innerHTML = "Delete listing";
    loggedUserInteractionsContainer.append(deleteListingButton);

    //update listing
    const updateListingForm = document.querySelector("form#update-listing");
    const titleField = document.querySelector("#update-title");
    const descriptionField = document.querySelector("#update-description");
    const tagsField = document.querySelector("#update-tags");
    const urlsField = document.querySelector("#update-urls");

    updateListingForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const newTitle = titleField.value;
      //when passing an empty description the old one will be removed
      //to prevent it, pass the old one
      const newDescription = descriptionField.value || description;
      const newTags = tagsField.value;
      const newUrls = urlsField.value;

      //convert values to arrays
      const newTagsArray = newTags.split(",", "8");
      let newUrlsArray = newUrls.split(",", "8");

      //if empty url array, make it null for the API to accept it
      if (newUrlsArray[0].length === 0) {
        newUrlsArray = null;
      }

      editListing(
        accessToken,
        newTitle,
        newDescription,
        newTagsArray,
        newUrlsArray,
        id
      );
    });

    //delete listing
    const REMOVE_LISTING_BUTTON = document.querySelector("#remove-listing");

    REMOVE_LISTING_BUTTON.addEventListener("click", async () => {
      await removeListing(accessToken, id);
    });
  }
  //when item doesn't belong to logged in user
  else {
    const placeBidForm = document.createElement("form");
    placeBidForm.classList.add("d-flex", "mt-4");
    interactionsContainer.append(placeBidForm);

    const placeBidInput = document.createElement("input");
    placeBidInput.setAttribute("type", "number");
    placeBidInput.setAttribute("placeholder", "Enter amount");

    //prevent user from bidding lower than highest bid
    if (bidsArray.length > 0) {
      placeBidInput.setAttribute("min", `${bidsArray[0].amount + 1}`);
    } else {
      placeBidInput.setAttribute("min", "1");
      highestBidAmount.innerHTML = "0";
    }
    placeBidInput.setAttribute("aria-label", "EnterAmount");
    placeBidInput.classList.add("form-control", "me-2", "w-75");
    placeBidForm.append(placeBidInput);

    const submitBidButton = document.createElement("button");
    submitBidButton.setAttribute("type", "submit");
    submitBidButton.classList.add("btn", "btn-primary");
    submitBidButton.innerHTML = "Place bid";
    placeBidForm.append(submitBidButton);

    placeBidForm.addEventListener("submit", (event) => {
      event.preventDefault();
      handlePlaceBidSubmission(placeBidInput.value, id);
    });
  }
}
