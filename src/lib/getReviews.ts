
export interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
}

export async function getGoogleReviews(): Promise<Review[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return [];

  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}&reviews_sort=newest`,
    { next: { revalidate: 86400 } }
  );

  if (!res.ok) {
    console.error("Places API HTTP error:", res.status);
    return [];
  }

  const data = await res.json();
  console.log("Places API status:", data.status, "| error:", data.error_message ?? "none");
  const raw = data.result?.reviews ?? [];
  console.log("Reviews returned:", raw.length);

  return raw.map((r: { author_name: string; rating: number; text: string; relative_time_description: string }) => ({
    name: r.author_name,
    rating: r.rating,
    text: r.text,
    date: r.relative_time_description,
  }));
}
