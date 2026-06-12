"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SocialIcons from "./SocialIcons";
import styles from "@/app/page.module.css";
import { useRef, useState, useEffect } from "react";
import { smoothScrollToElement } from "@/lib/smoothScroll";
import { EMAIL_HREF, PHONE_HREF } from "@/lib/constants";

export default function Header() {
	const detailsRef = useRef<HTMLDetailsElement>(null);
	const [closing, setClosing] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();

	const navItems = [
		{ href: "/#top", label: "Home" },
		{ href: "/#projects", label: "Projects" },
		{ href: "/about", label: "About" },
		{ href: "/#team", label: "Meet the Team" },
		{ href: "/#reviews", label: "Reviews" },
		{ href: "/#contact", label: "Get in Touch" },
	];

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
		const [pathPart, hash] = href.split("#");
		const onTargetPage = !pathPart || window.location.pathname === pathPart || window.location.pathname === pathPart.replace(/\/$/, "");
		if (!onTargetPage) {
			startClose();
			return;
		}
		e.preventDefault();
		const menuIsOpen = detailsRef.current?.open ?? false;
		if (menuIsOpen) startClose();
		setTimeout(() => {
			const el = document.getElementById(hash);
			if (el) {
				smoothScrollToElement(el);
			}
		}, menuIsOpen ? 560 : 0);
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

	function isActiveLink(href: string) {
		if (href === "/about") return pathname === "/about";
		if (href === "/#top") return pathname === "/";
		return false;
	}

	return (
		<header className={`${styles.header}${scrolled ? ` ${styles.headerScrolled}` : ""}`}>
			<div className={styles.headerInner}>
				<Link href="/#top" className={styles.logo} onClick={handleNavClick}>
					<Image
						src="/media/green-carpentry-logo.png"
						alt="Green Carpentry Logo"
						width={198}
						height={66}
						className={styles.logoImage}
						priority
					/>
				</Link>

				<div className={styles.headerRight}>
					<div className={styles.mobileHeaderActions}>
						<a href={PHONE_HREF} aria-label="Phone" className={styles.mobileHeaderIcon}>
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
								<path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</a>
						<a href={EMAIL_HREF} aria-label="Email" className={styles.mobileHeaderIcon}>
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
								<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
								<polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</a>
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
							{navItems.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									onClick={item.href === "/about" ? startClose : handleNavClick}
									className={`${styles.mobileNavLink}${isActiveLink(item.href) ? ` ${styles.mobileNavLinkActive}` : ""}`}
								>
									{item.label}
								</Link>
							))}
							<div className={styles.mobileSocials}>
								<SocialIcons />
							</div>
						</div>
					</details>
					<nav className={styles.nav} aria-label="Primary navigation">
						<div className={styles.navLinks}>
							{navItems.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									onClick={handleNavClick}
									className={`${styles.navLink}${isActiveLink(item.href) ? ` ${styles.navLinkActive}` : ""}`}
								>
									{item.label}
								</Link>
							))}
						</div>
						<div className={styles.navSocials}>
							<SocialIcons />
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
}
