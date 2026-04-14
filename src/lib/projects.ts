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
		slug: "loft-conversion-merridge",
		title: "Loft Conversion",
		meta: "Merridge",
		location: "Merridge",
		year: "2024",
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
		location: "Watchet",
		year: "2024-2025",
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
		location: "Glastonbury",
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
		slug: "downstairs-renovation-galmington",
		title: "Downstairs Renovation",
		meta: "Galmington",
		location: "Galmington",
		year: "2026",
		description: [
			"A full kitchen, utility, and hallway renovation for a family home in Taunton, transforming an outdated layout into a spacious, open-plan kitchen and dining area that maximises the available footprint.",
			"The new kitchen and utility feature quartz worktops, integrated appliances, and under-cabinet lighting, complemented by newly installed ceiling spotlights that enhance both functionality and atmosphere. Structural work included the removal of a load-bearing wall to open up the space, along with the formation of a new window opening to increase natural light. A new floor was laid throughout the kitchen, hallway, and downstairs toilet, and the previous leaking felt roof was replaced with a durable EPDM system.",
			"The heating system was also upgraded, with new radiators installed to the ground floor, alongside the addition of discreet plinth heaters—two within the kitchen and one in the utility—providing efficient, space-saving warmth.",
			"The result is a bright, functional kitchen that has become the heart of the home—exactly what the clients envisioned from the initial consultation.",
		],
		image: `${base}/media/projects/downstairs-renovation-taunton.png`,
		buildVideoEmbed:
			"https://iframe.mediadelivery.net/embed/610237/d9637ff2-bc69-4e01-beda-9004f48b5c8e?autoplay=true&loop=true&muted=true&preload=true&background=true",
	},
];

export const ongoingProjects: Project[] = [
	{
		slug: "double-house-extension-woolavington",
		title: "Double House Extension",
		meta: "Woolavington",
		location: "Woolavington",
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
		slug: "farmhouse-renovation-aisholt",
		title: "Farmhouse and Triple Barn Renovation",
		meta: "Aisholt",
		location: "Aisholt",
		year: "2023-2026",
		description: [
			"A comprehensive transformation of a Somerset farmhouse estate, this ambitious multi-building project brings together heritage restoration, contemporary design, and sustainable innovation.",
			"The main house is undergoing a full renovation, alongside a substantial new extension featuring integrated solar roof tiles and a private balcony with elevated views across the surrounding landscape. A striking new orangery, constructed from the ground up, introduces a light-filled space that strengthens the connection between the house and its gardens.",
			"Across the wider site, multiple outbuildings are being carefully restored and refurbished. A large barn has been reimagined as an impressive open-plan living space, incorporating a kitchen and a mezzanine level with a bedroom and en-suite. A second barn has been converted into a bespoke wellness retreat, complete with a sauna, changing room, and shower facilities. Stepping out from the sauna onto the timber decking, the space flows directly to the outdoor swimming pool.",
			"Landscaping forms a key component of the project, including the excavation and transformation of a pond into this natural, self-cleaning swimming pool. The pool features 2 jettys for access and a pump system that circulates water through a separate filtration zone composed of aquatic plants and stone beds, providing a chemical-free and environmentally sustainable solution.",
			"This is an ambitious and complex undertaking, requiring careful sequencing and close coordination across multiple trades. The project is currently ongoing and progressing well.",
		],
		image: `${base}/media/projects/farmhouse-renovation-somerset.png`,
		buildVideoEmbed:
			"https://iframe.mediadelivery.net/embed/610237/d366cfc2-cfe4-493b-a587-ea690bcb9efe?autoplay=true&loop=true&muted=true&preload=true&background=true",
	},
	{
		slug: "house-renovation-bower",
		title: "House Renovation and Extension",
		meta: "Bower",
		location: "Bower",
		year: "2025-2026",
		description: [
			"A full ground floor renovation has been completed in Taunton, transforming a family home through a complete reconfiguration of its internal layout and living spaces.",
			"The project included a substantial rear extension and a garage conversion, significantly increasing the usable living area. Internally, major structural works were carried out, including the installation of large steel beams to open up the layout and create a modern open-plan environment. The kitchen was relocated into the new extension, forming the heart of the home, alongside the repositioning of the downstairs WC.",
			"Further enhancements included the installation of new windows to the rear of the existing property, a roof lantern within the extension to maximise natural light, and large bifold doors that open the space out onto the garden.",
			"To the front of the property, a new porch was constructed, improving both the entrance and the overall sense of arrival while opening up the hallway internally.",
			"Externally, the garden is currently being fully cleared and landscaped, creating a cohesive outdoor space that will complement the newly transformed interior.",
			"Once complete, the landscaping will provide a seamless extension of the living space, bringing together the interior and exterior to create a fully unified and considered family home.",
		],
		image: `${base}/media/projects/house-renovation-taunton.png`,
		buildVideoEmbed:
			"https://iframe.mediadelivery.net/embed/610237/b849c472-9446-4903-9dcd-3523438324bb?autoplay=true&loop=true&muted=true&preload=true&background=true",
	},
	{
		slug: "house-extension-puriton",
		title: "House Extension",
		meta: "Puriton",
		location: "Puriton",
		year: "2025-2026",
		description: [
			"A comprehensive, top-to-bottom renovation of a detached property, this project has transformed the home both internally and externally, centred around a substantial three-sided wraparound extension and a complete open-plan reconfiguration of the ground floor.",
			"Externally, the driveway was fully excavated and cleared, including the removal of existing trees, to create a generous four-car parking area. The rear garden has also been extensively landscaped to a high standard, featuring porcelain tiling, tiered terraces leading down to a lawned area, and a further level that connects to a newly constructed outbuilding.",
			"Internally, the property has been fully renovated, with a reconfigured stud wall layout to enhance both space and flow. This includes the creation of a larger main bathroom, now finished as a full wet room with intricate tile work. One of the bedrooms has been converted into a spacious his-and-hers walk-in wardrobe, adding a bespoke, high-end element to the home.",
			"The new extension has significantly increased the footprint of the property, allowing for a dedicated front office, a large additional living space to the side with secondary access to the driveway, and a generous utility room. To the rear, a substantial kitchen and dining area sits beneath a large roof lantern, creating a bright and open focal point for the home.",
			"At the lower level of the garden, a further extension houses a state-of-the-art gym, complete with integrated speakers, mirrored walls, and acoustic panelling. Opposite, a pergola area provides a sheltered outdoor space, with the garden nearing completion and prepared for the installation of a hot tub.",
			"This project delivers a complete transformation, combining high-end finishes with practical design to create a modern, spacious, and highly functional family home.",
		],
		image: `${base}/media/projects/house-extension-bridgwater.png`,
		buildVideoEmbed:
			"https://iframe.mediadelivery.net/embed/610237/1831cec4-c4d0-4452-b4d5-9b474ce179dc?autoplay=true&loop=true&muted=true&preload=true&background=true",
	},
];

export function getProject(slug: string): Project | undefined {
	return [...projects, ...ongoingProjects].find((p) => p.slug === slug);
}
