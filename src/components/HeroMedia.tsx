"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./HeroMedia.module.css";

interface HeroMediaProps {
	alt: string;
	poster: string;
	videoUrl?: string;
	imageClassName?: string;
	videoClassName?: string;
}

export default function HeroMedia({
	alt,
	poster,
	videoUrl,
	imageClassName = "",
	videoClassName = "",
}: HeroMediaProps) {
	const [videoReady, setVideoReady] = useState(false);
	const iframeRef = useRef<HTMLIFrameElement>(null);

	useEffect(() => {
		if (!videoUrl) return;

		const playerOrigin = new URL(videoUrl).origin;

		function send(command: "activate" | "play") {
			iframeRef.current?.contentWindow?.postMessage({ command }, playerOrigin);
		}

		function handlePlayerEvent(event: MessageEvent) {
			if (event.source !== iframeRef.current?.contentWindow) return;
			if (event.origin !== playerOrigin) return;
			if (event.data?.channel !== "bunnystream") return;

			if (
				event.data.event === "play" ||
				event.data.event === "playing" ||
				(event.data.event === "timeupdate" && event.data.status?.playing)
			) {
				setVideoReady(true);
			}
		}

		window.addEventListener("message", handlePlayerEvent);

		// Autoplay is requested in the embed URL; these retries only help browsers
		// that initialise the muted background player after the iframe loads.
		const startup = window.setInterval(() => {
			send("activate");
			send("play");
		}, 800);
		const stopStartup = window.setTimeout(
			() => window.clearInterval(startup),
			6400,
		);

		return () => {
			window.removeEventListener("message", handlePlayerEvent);
			window.clearInterval(startup);
			window.clearTimeout(stopStartup);
		};
	}, [videoUrl]);

	return (
		<>
			<Image
				src={poster}
				alt={alt}
				fill
				priority
				fetchPriority="high"
				quality={88}
				sizes="100vw"
				className={`${styles.poster} ${imageClassName}`}
			/>

			{videoUrl && (
				<>
					<iframe
						ref={iframeRef}
						src={videoUrl}
						title={`${alt} video`}
						className={`${styles.video} ${videoReady ? styles.videoReady : ""} ${videoClassName}`}
						allow="autoplay; fullscreen; picture-in-picture"
						loading="eager"
					/>
					<div
						className={`${styles.loader} ${videoReady ? styles.loaderHidden : ""}`}
						role="status"
						aria-live="polite"
					>
						<span className={styles.loaderLine} />
						<span className={styles.srOnly}>Loading video</span>
					</div>
				</>
			)}
		</>
	);
}
