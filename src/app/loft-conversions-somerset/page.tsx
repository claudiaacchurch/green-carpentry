import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoftEnquiryForm from "@/components/LoftEnquiryForm";
import SmoothAnchor from "@/components/SmoothAnchor";
import ContactDetails from "@/components/ContactDetails";
import { getProject } from "@/lib/projects";
import { EMAIL, SITE_URL } from "@/lib/constants";
import homeStyles from "@/app/page.module.css";
import styles from "./page.module.css";

const PATH = "/loft-conversions-somerset";
const TITLE = "Loft Conversions Somerset | Green Carpentry";
const DESCRIPTION =
	"Create more space with a loft conversion in Somerset. Puriton-based Green Carpentry manages design through to completion. Request your free quote.";

const merridge = getProject("loft-conversion-merridge");
const MERRIDGE_PATH = "/projects/loft-conversion-merridge";
const MERRIDGE_IMAGE =
	merridge?.image ?? "/media/projects/loft-conversion-north-somerset.jpg";

export const metadata: Metadata = {
	title: { absolute: TITLE },
	description: DESCRIPTION,
	alternates: { canonical: PATH },
	openGraph: {
		title: TITLE,
		description: DESCRIPTION,
		url: PATH,
		images: [
			{
				url: "/media/og/loft-conversion-north-somerset.jpg",
				width: 1200,
				height: 630,
				alt: "Completed loft conversion in Merridge, Somerset",
			},
		],
	},
};

const faqs: { question: string; answer: string[] }[] = [
	{
		question: "Can my loft be converted?",
		answer: [
			"Suitability depends on the existing roof, available space and how access to the new room could work. Get in touch to discuss your property before committing to a particular layout.",
		],
	},
	{
		question: "How much will my loft conversion cost?",
		answer: [
			"The cost depends on the work involved, the layout and your chosen specification. A bedroom, a room with an en-suite and a conversion requiring more extensive structural alterations will have different requirements.",
			"Contact Green Carpentry for a free quote for your project.",
		],
	},
	{
		question: "How long will the work take?",
		answer: [
			"The programme will depend on the design, preparation required and scope of the build. Tell us if you have a particular completion date in mind so that timing can be discussed from the outset.",
		],
	},
	{
		question: "Do I need drawings before contacting you?",
		answer: [
			"You can get in touch while you’re still at the ideas stage. Green Carpentry’s service includes initial design and planning support as part of the wider project.",
			"If you already have drawings, mention them in your enquiry.",
		],
	},
	{
		question: "Can a loft conversion include an en-suite?",
		answer: [
			"An en-suite may be possible, depending on the available space, layout and plumbing requirements. Our Merridge loft conversion included a new en-suite alongside electrical and heating upgrades.",
			"Tell us if an en-suite is part of your plans so it can be considered from the beginning.",
		],
	},
	{
		question: "Can you include fitted storage?",
		answer: [
			"Green Carpentry’s domestic work includes built-in wardrobes and storage solutions. Tell us what you need to store so it can be considered alongside your room layout.",
		],
	},
	{
		question: "Where are you based?",
		answer: [
			"We are based in Puriton, near Bridgwater, Somerset, and serve the South West. If you’re considering a loft conversion in Bridgwater or elsewhere in Somerset, send us your postcode and project details to discuss your location.",
		],
	},
];

// Structured data so search engines understand the page is a local service
const structuredData = [
	{
		"@context": "https://schema.org",
		"@type": "Service",
		name: "Loft conversions",
		serviceType: "Loft conversion",
		url: `${SITE_URL}${PATH}`,
		description: DESCRIPTION,
		areaServed: { "@type": "AdministrativeArea", name: "Somerset" },
		provider: {
			"@type": "HomeAndConstructionBusiness",
			name: "Green Carpentry",
			url: SITE_URL,
			telephone: "+447888042217",
			email: EMAIL,
			address: {
				"@type": "PostalAddress",
				addressLocality: "Puriton",
				addressRegion: "Somerset",
				addressCountry: "GB",
			},
		},
	},
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map((faq) => ({
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: { "@type": "Answer", text: faq.answer.join(" ") },
		})),
	},
];

function QuoteButton({ children }: { children: React.ReactNode }) {
	return (
		<SmoothAnchor href="#enquiry" className={styles.primaryBtn}>
			{children}
		</SmoothAnchor>
	);
}

