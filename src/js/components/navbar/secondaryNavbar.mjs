//an array of objects containing the links
//function takes the array as an arg, iterates over the array, and renders the html

export function renderSecondaryNavbar(ul, array) {
  array.map(({ href, iconName, linkName }) => {
    const li = document.createElement("li");
    li.classList.add("list-unstyled", "border", "rounded-3", "bg-white");
    ul.append(li);

    const anchorTag = document.createElement("a");
    anchorTag.setAttribute("href", `${href}`);
    anchorTag.classList.add(
      "d-flex",
      "flex-column",
      "align-items-center",
      "text-decoration-none",
      "text-secondary",
      "px-4",
      "sec-navbar-links"
    );
    li.append(anchorTag);

    const icon = document.createElement("span");
    icon.classList.add("material-symbols-outlined", "fs-1", "m-0");
    icon.innerHTML = `${iconName}`;
    anchorTag.append(icon);

    const linkText = document.createElement("span");
    linkText.classList.add("popart-font");
    linkText.innerHTML = `${linkName}`;
    anchorTag.append(linkText);
  });
}
