import { fetchListings } from "../../api/feed/read.js";

export async function sortByMostPopular() {
  const ALL_ITEMS = await fetchListings();

  ALL_ITEMS.sort((a, b) => b._count.bids - a._count.bids);

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
