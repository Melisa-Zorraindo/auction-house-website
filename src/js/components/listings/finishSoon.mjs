import { fetchListings } from "../../api/feed/read.mjs";

export async function getFinishSoonItems() {
  //sort by date
  const ALL_ITEMS = await fetchListings();
  return ALL_ITEMS.sort(function (a, b) {
    const date1 = new Date(a.endsAt);
    const date2 = new Date(b.endsAt);
    return date1 - date2;
  });
}
