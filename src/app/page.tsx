import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
	PHONE_DISPLAY,
	PHONE_HREF,
	EMAIL,
	EMAIL_HREF,
	INSTAGRAM_URL,
	FACEBOOK_URL,
} from "@/lib/constants";
import { projects, ongoingProjects } from "@/lib/projects";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import { getGoogleReviews, staticReviews } from "@/lib/getReviews";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import HeroMedia from "@/components/HeroMedia";
import FadeImage from "@/components/FadeImage";
import SmoothAnchor from "@/components/SmoothAnchor";
import styles from "./page.module.css";
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const team = [
	{
		name: "Ross",
		role: "Director",
		image: `${base}/media/team/ross.png`,
	},
	{
		name: "Luigi",
		role: "Carpenter",
		image: `${base}/media/team/luigi.png`,
	},
	{
		name: "Tony",
		role: "Carpenter",
		image: `${base}/media/team/tony.png`,
	},
	{
		name: "John",
		role: "Carpenter",
		image: `${base}/media/team/john.png`,
	},
	{
		name: "Alfie",
		role: "Apprentice",
		image: `${base}/media/team/alfie.png`,
	},
	{
		name: "Charlie",
		role: "Apprentice",
		image: `${base}/media/team/charlie.png`,
	},
	{
		name: "Keith",
		role: "Architectural Designer",
		image: `${base}/media/team/keith.png`,
	},
	{
		name: "Fran",
		role: "Technologist",
		image: `${base}/media/team/fran.png`,
	},
];

