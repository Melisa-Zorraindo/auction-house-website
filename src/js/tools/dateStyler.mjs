/**
 * Formats date and time
 * to be displayed in post
 * @param {string} date
 * @returns formatted date
 */
export function formatDate(date) {
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
  }).format(date);

  return formattedDate;
}