export default function LoftConversionsPage() {
	return (
		<div className={styles.page}>
			<Header />
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>

			<main>
				{/* Hero */}
				<section className={styles.hero}>
					<Image
						src={MERRIDGE_IMAGE}
						alt={merridge?.imageAlt ?? "Completed loft conversion in Merridge, Somerset"}
						fill
						priority
						fetchPriority="high"
						sizes="100vw"
						className={styles.heroImage}
					/>
					<div className={styles.heroOverlay} />
					<div className={styles.heroContent}>
						{/* The <br> only takes effect on phones, for a balanced two-line title */}
						<h1 className={styles.heroTitle}>
							Loft Conversions{" "}
							<br className={styles.mobileBreak} />
							in Somerset
						</h1>
						<p className={styles.heroEyebrow}>
							More space to live, in the home you love.
						</p>
						<div className={styles.heroActions}>
							<SmoothAnchor
								href="#enquiry"
								className={`${styles.primaryBtn} ${styles.heroBtn}`}
							>
								Request My Free Quote
							</SmoothAnchor>
						</div>
					</div>
				</section>

				{/* Intro + trust strip */}
				<section className={`${styles.section} ${styles.intro}`}>
					<div className={styles.prose}>
						<p className={styles.lead}>
							Need another bedroom, a quieter home office or room for your
							growing family? A loft conversion could give you the space
							you’re missing without leaving the home and neighbourhood you
							love.
						</p>
						<p>
							Based in Puriton, near Bridgwater, Green Carpentry undertakes loft
							conversions in Somerset, managing projects from initial design and
							planning through to completion.
						</p>
						<p>
							Tell us what you have in mind and take the first step towards
							making more of your home.
						</p>
					</div>
					<ul className={styles.trustStrip}>
						<li>Based in Puriton, Somerset</li>
						<li>Complete project management</li>
						<li>Bespoke carpentry</li>
					</ul>
				</section>

				{/* What could your loft become? */}
				<section className={styles.section}>
					<div className={styles.split}>
						<div className={styles.prose}>
							<h2 className={styles.sectionTitle}>What could your loft become?</h2>
							<p>
								An unused loft can hold more possibilities than you think. The
								right layout could create:
							</p>
						</div>
						<div className={styles.prose}>
							<ul className={styles.checkList}>
								<li>An extra bedroom for a growing family.</li>
								<li>A guest room that gives visitors their own space.</li>
								<li>A dedicated office away from the busiest parts of the house.</li>
								<li>A bedroom with an en-suite, where the layout allows.</li>
								<li>A comfortable room with storage designed around sloping ceilings.</li>
							</ul>
							<p>
								Start with how you want to use the space. The design can then
								take account of your roof, access and the way the new room
								connects with the rest of your home.
							</p>
						</div>
					</div>
				</section>

				{/* One team */}
				<section className={styles.section}>
					<div className={`${styles.prose} ${styles.sectionIntro}`}>
						<h2 className={styles.sectionTitle}>One team to bring your project together</h2>
						<p>
							A loft conversion involves more than creating another room.
							Design decisions, different trades and the finishing details all
							need to work together.
						</p>
						<p>
							Green Carpentry coordinates the whole project, giving you one team
							to work with throughout the build. Our team includes an
							architectural designer, a technologist and skilled carpenters.
						</p>
					</div>
					<div className={styles.cards}>
						<div className={styles.card}>
							<h3>Designed around your home</h3>
							<p>
								Every home is different. The position of the stairs, the shape of
								the roof and the intended use of the room all influence what will
								work best.
							</p>
							<p>
								We work with homeowners to create bespoke spaces, with practical
								details considered alongside the overall design.
							</p>
						</div>
						<div className={styles.card}>
							<h3>Carpentry that makes the space work harder</h3>
							<p>
								Sloping ceilings and awkward corners need careful thought. Our
								experience includes built-in wardrobes and bespoke storage,
								helping you make useful space out of areas that could otherwise
								go unused.
							</p>
						</div>
						<div className={styles.card}>
							<h3>A focus on quality and value</h3>
							<p>
								Our aim is to deliver a well-finished project, with careful
								attention to your budget, timescale and the details that matter
								to you.
							</p>
						</div>
					</div>
					<div className={styles.actions}>
						<QuoteButton>Discuss My Loft Conversion</QuoteButton>
					</div>
				</section>

				{/* Merridge case study */}
				<section className={styles.section}>
					<div className={`${styles.prose} ${styles.sectionIntro}`}>
						<h2 className={styles.sectionTitle}>
							Loft conversion in Merridge, Quantock Hills
						</h2>
						<p className={styles.lead}>
							From unused roof space to a bright living area with an en-suite and
							balcony.
						</p>
					</div>
					<div className={styles.caseStudy}>
						<figure className={styles.photo}>
							<Image
								src="/media/projects/loft-front.jpg"
								alt="Front of the completed Merridge loft conversion: a new upper storey with beige cladding and large glass sliding doors opening onto a balcony with a glass balustrade and an external staircase"
								fill
								sizes="(max-width: 954px) 100vw, 55vw"
							/>
						</figure>
						<div className={styles.prose}>
							<p>
								For this property in Merridge, in the Quantock Hills, Green
								Carpentry completed a full loft conversion to give the homeowners
								the additional room they needed.
							</p>
							<p>
								The project brought together structural alterations, carpentry and
								new electrical and plumbing installations, transforming the roof
								space into a comfortable, practical part of the home.
							</p>
							<h3>Creating the structure and access</h3>
							<p>
								Work included alterations to the existing walls and roof,
								alongside the installation of new floor joists and timber-frame
								walls.
							</p>
							<p>
								A new internal staircase connects the conversion to the home
								below. Triangular windows bring natural light into the stairwell,
								helping to create a bright approach to the new living space.
							</p>
							<h3>An en-suite and a connection to the outdoors</h3>
							<p>
								The conversion includes a new en-suite, a full rewire and plumbing
								work to upgrade the heating system for the new space.
							</p>
							<p>
								Bifold doors open onto a newly built balcony, while an external
								staircase provides additional access. Cedral cladding completes
								the exterior.
							</p>
							<p>
								The finished conversion gives the homeowners additional living
								space, with natural light, practical access and its own en-suite.
							</p>
							<Link href={MERRIDGE_PATH} className={styles.textLink}>
								View the Merridge Loft Conversion
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
									<path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</Link>
						</div>
					</div>
				</section>

				{/* Start with a conversation */}
				<section className={styles.section}>
					<div className={styles.split}>
						<div className={styles.prose}>
							<h2 className={styles.sectionTitle}>Start with a conversation about your home</h2>
							<p>You don’t need to have every detail decided before getting in touch.</p>
							<p>
								Tell us where your property is, what you would like to use the
								loft for and whether you already have drawings. If you’re still
								exploring your options, let us know what you want the extra space
								to achieve.
							</p>
						</div>
						<div className={styles.prose}>
							<p>Useful starting points include:</p>
							<ul className={styles.checkList}>
								<li>How many additional rooms you would like.</li>
								<li>Whether you want a bathroom or en-suite.</li>
								<li>Any storage you would like to include.</li>
								<li>Your preferred timing and approximate budget, if known.</li>
							</ul>
							<p>
								These details give us a clearer picture of your project and help
								start a useful conversation.
							</p>
							<div className={styles.actionsInline}>
								<QuoteButton>Request My Free Quote</QuoteButton>
							</div>
						</div>
					</div>
				</section>

				{/* FAQs */}
				<section className={styles.section}>
					<h2 className={`${styles.sectionTitle} ${styles.sectionTitleSpaced}`}>
						Your loft conversion questions
					</h2>
					<div className={styles.faqs}>
						{faqs.map((faq) => (
							<details key={faq.question} className={styles.faq}>
								<summary>
									<h3>{faq.question}</h3>
									<svg className={styles.faqChevron} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
										<path d="M6 9l6 6 6-6" />
									</svg>
								</summary>
								<div className={styles.faqAnswer}>
									{faq.answer.map((para) => (
										<p key={para}>{para}</p>
									))}
								</div>
							</details>
						))}
					</div>
				</section>

				{/* Enquiry */}
				<section className={`${styles.section} ${styles.enquiry}`} id="enquiry">
					{/* Same green card and contact details as the homepage */}
					<div className={homeStyles.contactInfoBox}>
						<div className={homeStyles.contactInfoHeader}>
							<h2 className={homeStyles.contactInfoTitle}>
								Ready to make more of your home?
							</h2>
							<p className={homeStyles.contactInfoText}>
								Tell us about your loft conversion and what you want your new
								space to do for you.
							</p>
							<p className={homeStyles.contactInfoText}>
								Whether you have drawings ready or are just starting to explore
								the possibilities, contact Green Carpentry to discuss your ideas
								and request a free quote.
							</p>
						</div>
						<ContactDetails />
					</div>
					<LoftEnquiryForm />
				</section>
			</main>

			<Footer />
		</div>
	);
}
