import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { INSTAGRAM_URL, FACEBOOK_URL } from "@/lib/constants";
import { projects, ongoingProjects } from "@/lib/projects";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import { getGoogleReviews, staticReviews } from "@/lib/getReviews";
import ContactForm from "@/components/ContactForm";
import ContactDetails from "@/components/ContactDetails";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollRowButton from "@/components/ScrollRowButton";
import HeroMedia from "@/components/HeroMedia";
import FadeImage from "@/components/FadeImage";
import SmoothAnchor from "@/components/SmoothAnchor";
import styles from "./page.module.css";

const team = [
	{
		name: "Ross",
		role: "Managing Director & Contracts Manager",
		image: "/media/team/ross-new.jpg",
	},
	{
		name: "Liam",
		role: "Site Manager",
		image: "/media/team/liam.jpg",
	},
	{
		name: "Luigi",
		role: "Carpenter",
		image: "/media/team/luigi.jpg",
	},
	{
		name: "Tony",
		role: "Carpenter",
		image: "/media/team/tony.jpg",
	},
	{
		name: "John",
		role: "Carpenter",
		image: "/media/team/john.jpg",
	},
	{
		name: "Alfie",
		role: "Carpenter",
		image: "/media/team/alfie.jpg",
	},
	{
		name: "Charlie",
		role: "Apprentice",
		image: "/media/team/charlie.jpg",
	},
	{
		name: "Tyler",
		role: "Plasterer",
		image: "/media/team/tyler-avatar.jpg",
	},
	{
		name: "Joe",
		role: "Bricklayer",
		image: "/media/team/joey.jpg",
	},
	{
		name: "Dan",
		role: "Stonemason",
		image: "/media/team/dan.jpg",
	},
	{
		name: "Burt",
		role: "Groundworker",
		image: "/media/team/bert.jpg",
	},
	{
		name: "Scott",
		role: "Skilled Labourer",
		image: "/media/team/scott.jpg",
	},
	{
		name: "Keith",
		role: "Architectural Designer",
		image: "/media/team/keith-portrait.jpg",
	},
	{
		name: "Fran",
		role: "Technologist",
		image: "/media/team/fran-new.jpg",
	},
];

export const metadata: Metadata = {
	alternates: { canonical: "/" },
};

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
							poster={"/media/projects/loft-conversion-north-somerset.jpg"}
							alt="Aerial view of the Merridge loft conversion: a new clad upper storey with a balcony and glass balustrade, set against fields in the Quantock Hills"
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
								planning permission through to flawless completion, we manage
								the entire process, delivering cost-effective solutions
								throughout without compromising on quality.
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
									Completed Projects
								</h2>
								<p className={styles.sectionSubtitle}>
									A selection of our latest completed work
								</p>
							</div>
						</div>
						<div className={styles.projectsGrid}>
							{projects.map((project) => (
								<Link
									key={project.slug}
									href={`/projects/${project.slug}`}
									className={styles.projectCard}
								>
									<div className={styles.projectMedia}>
										<Image
											src={project.image}
											alt={project.imageAlt}
											fill
											sizes="(max-width: 1100px) 50vw, 33vw"
											className={styles.projectImage}
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
							{ongoingProjects.map((project) => (
								<Link
									key={project.slug}
									href={`/projects/${project.slug}`}
									className={styles.projectCard}
								>
									<div className={styles.projectMedia}>
										<Image
											src={project.image}
											alt={project.imageAlt}
											fill
											sizes="(max-width: 1100px) 50vw, 33vw"
											className={styles.projectImage}
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
					<section className={styles.section} id="team">
						<div className={styles.sectionHeader}>
							<div>
								<h2 className={styles.sectionTitle}>Meet the Team</h2>
							</div>
						</div>
						<div className={styles.teamGrid} id="team-row">
							{team.map((member, index) => (
								<article
									className={styles.teamCard}
									key={`${member.role}-${index}`}
								>
									<div className={styles.teamAvatar}>
										<FadeImage
											src={member.image}
											alt={`${member.name}, ${member.role} at Green Carpentry`}
											width={100}
											height={100}
											className={styles.teamAvatarImage}
											style={{
												width: "100%",
												height: "100%",
												objectFit: "cover",
												objectPosition: "center",
											}}
										/>
									</div>
									<div>
										<h3 className={styles.teamName}>{member.name}</h3>
										<p className={styles.teamRole}>{member.role}</p>
									</div>
								</article>
							))}
						</div>
						<ScrollRowButton
							targetId="team-row"
							className={styles.teamSwipeHint}
							label="Show more of the team"
						/>
					</section>
				</ScrollReveal>

				<ScrollReveal>
					<section className={styles.section} id="partners">
						<div className={styles.sectionHeader}>
							<h2 className={styles.sectionTitle}>Our Partners</h2>
						</div>
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
										alt="TeKKWise logo"
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
										alt="Nigel Salter Joinery logo"
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
										alt="Clear View Windows logo"
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
										alt="Nethercott Drones logo"
										width={70}
										height={70}
										style={{ objectFit: "contain" }}
									/>
								</a>
								<a
									href="https://www.thomasfacades.co.uk/"
									className={`${styles.partnerBarItem} ${styles.partnerBarItemWide} ${styles.partnerBarItemNudgeDown3}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									<FadeImage
										src="/media/partnerlogos/thomas-fascades.png"
										alt="Thomas Facades logo"
										width={60}
										height={60}
										style={{ objectFit: "contain" }}
									/>
								</a>
								<a
									href="https://wmironwork.co.uk/"
									className={`${styles.partnerBarItem} ${styles.partnerBarItemWide}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									<FadeImage
										src="/media/partnerlogos/ironwork.png"
										alt="Ironwork Ltd logo"
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
										alt="Jack Lewis Electrics logo"
										width={60}
										height={60}
										style={{ objectFit: "contain" }}
									/>
								</a>
								<a
									href="https://lightworksolar.co.uk/"
									className={`${styles.partnerBarItem} ${styles.partnerBarItemWideSoft}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									<FadeImage
										src="/media/partnerlogos/lightwork-solar.png"
										alt="Lightwork Solar Solutions logo"
										width={60}
										height={60}
										style={{ objectFit: "contain" }}
									/>
								</a>
								<a
									href="https://www.facebook.com/p/Alfa-Resins-LTD-61558736039917/"
									className={`${styles.partnerBarItem} ${styles.partnerBarItemWideSoft}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									<FadeImage
										src="/media/partnerlogos/alfa-resin-wide.png"
										alt="Alfa Resins logo"
										width={60}
										height={60}
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
										alt="T Harris Plumbing & Heating logo"
										width={150}
										height={50}
										style={{ objectFit: "contain" }}
									/>
								</a>
							</div>
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

								<ContactDetails
									hoursNote="Weekends closed"
									locationNote="Serving the South West"
								/>

								<div
									className={`${styles.contactInfoSection} ${styles.contactSocialSection}`}
								>
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
												<circle
													cx="17.2"
													cy="6.8"
													r="1.2"
													fill="currentColor"
												/>
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
