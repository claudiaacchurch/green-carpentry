"use client";

interface Props {
	/** id of the horizontally scrolling row to move */
	targetId: string;
	className?: string;
	label?: string;
}

/**
 * Arrow button for a swipeable row: each tap scrolls along by one item, and
 * at the end it jumps back to the start so it's never a dead button.
 */
export default function ScrollRowButton({
	targetId,
	className = "",
	label = "Show more",
}: Props) {
	function handleClick() {
		const row = document.getElementById(targetId);
		if (!row) return;

		const reduceMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		const behavior: ScrollBehavior = reduceMotion ? "auto" : "smooth";
		const atEnd = row.scrollLeft + row.clientWidth >= row.scrollWidth - 4;

		if (atEnd) {
			row.scrollTo({ left: 0, behavior });
			return;
		}

		const first = row.firstElementChild as HTMLElement | null;
		const gap = parseFloat(getComputedStyle(row).columnGap) || 0;
		const step = first ? first.offsetWidth + gap : row.clientWidth * 0.8;
		row.scrollBy({ left: step, behavior });
	}

	return (
		<button
			type="button"
			className={className}
			onClick={handleClick}
			aria-label={label}
			aria-controls={targetId}
		>
			<svg
				width="18"
				height="18"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				aria-hidden="true"
			>
				<path d="M5 12h14M13 6l6 6-6 6" />
			</svg>
		</button>
	);
}
