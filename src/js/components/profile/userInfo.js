export function createUserInfoContainer(container, userProfile) {
  const {
    avatar,
    credits,
    email,
    name,
    _count: { listings },
  } = userProfile;

  const pageTitle = document.querySelector("title");
  pageTitle.innerHTML = `Biddable | ${name}`;

  const firstRow = document.createElement("div");
  firstRow.classList.add("row");
  container.append(firstRow);

  const imageContainer = document.createElement("div");
  imageContainer.classList.add(
    "col",
    "col-6",
    "col-sm-3",
    "col-md-2",
    "order-2",
    "order-sm-1",
    "pt-4",
    "pt-sm-0"
  );
  firstRow.append(imageContainer);

  const profileImage = document.createElement("img");
  profileImage.setAttribute("src", avatar);
  profileImage.setAttribute("alt", "user profile picture");
  profileImage.classList.add("img-fluid", "rounded-circle");
  imageContainer.append(profileImage);

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("col", "order-3", "order-sm-2", "py-3", "py-sm-0");
  firstRow.append(contactInfo);

  const firstInnerRow = document.createElement("div");
  firstInnerRow.classList.add("row");
  contactInfo.append(firstInnerRow);

  const firstInnerCol = document.createElement("div");
  firstInnerCol.classList.add("col", "col-sm-8", "col-md-12");
  firstInnerRow.append(firstInnerCol);

  const userName = document.createElement("h1");
  userName.classList.add("h3", "popart-font");
  userName.innerHTML = name;
  firstInnerCol.append(userName);

  const userEmail = document.createElement("span");
  userEmail.innerHTML = email;
  firstInnerCol.append(userEmail);

  const secondInnerRow = document.createElement("div");
  secondInnerRow.classList.add("row");
  contactInfo.append(secondInnerRow);

  const secondInnerCol = document.createElement("div");
  secondInnerCol.classList.add("col", "col-sm-8", "col-md-12", "pt-5");
  secondInnerRow.append(secondInnerCol);

  const dataContainer = document.createElement("div");
  dataContainer.classList.add("d-flex", "gap-5");
  secondInnerCol.append(dataContainer);

  const listingsContainer = document.createElement("div");
  listingsContainer.classList.add("d-flex", "flex-column");
  dataContainer.append(listingsContainer);

  const listingsText = document.createElement("span");
  listingsText.innerHTML = "Listings";
  listingsContainer.append(listingsText);

  const listingsAmount = document.createElement("span");
  listingsAmount.innerHTML = listings;
  listingsContainer.append(listingsAmount);

  const creditsContainer = document.createElement("div");
  creditsContainer.classList.add("d-flex", "flex-column");
  dataContainer.append(creditsContainer);

  const creditsText = document.createElement("span");
  creditsText.innerHTML = "Credits";
  creditsContainer.append(creditsText);

  const creditsAmount = document.createElement("span");
  creditsAmount.innerHTML = credits;
  creditsContainer.append(creditsAmount);

  const interactionsContainer = document.createElement("div");
  interactionsContainer.classList.add(
    "col",
    "col-12",
    "col-sm-3",
    "col-md-2",
    "d-flex",
    "flex-column",
    "gap-3",
    "order-1",
    "order-sm-3",
    "align-items-end"
  );

  firstRow.append(interactionsContainer);

  const newListingButtonContainer = document.createElement("div");
  interactionsContainer.append(newListingButtonContainer);

  const newListingButton = document.createElement("button");
  newListingButton.setAttribute("type", "button");
  newListingButton.setAttribute("data-bs-toggle", "modal");
  newListingButton.setAttribute("data-bs-target", "#new-listing-modal");
  newListingButton.classList.add("btn", "btn-primary");
  newListingButton.innerHTML = "New listing";
  newListingButtonContainer.append(newListingButton);

  const editProfileButtonContainer = document.createElement("div");
  interactionsContainer.append(editProfileButtonContainer);

  const editProfileButton = document.createElement("button");
  editProfileButton.setAttribute("data-bs-toggle", "modal");
  editProfileButton.setAttribute("data-bs-target", "#edit-profile-modal");
  editProfileButton.classList.add("btn", "btn-outline-primary");
  editProfileButton.innerHTML = "Edit profile";
  editProfileButtonContainer.append(editProfileButton);
}
