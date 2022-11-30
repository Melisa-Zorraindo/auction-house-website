//get string param to display single listing
const parameterString = window.location.search;
const searchParams = new URLSearchParams(parameterString);
const listingId = searchParams.get("id");

export async function createSingleListingHTML(container, item) {
  const firstRow = document.createElement("div");
  firstRow.classList.add("row");
  container.append(firstRow);

  const col = document.createElement("div");
  col.classList.add("col");
  firstRow.append(col);

  const carouselContainer = document.createElement("div");
  carouselContainer.classList.add("mb-3");
  col.append(carouselContainer);

  const carouselRow = document.createElement("div");
  carouselRow.classList.add("row");
  carouselContainer.append(carouselRow);

  const carouselIndicators = document.createElement("div");
  carouselIndicators.setAttribute("id", "carouselExampleIndicators");
  carouselIndicators.setAttribute("data-bs-ride", "carousel");
  carouselIndicators.classList.add("carousel", "slide", "col-sm-4");
  carouselRow.append(carouselIndicators);

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

  if (item.media.length === 0) {
    let placeholderContainer = document.createElement("div");
    placeholderContainer.classList.add("carousel-item", "active");
    carouselInner.append(placeholderContainer);

    let placeholderImage = document.createElement("img");
    placeholderImage.setAttribute("alt", "image uploaded by the user");
    placeholderImage.setAttribute(
      "src",
      "/src/assets/compressed-image-placeholder.jpg"
    );
    placeholderImage.classList.add("img-fluid");
    placeholderContainer.append(placeholderImage);
  } else {
    for (let i = 0; i < item.media.length; i++) {
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
        carouselButton.setAttribute(
          "data-bs-slide-to",
          `${item.media.length - 1}`
        );
      }
      carouselItem.classList.add("carousel-item");
      carouselInner.append(carouselItem);

      const carouselPicture = document.createElement("img");
      carouselPicture.setAttribute("alt", "image uploaded by the user");
      carouselPicture.setAttribute("src", item.media[i]);
      carouselPicture.classList.add("img-fluid");
      carouselItem.append(carouselPicture);
    }
  }

  if (item.media.length > 0) {
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

    //hasta acá
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
}
