import { formatDate } from "../../tools/dateStyler.js";

export function createListingsHTML(container, title, items) {
  const heading = document.createElement("h1");
  heading.classList.add("my-5", "h3");
  heading.innerHTML = title;
  container.append(heading);

  const feedbackPara = document.createElement("p");
  feedbackPara.classList.add("d-none");
  feedbackPara.setAttribute("id", "latest-listings-feedback");
  container.append(feedbackPara);

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

  for (let i = 0; i < 4; i++) {
    let card = document.createElement("div");
    card.classList.add("col");
    cardGroup.append(card);

    let cardAnchor = document.createElement("a");
    cardAnchor.classList.add("card", "border-0", "text-decoration-none");
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

    let cardTitle = document.createElement("h2");
    cardTitle.classList.add("h4");
    cardTitle.innerHTML = `${items[i].title}`;
    cardHeaderDiv.append(cardTitle);

    let bidsCount = document.createElement("span");
    bidsCount.classList.add("bg-info", "text-light", "p-2", "rounded-3");
    bidsCount.innerHTML = `${items[i]._count.bids} bids`;
    cardHeaderDiv.append(bidsCount);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "text-primary");
    cardAnchor.append(cardBody);

    let row = document.createElement("div");
    row.classList.add("row");
    cardBody.append(row);

    let description = document.createElement("p");
    description.classList.add("card-text", "col", "col-sm-12", "col-md-6");
    description.innerHTML = `${items[i].description}`;
    row.append(description);

    let image = document.createElement("img");
    image.setAttribute("src", `${items[i].media[0]}`);
    image.setAttribute("alt", "object for bid");
    image.classList.add("col", "col-sm-12", "col-md-6", "img-fluid");
    row.append(image);

    let cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer", "bg-transparent");
    cardAnchor.append(cardFooter);

    //format date before printing
    const newDate = new Date(items[i].endsAt);
    const formattedDate = formatDate(newDate);

    let endDate = document.createElement("p");
    endDate.classList.add("fst-italic", "fw-bold");
    endDate.innerHTML = `Ends ${formattedDate}`;
    cardFooter.append(endDate);
  }
}