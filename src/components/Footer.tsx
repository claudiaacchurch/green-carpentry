import Link from "next/link";
import { EMAIL, EMAIL_HREF, PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";
import styles from "@/app/page.module.css";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Footer() {
	return (
		<>
			<footer className={styles.footer}>
				<div className={styles.footerCol}>
					<span className={styles.footerColLabel}>Green Carpentry</span>
					<p>Construction services across the South West.</p>
				</div>
				<div className={styles.footerCol}>
					<span className={styles.footerColLabel}>Navigate</span>
					<div className={styles.footerLinks}>
						<Link href="/#projects">Projects</Link>
						<Link href="/about">About</Link>
						<Link href="/#contact">Contact</Link>
						<Link href="/#top">Home</Link>
					</div>
				</div>
				<div className={styles.footerPartners}>
					<span className={styles.footerColLabel}>Our Partners</span>
					<div className={styles.partnersLogos}>
						<a href="https://www.tekkwise.com/" className={styles.partnerLogo}>
							<img
								src={`${base}/media/partnerlogos/tekkwise.png`}
								alt="TeKKWise"
							/>
						</a>
						<a
							href="https://www.instagram.com/nethercottdrones/"
							className={`${styles.partnerLogo} ${styles.partnerLogoOutlined}`}
						>
							<img
								src={`${base}/media/partnerlogos/nethercott-drones.png`}
								alt="Nethercott Drones"
							/>
						</a>
					</div>
				</div>
				<div className={styles.footerContact}>
					<span className={styles.footerColLabel}>Get In Touch</span>
					<a href={EMAIL_HREF} className={styles.footerContactLink}>
						<svg
							width="14"
							height="14"
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
						{EMAIL}
					</a>
					<a href={PHONE_HREF} className={styles.footerContactLink}>
						<svg
							width="14"
							height="14"
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
						{PHONE_DISPLAY}
					</a>
				</div>
			</footer>

			<div className={styles.accreditationBar}>
				<a
					href="https://www.cityandguilds.com/"
					className={styles.accreditationLogo}
				>
					<img
						src={`${base}/media/partnerlogos/city-guilds.png`}
						alt="City & Guilds"
					/>
				</a>
				<a href="https://www.citb.co.uk/" className={styles.accreditationLogo}>
					<img src={`${base}/media/partnerlogos/citb.png`} alt="CITB" />
				</a>
				<a href="https://www.cscs.uk.com/" className={styles.accreditationLogo}>
					<img src={`${base}/media/partnerlogos/cscs.png`} alt="CSCS" />
				</a>
				<a
					href="https://architecturaltechnology.com/"
					className={styles.accreditationLogo}
				>
					<img src={`${base}/media/partnerlogos/ciat.png`} alt="CIAT" />
				</a>
			</div>
		</>
	);
}
