
export interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
  url?: string;
}

export const staticReviews: Review[] = [
  {
    name: "Stella Butcher",
    rating: 5,
    text: "Completed a part conversion of an old barn into a beautiful farm shop. Ross worked to my timescale, turning my vision into a reality and the end product is better than I expected. Although this was a project undertaken in parts, everything has come together so well. The team are great and also help to shape the project with tips and ideas. All carried out professionally and they always cleared up at the end of the day. Thank you.",
    date: "3 days ago",
    url: "https://maps.app.goo.gl/M9YHjwSPhBf8mtNR9",
  },
  {
    name: "Kate Woolley",
    rating: 5,
    text: "Ross did a side extension and built an office for us. All of the team were professional, friendly, prompt and tidy. They made sure that our day to day living wasn't impacted. Ross project managed perfectly and the end result is top quality. We would highly recommend Ross to anybody.",
    date: "2 weeks ago",
    url: "https://maps.app.goo.gl/8Ep1BDAV1yKAz5HX7",
  },
  {
    name: "Dawn Williamson",
    rating: 5,
    text: "Ross and his team cladded my residential park home. I would not hesitate recommending Green Carpentry. As you can see from the photos they did an amazing job. The quotation was also very reasonable compared to other quotes.",
    date: "3 weeks ago",
    url: "https://maps.app.goo.gl/QVBjQHhCL16Qa7zw9",
  },
  {
    name: "Bridget Lines",
    rating: 5,
    text: "Ross and his team did a 2 bedroom 1 bathroom Dorma loft conversion. We are very pleased with the work they have done. The team listened to what we wanted and worked very hard to achieve a very good finish.",
    date: "3 weeks ago",
    url: "https://maps.app.goo.gl/wHYjykG8NnsLdTAx6",
  },
  {
    name: "Kirk Hunt",
    rating: 5,
    text: "Green Carpentry have done and still do multiple specialised work for my Company which has been trading for over 27 years (Clearview Windows in Bridgwater). Rossi and his staff are punctual, professional and take so much care over the installation but still communicate with the customer on a daily basis to ensure the job is perfect. As a Which Trusted Trader I would not use anyone else — they are simply lovely people to have working for you. For the ultimate peace of mind it's a no brainer to use Green Carpentry.",
    date: "3 weeks ago",
    url: "https://maps.app.goo.gl/9T9G2hhpgMVatyNL7",
  },
];

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
