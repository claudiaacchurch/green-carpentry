"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { smoothScrollToElement } from "@/lib/smoothScroll";

export default function SmoothAnchor({
	href,
	onClick,
	...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
	function handleClick(event: MouseEvent<HTMLAnchorElement>) {
		onClick?.(event);
		if (event.defaultPrevented || !href.includes("#")) return;

		const [pathPart, hash] = href.split("#");
		const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
		const targetPath = pathPart.replace(/\/$/, "") || currentPath;
		if (targetPath !== currentPath) return;

		const target = document.getElementById(hash);
		if (!target) return;

		event.preventDefault();
		smoothScrollToElement(target);
	}

	return <a {...props} href={href} onClick={handleClick} />;
}
