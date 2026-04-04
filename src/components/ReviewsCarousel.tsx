"use client";

import { useState, useEffect } from "react";
import { reviews } from "@/lib/reviews";
import styles from "@/app/page.module.css";

function Stars({ rating }: { rating: number }) {
	return (
		<div className={styles.reviewStars}>
			{Array.from({ length: 5 }).map((_, i) => (
				<svg
					key={i}
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill={i < rating ? "#6bbd15" : "none"}
					stroke={i < rating ? "#6bbd15" : "rgba(255,255,255,0.2)"}
					strokeWidth="1.5"
					aria-hidden="true"
				>
					<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
				</svg>
			))}
		</div>
	);
}


export default function ReviewsCarousel() {
	const [index, setIndex] = useState(0);
	const [visible, setVisible] = useState(3);

	useEffect(() => {
		function update() {
			if (window.innerWidth < 720) setVisible(2);
			else if (window.innerWidth < 1100) setVisible(2);
			else setVisible(3);
		}
		update();
		window.addEventListener("resize", update);
		return () => window.removeEventListener("resize", update);
	}, []);

	const total = reviews.length;
	const maxIndex = total - visible;

	function prev() {
		setIndex((i) => Math.max(i - 1, 0));
	}

	function next() {
		setIndex((i) => Math.min(i + 1, maxIndex));
	}

	const visibleReviews = reviews.slice(index, index + visible);

	return (
		<div className={styles.reviewsCarousel}>
			<div className={styles.reviewsTrack}>
				{visibleReviews.map((review, i) => (
					<article key={index + i} className={styles.reviewCard}>
						<Stars rating={review.rating} />
						<p className={styles.reviewText}>{review.text}</p>
						<div className={styles.reviewMeta}>
							<span className={styles.reviewName}>{review.name}</span>
							<span className={styles.reviewDate}>{review.date}</span>
						</div>
						<div className={styles.reviewSource}>
							<svg width="14" height="14" viewBox="0 0 24 24" aria-label="Google" fill="none">
								<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
								<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
								<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
								<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
							</svg>
							<span>Google Review</span>
						</div>
					</article>
				))}
			</div>

			<div className={styles.reviewsControls}>
				<button
					className={styles.reviewsBtn}
					onClick={prev}
					disabled={index === 0}
					aria-label="Previous reviews"
				>
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<path d="M15 18l-6-6 6-6" />
					</svg>
				</button>
				<span className={styles.reviewsCount}>{index + 1}–{Math.min(index + visible, total)} of {total}</span>
				<button
					className={styles.reviewsBtn}
					onClick={next}
					disabled={index >= maxIndex}
					aria-label="Next reviews"
				>
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<path d="M9 18l6-6-6-6" />
					</svg>
				</button>
			</div>
		</div>
	);
}
