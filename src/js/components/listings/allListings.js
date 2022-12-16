import { formatDate } from "../../tools/dateStyler.js";
import { loadFromStorage } from "../../storage/load.js";

export function createListingsHTML(container, title, items) {
  const spinner = document.querySelector("#spinner");
  spinner.classList.add("d-none");

  const profile = loadFromStorage("profile");
  const heading = document.createElement("h1");
  heading.classList.add(
    "my-5",
    "h2",
    "popart-font",
    "pt-3",
    "border-top",
    "border-4",
    "border-primary"
  );
  heading.innerHTML = title;
  container.append(heading);

  const cardGroup = document.createElement("div");
  cardGroup.classList.add(
    "row",
    "row-cols-1",
    "row-cols-sm-2",
    "row-cols-md-3",
    "row-cols-lg-4",
    "g-4"
  );
  container.append(cardGroup);

  items.forEach(
    ({ id, title, media, _count: { bids }, description, endsAt }) => {
      let card = document.createElement("div");
      card.classList.add("col");
      cardGroup.append(card);

      let cardAnchor = document.createElement("a");
      cardAnchor.classList.add("card", "h-100", "text-decoration-none");
      //if user is logged out redirect to log in page
      //if user is logged in redirect to item page
      if (!profile) {
        cardAnchor.setAttribute("href", "/profile-login.html");
      } else {
        cardAnchor.setAttribute("href", `/feed-item.html?id=${id}`);
      }
      card.append(cardAnchor);

      let cardHeaderDiv = document.createElement("div");
      cardHeaderDiv.classList.add(
        "card-header",
        "bg-transparent",
        "d-flex",
        "justify-content-between",
        "align-items-start"
      );
      cardAnchor.append(cardHeaderDiv);

      //shorten the title for nicer design
      let userTitle = title;
      let shorterTitle = userTitle.split(" ", 3);
      let titleToDisplay = shorterTitle.join(" ");

      let cardTitle = document.createElement("h2");
      cardTitle.classList.add("h5", "text-wrap", "title-max-width");
      cardTitle.innerHTML = `${titleToDisplay}`;
      cardHeaderDiv.append(cardTitle);

      let bidsCount = document.createElement("span");
      bidsCount.classList.add(
        "bg-info",
        "text-light",
        "p-2",
        "rounded-3",
        "fs-7"
      );
      bidsCount.innerHTML = `${bids} bids`;
      cardHeaderDiv.append(bidsCount);

      let cardBody = document.createElement("div");
      cardBody.classList.add("card-body", "text-primary");
      cardAnchor.append(cardBody);

      let row = document.createElement("div");
      row.classList.add("row");
      cardBody.append(row);

      //find if media is empty to add classes accordingly
      let listingImage = media[0];

      //shorten the description for nicer design
      let userDescription = description || "This item lacks a description";
      let shorterDescription = userDescription.split(" ", 5);
      let descriptionToDisplay = shorterDescription.join(" ");

      let listingDescription = document.createElement("p");
      if (!listingImage) {
        listingDescription.classList.add("card-text", "col-12");
      } else {
        listingDescription.classList.add(
          "card-text",
          "col",
          "col-sm-12",
          "col-md-6"
        );
      }
      listingDescription.innerHTML = `${descriptionToDisplay}`;
      if (descriptionToDisplay === "This item lacks a description") {
        listingDescription.classList.add("fst-italic");
      }
      row.append(listingDescription);

      let image = document.createElement("img");
      if (!listingImage) {
        image.classList.add("d-none");
      } else {
        image.classList.add("col", "col-sm-12", "col-md-6", "img-fluid");
      }
      image.setAttribute("src", listingImage);
      image.setAttribute("alt", "object for bid");
      row.append(image);

      let cardFooter = document.createElement("div");
      cardFooter.classList.add("card-footer", "bg-transparent");
      cardAnchor.append(cardFooter);

      //format date before printing
      const newDate = new Date(endsAt);
      const formattedDate = formatDate(newDate);

      let endDate = document.createElement("p");
      endDate.classList.add("fw-bold");
      endDate.innerHTML = `Ends ${formattedDate}`;
      cardFooter.append(endDate);
    }
  );
}
