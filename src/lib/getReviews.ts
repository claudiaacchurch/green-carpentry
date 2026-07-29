
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
    date: "2 months ago",
    url: "https://maps.app.goo.gl/M9YHjwSPhBf8mtNR9",
  },
  {
    name: "Kate Woolley",
    rating: 5,
    text: "Ross did a side extension and built an office for us. All of the team were professional, friendly, prompt and tidy. They made sure that our day to day living wasn't impacted. Ross project managed perfectly and the end result is top quality. We would highly recommend Ross to anybody.",
    date: "2 months ago",
    url: "https://maps.app.goo.gl/8Ep1BDAV1yKAz5HX7",
  },
  {
    name: "Dawn Williamson",
    rating: 5,
    text: "Ross and his team cladded my residential park home. I would not hesitate recommending Green Carpentry. As you can see from the photos they did an amazing job. The quotation was also very reasonable compared to other quotes.",
    date: "2 months ago",
    url: "https://maps.app.goo.gl/QVBjQHhCL16Qa7zw9",
  },
  {
    name: "Bridget Lines",
    rating: 5,
    text: "Ross and his team did a 2 bedroom 1 bathroom Dorma loft conversion. We are very pleased with the work they have done. The team listened to what we wanted and worked very hard to achieve a very good finish.",
    date: "2 months ago",
    url: "https://maps.app.goo.gl/wHYjykG8NnsLdTAx6",
  },
  {
    name: "Kirk Hunt",
    rating: 5,
    text: "Green Carpentry have done and still do multiple specialised work for my Company which has been trading for over 27 years (Clearview Windows in Bridgwater). Rossi and his staff are punctual, professional and take so much care over the installation but still communicate with the customer on a daily basis to ensure the job is perfect. As a Which Trusted Trader I would not use anyone else — they are simply lovely people to have working for you. For the ultimate peace of mind it's a no brainer to use Green Carpentry.",
    date: "2 months ago",
    url: "https://maps.app.goo.gl/9T9G2hhpgMVatyNL7",
  },
   {
    name: "Christie Sidebottom",
    rating: 5,
    text: "I just wanted to say thank you to you all for your hard work! Especially to scott, lee and alan who did all the work on our dormer, the cladding front and back, the doors and skirting oh and the velux! Thank you to Ross for alwyas being so accommodating. Would highly recommend these guys for any carpentry work you need! They all had an eye for detail which was exactly what I wanted and grew to expect from them! Thanks again to you all!",
    date: "2 months ago",
    url: "https://maps.app.goo.gl/shFh3S7auDkKqW7v9",
  },
   {
    name: "Wayne Harvey",
    rating: 5,
    text: "Had Ross and his team carry out a garage conversion for me, very happy with the work carried out and Ross is easy to deal with and always aims to please.",
    date: "2 months ago",
    url: "https://maps.app.goo.gl/LT72XNCA9LvJG6pNA",
  },
     {
    name: "Terence Boobyer",
    rating: 5,
    text: "We had a loft conversion completed by Green Carpentry, and the results are honestly outstanding. From start to finish, the team was incredibly professional, punctual, and respectful of our home. The craftsmanship is top tier, you can tell they really take pride in their work. If you're looking for a reliable company that delivers high quality results without the usual stress of renovations, I can't recommend Green Carpentry enough!",
    date: "2 months ago",
    url: "https://maps.app.goo.gl/YM5YUhJL8YXjQyhX8",
  },
      {
    name: "Lauren Green",
    rating: 5,
    text: "Ross and his team carried out an extension and full renovation of our downstairs last year, Ross took care of everything, from recommending an architect to coordinating all the different trades, and ordering all the materials, he completely took the stress and responsibility away from us as much as possible. We are so happy with the work that has been done, it has changed our lives having such a lovely home now that is perfect for our family needs. Ross is a very kind and patient person, he always reassured me when I was worrying about certain decisions and was very good at problem solving. I’m not just saying all of this because he’s my brother, he genuinely is the best at what he does and I will appreciate what him and the team has done forever.",
    date: "2 months ago",
    url: "https://maps.app.goo.gl/UJYp4d6XfNafCThr8",
  },
        {
    name: "Kevin Sedgbeer",
    rating: 5,
    text: "Had Green Carpentry do my Kitchen and couldn't be happier. Very professional in all aspects of the job and lovely guys too. Would certainly recommend.",
    date: "2 months ago",
    url: "https://maps.app.goo.gl/J9Nbw8MZxffu5Qf89",
  },
          {
    name: "Luigi Grieco",
    rating: 5,
    text: "Great team. Outstanding work!",
    date: "1 year ago",
    url: "https://maps.app.goo.gl/RuB55Qyvn5EBER3A6",
  },
];

export async function getGoogleReviews(): Promise<Review[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return [];

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=reviews&languageCode=en`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
        },
        next: { revalidate: 86400 },
      }
    );

    if (!res.ok) {
      console.error("Places API (New) HTTP error:", res.status);
      return [];
    }

    const data = await res.json();
    const raw = data.reviews ?? [];
    console.log("Places API (New) reviews returned:", raw.length);

    return raw.map((r: {
      authorAttribution: { displayName: string };
      rating: number;
      text: { text: string };
      relativePublishTimeDescription: string;
    }) => ({
      name: r.authorAttribution.displayName,
      rating: r.rating,
      text: r.text.text,
      date: r.relativePublishTimeDescription,
    }));
  } catch (err) {
    console.error("Places API (New) error:", err);
    return [];
  }
}
