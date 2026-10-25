"use client";

import { useEffect, useState, type ReactNode } from "react";
import styles from "@/app/about/page.module.css";

interface Service {
	title: string;
	icon: ReactNode;
	text: string;
}

const iconProps = {
	width: 22,
	height: 22,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 1.5,
	strokeLinecap: "round" as const,
	strokeLinejoin: "round" as const,
	"aria-hidden": true,
};

const services: Service[] = [
	{
		title: "Commercial",
		icon: (
			<svg {...iconProps}>
				<path d="M3 21h18M5 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16M15 9h3a1 1 0 0 1 1 1v11" />
				<path d="M8 8h1M11 8h1M8 12h1M11 12h1M8 16h1M11 16h1" />
			</svg>
		),
		text: "We work with commercial clients on all aspects of renovation and refurbishment projects. With extensive experience in occupied premises, we manage projects to minimise noise and disruption while adhering to tight and changing schedules. Our approach ensures clients can resume normal business operations as quickly and smoothly as possible.",
	},
	{
		title: "Domestic",
		icon: (
			<svg {...iconProps}>
				<path d="M3 11l9-7 9 7" />
				<path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5" />
			</svg>
		),
		text: "We take great pride in working with our customers to create something special and bespoke for their homes. From built-in wardrobes and storage solutions to complete loft conversions, extensions, and renovations, we have extensive experience across a wide range of home improvements.",
	},
	{
		title: "Maintenance",
		icon: (
			<svg {...iconProps}>
				<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3.6 17.4a1.4 1.4 0 0 0 2 2l5.7-5.7a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5z" />
			</svg>
		),
		text: "As a construction and building maintenance company, we understand that all building materials have a finite lifespan. Regular maintenance is essential to prevent consequential damage, which can quickly become costly if left unaddressed. We have experience maintaining a wide range of properties, from modern developments to listed and historic buildings, including multiple churches.",
	},
];

const MOBILE_QUERY = "(max-width: 720px)";

/**
 * Three service columns on desktop. On mobile each becomes a tappable row
 * (icon + title) that expands its paragraph, so the page isn't a wall of text.
 * On desktop the toggles are disabled, so they behave as plain headings.
 */
export default function ServicesList() {
	const [open, setOpen] = useState<string | null>(null);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(MOBILE_QUERY);
		const update = () => setIsMobile(media.matches);
		update();
		media.addEventListener("change", update);
		return () => media.removeEventListener("change", update);
	}, []);

	return (
		<div className={styles.servicesGrid}>
			{services.map((service) => {
				const isOpen = open === service.title;
				const panelId = `service-${service.title.toLowerCase()}`;
				return (
					<div
						key={service.title}
						className={`${styles.serviceCol}${isOpen ? ` ${styles.serviceColOpen}` : ""}`}
					>
						<h3 className={styles.serviceColHeading}>
							<button
								type="button"
								className={styles.serviceToggle}
								disabled={!isMobile}
								aria-expanded={isMobile ? isOpen : undefined}
								aria-controls={isMobile ? panelId : undefined}
								onClick={() => setOpen(isOpen ? null : service.title)}
							>
								<span className={styles.serviceIcon}>{service.icon}</span>
								<span className={styles.serviceColTitle}>{service.title}</span>
								<svg
									className={styles.serviceChevron}
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden="true"
								>
									<path d="M6 9l6 6 6-6" />
								</svg>
							</button>
						</h3>
						<p id={panelId} className={styles.servicePanel}>
							{service.text}
						</p>
					</div>
				);
			})}
		</div>
	);
}
