import { EMAIL, EMAIL_HREF, PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";
import styles from "@/app/page.module.css";

interface Props {
	/** Extra line under the office hours, e.g. "Weekends closed" */
	hoursNote?: string;
	/** Extra line under the location, e.g. "Serving the South West" */
	locationNote?: string;
}

/**
 * Office hours, location, phone and email for the green contact cards, so
 * the homepage and landing pages always show these details the same way.
 * Wording follows the loft conversions brief.
 */
export default function ContactDetails({ hoursNote, locationNote }: Props) {
	return (
		<>
			<div className={styles.contactDetailsGrid}>
				<div className={styles.contactInfoSection}>
					<strong>Office hours</strong>
					<p>Monday–Friday, 8am–4pm</p>
					{hoursNote && <p>{hoursNote}</p>}
				</div>

				<div className={styles.contactInfoSection}>
					<strong>Based in</strong>
					<p>Puriton, Somerset</p>
					{locationNote && <p>{locationNote}</p>}
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
		</>
	);
}
