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

		function send(command: "activate" | "play") {
			iframeRef.current?.contentWindow?.postMessage({ command }, "*");
		}

		function handlePlayerEvent(event: MessageEvent) {
			if (event.source !== iframeRef.current?.contentWindow) return;
			if (event.data?.channel !== "bunnystream") return;

			if (
				event.data.event === "play" ||
				(event.data.event === "timeupdate" && event.data.status?.playing)
			) {
				setVideoReady(true);
			}
		}

		window.addEventListener("message", handlePlayerEvent);

		const startup = window.setInterval(() => {
			send("activate");
			send("play");
		}, 500);
		const stopStartup = window.setTimeout(
			() => window.clearInterval(startup),
			10000,
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
						onLoad={() => setVideoReady(true)}
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
