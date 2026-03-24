export interface Review {
	name: string;
	rating: number;
	text: string;
	date: string;
}

export const reviews: Review[] = [
	{
		name: "James M.",
		rating: 5,
		text: "Fantastic work from start to finish. The team were professional, tidy and kept us informed throughout. The loft conversion has completely transformed our home.",
		date: "March 2025",
	},
	{
		name: "Sarah T.",
		rating: 5,
		text: "We had a full kitchen renovation done and couldn't be happier. High quality finish and the guys went above and beyond to make sure everything was perfect.",
		date: "January 2025",
	},
	{
		name: "Dave R.",
		rating: 5,
		text: "Used Green Carpentry for a commercial refurbishment. They worked around our opening hours with minimal disruption. Would highly recommend.",
		date: "November 2024",
	},
	{
		name: "Claire W.",
		rating: 5,
		text: "Brilliant from start to finish. Competitive pricing, excellent communication and the end result was exactly what we wanted. Will definitely use again.",
		date: "October 2024",
	},
	{
		name: "Mark H.",
		rating: 5,
		text: "Had an extension built and the quality of the work is outstanding. Very professional team, always on time and left the site clean every day.",
		date: "August 2024",
	},
	{
		name: "Fiona B.",
		rating: 5,
		text: "Excellent service. The team completed our bathroom renovation on time and on budget. Very pleased with the quality and attention to detail.",
		date: "June 2024",
	},
];
