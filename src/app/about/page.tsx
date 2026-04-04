import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { EMAIL, EMAIL_HREF, PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";
import styles from "./page.module.css";

export default function AboutPage() {
	return (
		<div className={styles.page}>
			<Header />

			<main>
				<section className={styles.hero}>
					<img
						src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/media/about.png`}
						alt="Green Carpentry team on site"
						className={styles.heroImage}
					/>
					<div className={styles.heroOverlay} />
					<div className={styles.heroContent}>
						<h1 className={styles.heroTitle}>About Us</h1>
					</div>
				</section>

				<section className={styles.section}>
					<div className={styles.servicesGrid}>
						<div className={styles.serviceCol}>
							<h3 className={styles.serviceColTitle}>Commercial</h3>
							<p>
								We work with commercial clients on all aspects of renovation and
								refurbishment projects. With extensive experience in occupied
								premises, we manage projects to minimise noise and disruption
								while adhering to tight and changing schedules. Our approach
								ensures clients can resume normal business operations as quickly
								and smoothly as possible.
							</p>
						</div>
						<div className={styles.serviceCol}>
							<h3 className={styles.serviceColTitle}>Domestic</h3>
							<p>
								We take great pride in working with our customers to create
								something special and bespoke for their homes. From built-in
								wardrobes and storage solutions to complete loft conversions,
								extensions, and renovations, we have extensive experience across
								a wide range of home improvements.
							</p>
						</div>
						<div className={styles.serviceCol}>
							<h3 className={styles.serviceColTitle}>Maintenance</h3>
							<p>
								As a construction and building maintenance company, we
								understand that all building materials have a finite lifespan.
								Regular maintenance is essential to prevent consequential
								damage, which can quickly become costly if left unaddressed. We
								have experience maintaining a wide range of properties, from
								modern developments to listed and historic buildings, including
								multiple churches.
							</p>
						</div>
					</div>
				</section>

				<section className={styles.contactBar}>
					<p>Ready to start your project?</p>
					<div className={styles.contactBarActions}>
						<a href={PHONE_HREF} className={styles.primaryBtn}>
							{PHONE_DISPLAY}
						</a>
						<a href={EMAIL_HREF} className={styles.secondaryBtn}>
							{EMAIL}
						</a>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}
