import { formatDate } from "../../tools/dateStyler.js";

export function createListingsHTML(container, title, items) {
  const heading = document.createElement("h1");
  heading.classList.add("my-5", "h3");
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

  items.forEach((item) => {
    let card = document.createElement("div");
    card.classList.add("col");
    cardGroup.append(card);

    let cardAnchor = document.createElement("a");
    cardAnchor.classList.add("card", "border-primary", "text-decoration-none");
    cardAnchor.setAttribute("href", "#");
    card.append(cardAnchor);

    let cardHeaderDiv = document.createElement("div");
    cardHeaderDiv.classList.add(
      "card-header",
      "bg-transparent",
      "d-flex",
      "justify-content-between"
    );
    cardAnchor.append(cardHeaderDiv);

    //shorten the title for nicer design
    let userTitle = item.title;
    let shorterTitle = userTitle.split(" ", 3);
    let titleToDisplay = shorterTitle.join(" ");

    let cardTitle = document.createElement("h2");
    cardTitle.classList.add("h4");
    cardTitle.innerHTML = `${titleToDisplay}`;
    cardHeaderDiv.append(cardTitle);

    let bidsCount = document.createElement("span");
    bidsCount.classList.add("bg-info", "text-light", "p-2", "rounded-3");
    bidsCount.innerHTML = `${item._count.bids} bids`;
    cardHeaderDiv.append(bidsCount);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "text-primary");
    cardAnchor.append(cardBody);

    let row = document.createElement("div");
    row.classList.add("row");
    cardBody.append(row);

    //find if media is empty to add classes accordingly
    let media = item.media[0];

    //shorten the description for nicer design
    let userDescription = item.description || "This item lacks a description";
    let shorterDescription = userDescription.split(" ", 5);
    let descriptionToDisplay = shorterDescription.join(" ");

    let description = document.createElement("p");
    if (!media) {
      description.classList.add("card-text", "col-12");
    } else {
      description.classList.add("card-text", "col", "col-sm-12", "col-md-6");
    }
    description.innerHTML = `${descriptionToDisplay}`;
    row.append(description);

    let image = document.createElement("img");
    if (!media) {
      image.classList.add("d-none");
    } else {
      image.classList.add("col", "col-sm-12", "col-md-6", "img-fluid");
    }
    image.setAttribute("src", media);
    image.setAttribute("alt", "object for bid");
    row.append(image);

    let cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer", "bg-transparent");
    cardAnchor.append(cardFooter);

    //format date before printing
    const newDate = new Date(item.endsAt);
    const formattedDate = formatDate(newDate);

    let endDate = document.createElement("p");
    endDate.classList.add("fst-italic", "fw-bold");
    endDate.innerHTML = `Ends ${formattedDate}`;
    cardFooter.append(endDate);
  });
}