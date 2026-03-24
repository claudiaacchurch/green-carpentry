export interface Project {
	slug: string;
	title: string;
	meta: string;
	location: string;
	year: string;
	description: string[];
	image: string;
	heroImage: string;
	buildVideoEmbed?: string;
}

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const projects: Project[] = [
	{
		slug: "full-house-renovation-glastonbury",
		title: "Full House Renovation",
		meta: "Glastonbury",
		location: "Glastonbury, Somerset",
		year: "2026",
		description: [
			"A complete top-to-bottom renovation of a four-bedroom house in Glastonbury, bringing every room up to a modern, high-quality finish while retaining the character of the original building.",

			"The scope included a full rewire, complete kitchen installation, bathroom suite replacements, and stud wall alterations to create an additional en-suite. The project also involved installing new internal doors, skirting and architraves throughout, along with bespoke fitted joinery in the living and dining areas.",

			"To improve energy efficiency, insulation was added to the floors, walls and loft space, maximising the performance of the upgraded air-source heat pump system. The renovation was finished with a log burner conversion within the existing fireplace.",

			"Working to a tight schedule to allow the owners to move in, our team coordinated all trades on site and delivered the project on time and within budget - a result the clients were delighted with.",
		],
		image: `${base}/media/glasto-kitchen.png`,
		heroImage: `${base}/media/glasto-kitchen.png`,
		buildVideoEmbed:
			"https://iframe.mediadelivery.net/embed/610237/3c07db2d-bf52-479d-98e9-777d5615753d?autoplay=true&loop=true&muted=true&preload=true&background=true",
	},
	{
		slug: "triple-flat-conversion-watchet",
		title: "Triple Flat Conversion",
		meta: "Watchet",
		location: "Watchet, Somerset",
		year: "2025",
		description: [
			"A triple flat conversion in the coastal town of Watchet for the Co-op, transforming old, unused dwellings above the shop into three modern, self-contained apartments.",

			"The project included full structural alterations, chimney removal, complete re-roofing, a loft conversion, external staircases and landings for access, partition walls with soundproofing, individual kitchen and bathroom fit-outs, and new electrical and plumbing installations throughout each unit.",

			"Each flat was finished to a high standard, combining practical layouts with quality materials - delivering a strong return on investment for the client.",
		],
		image: `${base}/media/watchet-flats.png`,
		heroImage: `${base}/media/watchet-flats.png`,
		buildVideoEmbed:
			"https://iframe.mediadelivery.net/embed/610237/9e17ceab-394a-41b4-a18f-cbbe5f1672fc?autoplay=true&loop=true&muted=true&preload=true&background=true",
	},
	{
		slug: "kitchen-renovation-taunton",
		title: "Kitchen Renovation",
		meta: "Taunton",
		location: "Taunton, Somerset",
		year: "2026",
		description: [
			"A full kitchen, utility, and hallway renovation for a family home in Taunton, transforming an outdated layout into a spacious, open-plan kitchen and dining area that maximises the available footprint.",

			"The new kitchen and utility feature quartz worktops, integrated appliances, and under-cabinet lighting. Structural work included the removal of a load-bearing wall to open the space, as well as creating an opening for a new window. A new floor was laid throughout the kitchen, hallway, and downstairs toilet, and the previous leaking felt roof was replaced with a durable EPDM roof.",

			"The result is a bright, functional kitchen that has become the heart of the home - exactly what the clients envisioned from the initial consultation.",
		],
		image: `${base}/media/taunton-kitchen.png`,
		heroImage: `${base}/media/taunton-kitchen.png`,
		buildVideoEmbed:
			"https://iframe.mediadelivery.net/embed/610237/d9637ff2-bc69-4e01-beda-9004f48b5c8e?autoplay=true&loop=true&muted=true&preload=true&background=true",
	},
];

export function getProject(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug);
}
