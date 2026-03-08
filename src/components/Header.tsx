"use client";

import Link from "next/link";
import SocialIcons from "./SocialIcons";
import styles from "@/app/page.module.css";
import { useRef, useState } from "react";

export default function Header() {
	const detailsRef = useRef<HTMLDetailsElement>(null);
	const [closing, setClosing] = useState(false);

	function startClose() {
		if (!detailsRef.current?.open || closing) return;
		setClosing(true);
	}

	function handleTransitionEnd(e: React.TransitionEvent<HTMLDivElement>) {
		if (
			closing &&
			e.propertyName === "transform" &&
			e.target === e.currentTarget
		) {
			setClosing(false);
			if (detailsRef.current) detailsRef.current.open = false;
		}
	}

	function handleSummaryClick(e: React.MouseEvent) {
		if (detailsRef.current?.open) {
			e.preventDefault();
			startClose();
		}
	}

	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/media/green-carpentry-logo.png`}
					alt="Green Carpentry Logo"
					className={styles.logoImage}
				/>
			</div>

			<div className={styles.headerRight}>
				<nav className={styles.nav}>
					<Link href="/#top">Home</Link>
					<Link href="/#projects">Projects</Link>
					<Link href="/#about">About</Link>
					<Link href="/#team">Meet the Team</Link>
					<Link href="/#reviews">Reviews</Link>
					<Link href="/#contact">Get in Touch</Link>
					<div className={styles.navSocials}>
						<SocialIcons />
					</div>
				</nav>
			</div>

			<details ref={detailsRef} className={styles.mobileMenu}>
				<summary
					className={styles.hamburger}
					aria-label="Open menu"
					onClick={handleSummaryClick}
				>
					<span />
					<span />
					<span />
				</summary>
				<div
					className={`${styles.mobilePanel}${closing ? ` ${styles.mobilePanelClosing}` : ""}`}
					onClick={startClose}
					onTransitionEnd={handleTransitionEnd}
				>
					<Link href="/#top" onClick={startClose}>Home</Link>
					<Link href="/#projects" onClick={startClose}>Projects</Link>
					<Link href="/#about" onClick={startClose}>About</Link>
					<Link href="/#team" onClick={startClose}>Meet the Team</Link>
					<Link href="/#reviews" onClick={startClose}>Reviews</Link>
					<Link href="/#contact" className={styles.navCta} onClick={startClose}>
						Get in Touch
					</Link>
					<div className={styles.mobileSocials}>
						<SocialIcons />
					</div>
				</div>
			</details>
		</header>
	);
}
