"use client";

import Link from "next/link";
import SocialIcons from "./SocialIcons";
import styles from "@/app/page.module.css";
import { useRef, useState, useEffect } from "react";

export default function Header() {
	const detailsRef = useRef<HTMLDetailsElement>(null);
	const [closing, setClosing] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	function startClose() {
		if (!detailsRef.current?.open || closing) return;
		setClosing(true);
	}

	function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>) {
		const href = e.currentTarget.getAttribute("href");
		if (!href?.includes("#")) return;
		if (!detailsRef.current?.open) return;
		const [pathPart, hash] = href.split("#");
		const onTargetPage = !pathPart || window.location.pathname === pathPart || window.location.pathname === pathPart.replace(/\/$/, "");
		if (!onTargetPage) {
			startClose();
			return;
		}
		e.preventDefault();
		startClose();
		setTimeout(() => {
			const el = document.getElementById(hash);
			if (el) {
				const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;
				const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
				window.scrollTo({ top, behavior: "smooth" });
			}
		}, 380);
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
		<header className={`${styles.header}${scrolled ? ` ${styles.headerScrolled}` : ""}`}>
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
					<Link href="/about">About</Link>
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
					onTransitionEnd={handleTransitionEnd}
				>
					<Link href="/#top" onClick={handleNavClick}>Home</Link>
					<Link href="/#projects" onClick={handleNavClick}>Projects</Link>
					<Link href="/about" onClick={startClose}>About</Link>
					<Link href="/#team" onClick={handleNavClick}>Meet the Team</Link>
					<Link href="/#reviews" onClick={handleNavClick}>Reviews</Link>
					<Link href="/#contact" className={styles.navCta} onClick={handleNavClick}>
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
