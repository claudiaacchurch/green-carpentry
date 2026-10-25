import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeImage from "@/components/FadeImage";
import ServicesList from "@/components/ServicesList";
import styles from "./page.module.css";

export const metadata: Metadata = {
	title: "About Us",
	description:
		"Meet Green Carpentry — a Somerset construction and renovation team covering every trade, from loft conversions and extensions to full house renovations.",
	alternates: { canonical: "/about" },
	openGraph: {
		title: "About Us | Green Carpentry",
		description:
			"Meet Green Carpentry — a Somerset construction and renovation team covering every trade, from loft conversions and extensions to full house renovations.",
		url: "/about",
	},
};

const accreditations = [
	{
		src: "/media/partnerlogos/city-guilds.png",
		alt: "City & Guilds",
		href: "https://www.cityandguilds.com/",
	},
	{
		src: "/media/partnerlogos/citb.png",
		alt: "CITB",
		href: "https://www.citb.co.uk/",
	},
	{
		src: "/media/partnerlogos/cscs.png",
		alt: "CSCS",
		href: "https://www.cscs.uk.com/",
	},
	{
		src: "/media/partnerlogos/ciat.png",
		alt: "CIAT",
		href: "https://architecturaltechnology.com/",
	},
];

export default function AboutPage() {
	return (
		<div className={styles.page}>
			<Header />

			<main>
				<section className={styles.section}>
					<h2 className={`${styles.sectionTitle} ${styles.sectionTitleSpaced}`}>
						What we do
					</h2>
					<ServicesList />
				</section>

				<section className={styles.section}>
					<h2 className={`${styles.sectionTitle} ${styles.sectionTitleSpaced}`}>
						Qualified &amp; accredited
					</h2>
					<div className={styles.accreditations}>
						{accreditations.map((item) => (
							<a
								key={item.alt}
								href={item.href}
								target="_blank"
								rel="noopener noreferrer"
								className={styles.accreditationTile}
							>
								<FadeImage
									src={item.src}
									alt={item.alt}
									width={120}
									height={70}
								/>
							</a>
						))}
					</div>
				</section>

				<section className={styles.section}>
					<h2 className={`${styles.sectionTitle} ${styles.sectionTitleSpaced}`}>
						Areas we cover
					</h2>
					<p className={styles.areasIntro}>
						Based in Puriton, we work across Somerset and the South West.
					</p>
				</section>

				<section className={styles.contactBar}>
					<p>Ready to start your project?</p>
					<div className={styles.contactBarActions}>
						<Link href="/#contact" className={styles.primaryBtn}>
							Get in touch
						</Link>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}
