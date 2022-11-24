import { fetchListings } from "../../api/feed/read.js";

export async function getFinishSoonItems() {
  //sort by date
  const ALL_ITEMS = await fetchListings();
  ALL_ITEMS.sort(function (a, b) {
    const date1 = new Date(a.endsAt);
    const date2 = new Date(b.endsAt);
    return date1 - date2;
  });

  //discard finished bids (earlier than today)
  const today = new Date();

  let array = [];
  ALL_ITEMS.map((item) => {
    const newDate = new Date(item.endsAt);
    if (newDate >= today) {
      array.push(item);
    }
  });

  return array;
}
