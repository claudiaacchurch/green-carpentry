let activeAnimation: number | null = null;

export function smoothScrollToElement(element: HTMLElement) {
	if (activeAnimation !== null) {
		window.cancelAnimationFrame(activeAnimation);
	}

	const headerHeight = document.querySelector("header")?.clientHeight ?? 0;
	const start = window.scrollY;
	const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
	const target = Math.min(
		Math.max(element.getBoundingClientRect().top + start - headerHeight, 0),
		maxScroll,
	);
	const distance = target - start;

	if (
		Math.abs(distance) < 2 ||
		window.matchMedia("(prefers-reduced-motion: reduce)").matches
	) {
		window.scrollTo({ top: target });
		return;
	}

	const duration = Math.min(1100, Math.max(650, Math.abs(distance) * 0.45));
	const startedAt = performance.now();

	const cancel = () => {
		if (activeAnimation !== null) {
			window.cancelAnimationFrame(activeAnimation);
			activeAnimation = null;
		}
		removeCancelListeners();
	};

	const removeCancelListeners = () => {
		window.removeEventListener("wheel", cancel);
		window.removeEventListener("touchstart", cancel);
		window.removeEventListener("keydown", cancel);
	};

	window.addEventListener("wheel", cancel, { passive: true });
	window.addEventListener("touchstart", cancel, { passive: true });
	window.addEventListener("keydown", cancel);

	const animate = (now: number) => {
		const progress = Math.min((now - startedAt) / duration, 1);
		const eased =
			progress < 0.5
				? 4 * progress * progress * progress
				: 1 - Math.pow(-2 * progress + 2, 3) / 2;

		window.scrollTo({ top: start + distance * eased });

		if (progress < 1) {
			activeAnimation = window.requestAnimationFrame(animate);
		} else {
			activeAnimation = null;
			removeCancelListeners();
		}
	};

	activeAnimation = window.requestAnimationFrame(animate);
}
