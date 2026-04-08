export interface Project {
	slug: string;
	title: string;
	meta: string;
	location: string;
	year: string;
	description: string[];
	image: string;
	buildVideoEmbed?: string;
}

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const projects: Project[] = [
	{
		slug: "loft-conversion-north-somerset",
		title: "Loft Conversion",
		meta: "North Somerset",
		location: "North Somerset",
		year: "2025",
		description: [
			"A full loft conversion in North Somerset, transforming an unused roof space into a bright, functional living area.",

			"The project involved structural alterations to the existing roof, installation of steels, and the creation of a light-filled room complete with insulation, boarding and plastering. A set of French doors open onto a newly built balcony, bringing in natural light and a sense of space. Electrics and lighting were run throughout, with a finish that ties seamlessly into the rest of the property.",

			"A clean, efficient conversion giving the clients the extra space they needed and adding significant value to their home.",
		],
		image: `${base}/media/projects/loft-conversion-north-somerset.png`,
		buildVideoEmbed:
			"https://iframe.mediadelivery.net/embed/610237/1da8b603-3901-42ef-91f2-779fa3c4cbe9?autoplay=true&loop=true&muted=true&preload=true&background=true",
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
		image: `${base}/media/projects/triple-flat-conversion-watchet.png`,
		buildVideoEmbed:
			"https://iframe.mediadelivery.net/embed/610237/e307f6cc-5507-49eb-83c5-db1e8de37a65?autoplay=true&loop=true&muted=true&preload=true&background=true",
	},
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
		image: `${base}/media/projects/house-renovation-glastonbury.png`,
		buildVideoEmbed:
			"https://iframe.mediadelivery.net/embed/610237/3c07db2d-bf52-479d-98e9-777d5615753d?autoplay=true&loop=true&muted=true&preload=true&background=true",
	},
	{
		slug: "downstairs-renovation-taunton",
		title: "Downstairs Renovation",
		meta: "Taunton",
		location: "Taunton, Somerset",
		year: "2026",
		description: [
			"A full kitchen, utility, and hallway renovation for a family home in Taunton, transforming an outdated layout into a spacious, open-plan kitchen and dining area that maximises the available footprint.",

			"The new kitchen and utility feature quartz worktops, integrated appliances, and under-cabinet lighting. Structural work included the removal of a load-bearing wall to open the space, as well as creating an opening for a new window. A new floor was laid throughout the kitchen, hallway, and downstairs toilet, and the previous leaking felt roof was replaced with a durable EPDM roof.",

			"The result is a bright, functional kitchen that has become the heart of the home - exactly what the clients envisioned from the initial consultation.",
		],
		image: `${base}/media/projects/downstairs-renovation-taunton.png`,
		buildVideoEmbed:
			"https://iframe.mediadelivery.net/embed/610237/d9637ff2-bc69-4e01-beda-9004f48b5c8e?autoplay=true&loop=true&muted=true&preload=true&background=true",
	},
];

export const ongoingProjects: Project[] = [
	{
		slug: "double-house-extension-bridgwater",
		title: "Double House Extension",
		meta: "Bridgwater",
		location: "Bridgwater, Somerset",
		year: "2025-2026",
		description: [
			"A side house extension in Bridgwater, increasing the ground floor living space and creating a more open, connected layout within the home.",

			"The build involves full groundworks and foundations, block and beam flooring, cavity wall construction and roofing - all of which are progressing well on site. Once complete, the interior fit-out will tie the new space seamlessly into the existing layout with new flooring and plastering throughout.",
		],
		image: `${base}/media/projects/double-house-extension-bridgwater.png`,
		buildVideoEmbed:
			"https://iframe.mediadelivery.net/embed/610237/0518b3de-beb4-4e77-a19b-b5ad3086281b?autoplay=true&loop=true&muted=true&preload=true&background=true",
	},
	{
		slug: "farmhouse-renovation-somerset",
		title: "Farmhouse and Triple Barn Renovation",
		meta: "Somerset",
		location: "Somerset",
		year: "2025-2026",
		description: [
			"A large-scale multi-building renovation of a Somerset farmhouse, transforming the entire property across several structures and outdoor features.",

			"The scope covers a full whole-house renovation, the restoration and conversion of an outbuilding, and a new sauna. Landscaping works include the consturction of a pond.",

			"An ambitious project requiring close coordination across trades and careful sequencing of works - currently ongoing and progressing well.",
		],
		image: `${base}/media/projects/farmhouse-renovation-somerset.png`,
		buildVideoEmbed:
			"https://iframe.mediadelivery.net/embed/610237/d366cfc2-cfe4-493b-a587-ea690bcb9efe?autoplay=true&loop=true&muted=true&preload=true&background=true",
	},
	{
		slug: "house-renovation-taunton",
		title: "House Renovation and Extension",
		meta: "Taunton",
		location: "Taunton, Somerset",
		year: "2025-2026",
		description: [
			"A full kitchen renovation currently underway in Taunton, giving a family home a complete transformation of its cooking and dining space.",

			"More details to follow as the project progresses.",
		],
		image: `${base}/media/projects/house-renovation-taunton.png`,
		buildVideoEmbed:
			"https://iframe.mediadelivery.net/embed/610237/b849c472-9446-4903-9dcd-3523438324bb?autoplay=true&loop=true&muted=true&preload=true&background=true",
	},
];

export function getProject(slug: string): Project | undefined {
	return [...projects, ...ongoingProjects].find((p) => p.slug === slug);
}