export default async function Home() {
	const googleReviews = await getGoogleReviews();
	const reviews = googleReviews.length > 0 ? googleReviews : staticReviews;
	return (
		<div className={styles.page}>
			<Header />

			<main>
				<section className={styles.hero} id="top">
					<div className={styles.heroMedia}>
						<HeroMedia
							poster={`${base}/media/projects/loft-conversion-north-somerset.png`}
							alt="Green Carpentry construction project"
							videoUrl="https://iframe.mediadelivery.net/embed/610237/71858d3d-4c6f-4a88-bae3-5de046b33908?autoplay=true&loop=true&muted=true&preload=true&background=true"
							imageClassName={styles.heroPoster}
							videoClassName={styles.heroVideo}
						/>
						<div className={styles.heroOverlay} />
					</div>
					<div className={styles.heroContent}>
						<h1 className={styles.heroTitle}>
							Construction <br className={styles.desktopTitleBreak} />
							services <br className={styles.mobileTitleBreak} />
							across <br className={styles.desktopTitleBreak} />
							the South West
						</h1>
						<div className={styles.heroActions}>
							<SmoothAnchor href="#projects" className={styles.primaryBtn}>
								View Projects
							</SmoothAnchor>
							<SmoothAnchor href="#contact" className={styles.secondaryBtn}>
								Contact Us
							</SmoothAnchor>
						</div>
					</div>
				</section>

				<ScrollReveal>
				<section className={styles.introSection}>
					<div className={styles.introCols}>
						<p>
							Every project begins with a vision - bringing it to life takes
							experience, precision, and the right team.
						</p>
						<p>
							Our team of skilled craftsmen covers every trade, so you won’t
							need to deal with multiple contractors. From initial design and
							planning permission through to flawless completion, we manage the
							entire process, delivering cost-effective solutions throughout
							without compromising on quality.
						</p>
						<p>
							Our focus is simple: completing your project on time, within
							budget, and to a standard we’re proud to stand behind.
						</p>
						<p>
							Explore our website to see examples of our previous work and get
							in touch to discuss your project.
						</p>
					</div>
				</section>
				</ScrollReveal>

				<ScrollReveal>
				<section className={styles.section} id="projects">
					<div className={styles.sectionHeader}>
						<div>
							<h2
								className={`${styles.sectionTitle} ${styles.sectionTitleProjects}`}
							>
								Recent Projects
							</h2>
							<p className={styles.sectionSubtitle}>
								A selection of our latest completed work
							</p>
						</div>
					</div>
					<div className={styles.projectsGrid}>
						{projects.map((project, index) => (
							<Link
								key={project.slug}
								href={`/projects/${project.slug}`}
								className={styles.projectCard}
							>
								<div className={styles.projectMedia}>
									<Image
										src={project.image}
										alt={project.title}
										fill
										sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
										className={styles.projectImage}
										priority={index < 2}
									/>
								</div>
								<div className={styles.projectBody}>
									<span className={styles.projectMeta}>{project.meta}</span>
									<h3 className={styles.projectTitle}>{project.title}</h3>
								</div>
							</Link>
						))}
					</div>
				</section>
				</ScrollReveal>

				<ScrollReveal>
				<section className={styles.section} id="ongoingProjects">
					<div className={styles.sectionHeader}>
						<div>
							<h2
								className={`${styles.sectionTitle} ${styles.sectionTitleProjects}`}
							>
								Ongoing Projects
								</h2>
								<p className={styles.sectionSubtitle}>
									See what we&apos;re working on right now
								</p>
						</div>
					</div>
					<div className={styles.projectsGrid}>
						{ongoingProjects.map((project, index) => (
							<Link
								key={project.slug}
								href={`/projects/${project.slug}`}
								className={styles.projectCard}
							>
								<div className={styles.projectMedia}>
									<Image
										src={project.image}
										alt={project.title}
										fill
										sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
										className={styles.projectImage}
										priority={index < 2}
									/>
								</div>
								<div className={styles.projectBody}>
									<span className={styles.projectMeta}>{project.meta}</span>
									<h3 className={styles.projectTitle}>{project.title}</h3>
								</div>
							</Link>
						))}
					</div>
				</section>
				</ScrollReveal>

				<ScrollReveal>
				<section className={styles.section} id="reviews">
					<div className={styles.sectionHeader}>
						<div>
							<h2 className={styles.sectionTitle}>What Our Clients Say</h2>
						</div>
					</div>
					<ReviewsCarousel reviews={reviews} />
				</section>
				</ScrollReveal>

				<ScrollReveal>
				<section className={styles.section} id="team">
					<div className={styles.sectionHeader}>
						<div>
							<h2 className={styles.sectionTitle}>Meet the Team</h2>
						</div>
					</div>
					<div className={styles.teamGrid}>
						{team.map((member, index) => (
							<article
								className={styles.teamCard}
								key={`${member.role}-${index}`}
							>
								<div className={styles.teamAvatar}>
									<FadeImage
										src={member.image}
										alt={member.name}
										width={100}
										height={100}
										className={styles.teamAvatarImage}
										style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
									/>
								</div>
								<div>
									<h3 className={styles.teamName}>{member.name}</h3>
									<p className={styles.teamRole}>{member.role}</p>
								</div>
							</article>
						))}
					</div>
				</section>
				</ScrollReveal>

				<ScrollReveal>
				<p className={styles.partnersLabel}>Our Partners</p>
				<div className={styles.partnersBar}>
					<div className={styles.partnersGrid}>
						<a
							href="https://www.tekkwise.com/"
							className={`${styles.partnerBarItem} ${styles.partnerBarItemLarge}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<FadeImage
								src="/media/partnerlogos/tekkwise.png"
								alt="TeKKWise"
								width={70}
								height={70}
								style={{ objectFit: "contain" }}
							/>
						</a>
						<a
							href="/"
							className={`${styles.partnerBarItem} ${styles.partnerBarItemL}`}
						>
							<FadeImage
								src="/media/partnerlogos/placeholder-l.png"
								alt="L"
								width={70}
								height={70}
								style={{ objectFit: "contain" }}
							/>
						</a>
						<a
							href="https://nigelsalterjoinery.com/"
							className={`${styles.partnerBarItem} ${styles.partnerBarItemWide} ${styles.partnerBarItemNudgeUp3}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<FadeImage
								src="/media/partnerlogos/nigel-salter-joinery.png"
								alt="Nigel Salter Joinery"
								width={150}
								height={50}
								style={{ objectFit: "contain" }}
							/>
						</a>
						<a
							href="https://www.clearview-windows.uk/"
							className={`${styles.partnerBarItem} ${styles.partnerBarItemWideSoft} ${styles.partnerBarItemNudgeUp4}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<FadeImage
								src="/media/partnerlogos/clear-view-windows.png"
								alt="Clear View Windows"
								width={150}
								height={50}
								style={{ objectFit: "contain" }}
							/>
						</a>
						<a
							href="https://www.instagram.com/nethercottdrones/"
							className={`${styles.partnerBarItem} ${styles.partnerBarItemNethercott}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<FadeImage
								src="/media/partnerlogos/nethercott-drones.png"
								alt="Nethercott Drones"
								width={70}
								height={70}
								style={{ objectFit: "contain" }}
							/>
						</a>
						<a
							href="https://www.facebook.com/p/THarris-plumbing-and-heating-100063621100983/"
							className={`${styles.partnerBarItem} ${styles.partnerBarItemWideTight} ${styles.partnerBarItemNudgeUp7}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<FadeImage
								src="/media/partnerlogos/t-harris-plumbing.png"
								alt="T Harris Plumbing & Heating"
								width={150}
								height={50}
								style={{ objectFit: "contain" }}
							/>
						</a>
						<a
							href="https://wmironwork.co.uk/"
							className={`${styles.partnerBarItem} ${styles.partnerBarItemWide} ${styles.partnerBarItemNudgeDown3}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<FadeImage
								src="/media/partnerlogos/ironwork.png"
								alt="Ironwork Ltd"
								width={150}
								height={50}
								style={{ objectFit: "contain" }}
							/>
						</a>
						<a
							href="https://www.jacklewiselectrics.co.uk/"
							className={`${styles.partnerBarItem} ${styles.partnerBarItemSmall}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<FadeImage
								src="/media/partnerlogos/jack-lewis-electrics.png"
								alt="Jack Lewis Electrics"
								width={60}
								height={60}
								style={{ objectFit: "contain" }}
							/>
						</a>
					</div>
				</div>
				</ScrollReveal>

				<ScrollReveal>
				<section className={styles.section} id="contact">
					<div className={styles.contactWrapper}>
						<div className={styles.contactInfoBox}>
							<div className={styles.contactInfoHeader}>
								<h2 className={styles.contactInfoTitle}>Contact us</h2>
								<p className={styles.contactInfoText}>
									We want to hear about your project. Call us today for a
									consultation and a free quote on our services.
								</p>
							</div>

							<div className={styles.contactDetailsGrid}>
								<div className={styles.contactInfoSection}>
									<strong>Business hours</strong>
									<p>Mon-Fri, 8am-4pm</p>
									<p>Weekends closed</p>
								</div>

								<div className={styles.contactInfoSection}>
									<strong>Our address</strong>
									<p>Puriton, Somerset</p>
									<p>Serving the South West</p>
								</div>
							</div>

							<div className={`${styles.contactInfoSection} ${styles.contactMethods}`}>
								<strong>Get in touch</strong>
								<p className={styles.contactInfoItem}>
									<svg
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
									>
										<path
											d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									<a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
								</p>
								<p className={styles.contactInfoItem}>
									<svg
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
									>
										<path
											d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<polyline
											points="22,6 12,13 2,6"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									<a href={EMAIL_HREF}>{EMAIL}</a>
								</p>
							</div>

							<div className={`${styles.contactInfoSection} ${styles.contactSocialSection}`}>
								<strong>Follow us</strong>
								<div className={styles.contactSocialRow}>
									<a
										href={INSTAGRAM_URL}
										aria-label="Instagram"
										className={styles.contactSocialLink}
									>
										<svg
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											aria-hidden="true"
										>
											<rect
												x="3"
												y="3"
												width="18"
												height="18"
												rx="5"
												stroke="currentColor"
												strokeWidth="1.6"
											/>
											<circle
												cx="12"
												cy="12"
												r="4"
												stroke="currentColor"
												strokeWidth="1.6"
											/>
											<circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
										</svg>
										Instagram
									</a>
									<a
										href={FACEBOOK_URL}
										aria-label="Facebook"
										className={styles.contactSocialLink}
									>
										<svg
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											aria-hidden="true"
										>
											<path
												d="M14 8.5V7.2c0-1 .5-1.7 1.7-1.7h1.3V3h-2c-2.5 0-4 1.6-4 4v1.5H8.5v3H11V21h3v-9.5h2.7l.3-3H14Z"
												fill="currentColor"
											/>
										</svg>
										Facebook
									</a>
								</div>
							</div>
						</div>

						<ContactForm />
					</div>
				</section>
				</ScrollReveal>
			</main>

			<Footer />
		</div>
	);
}
