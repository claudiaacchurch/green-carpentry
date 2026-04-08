import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json({ error: "Missing env vars", hasKey: !!apiKey, hasPlaceId: !!placeId });
  }

  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,name&key=${apiKey}&reviews_sort=newest`
  );

  const data = await res.json();
  return NextResponse.json({
    status: data.status,
    error_message: data.error_message,
    name: data.result?.name,
    reviewCount: data.result?.reviews?.length ?? 0,
    firstReview: data.result?.reviews?.[0] ?? null,
  });
}
