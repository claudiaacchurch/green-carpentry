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
		if (event.defaultPrevented || !href.startsWith("#")) return;

		const target = document.getElementById(href.slice(1));
		if (!target) return;

		event.preventDefault();
		smoothScrollToElement(target);
	}

	return <a {...props} href={href} onClick={handleClick} />;
}
