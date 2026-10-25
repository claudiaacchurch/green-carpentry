"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./HeroMedia.module.css";

interface HeroMediaProps {
	alt: string;
	poster: string;
	/** Bunny player embed URL (iframe) */
	videoUrl?: string;
	/** Direct video file, played in a plain <video> tag with no player UI */
	videoSrc?: string;
	imageClassName?: string;
	videoClassName?: string;
}

// Initial bandwidth guess (bits/s) for hls.js: enough to start on 720p
const START_BANDWIDTH_ESTIMATE = 6_000_000;

export default function HeroMedia({
	alt,
	poster,
	videoUrl,
	videoSrc,
	imageClassName = "",
	videoClassName = "",
}: HeroMediaProps) {
	const [videoReady, setVideoReady] = useState(false);
	const iframeRef = useRef<HTMLIFrameElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);

	// Native <video>: attach the source (HLS streams need hls.js outside
	// Safari) and reveal it once it is actually playing
	useEffect(() => {
		const video = videoRef.current;
		if (!video || !videoSrc) return;

		let cancelled = false;
		let destroyHls: (() => void) | undefined;
		const markReady = () => setVideoReady(true);
		video.addEventListener("playing", markReady);

		const start = () => {
			if (!cancelled) video.play().catch(() => {});
		};

		const playNatively = () => {
			video.src = videoSrc;
			start();
		};

		if (!videoSrc.includes(".m3u8")) {
			playNatively(); // plain MP4
		} else {
			// Prefer hls.js everywhere it works (incl. iOS 17.1+): Safari's built-in
			// HLS always starts on the first rendition in Bunny's playlist (360p),
			// which looks blurry. hls.js lets us start sharp.
			import("hls.js").then(({ default: Hls }) => {
				if (cancelled) return;
				if (!Hls.isSupported()) {
					if (video.canPlayType("application/vnd.apple.mpegurl")) playNatively();
					return;
				}
				const hls = new Hls({
					// Show the quality that suits the displayed size…
					capLevelToPlayerSize: true,
					// …and assume a decent connection to begin with, so it opens
					// at ~720p instead of 240/360p, then adapts from there
					abrEwmaDefaultEstimate: START_BANDWIDTH_ESTIMATE,
				});
				hls.loadSource(videoSrc);
				hls.attachMedia(video);
				destroyHls = () => hls.destroy();
				start();
			});
		}

		return () => {
			cancelled = true;
			video.removeEventListener("playing", markReady);
			destroyHls?.();
		};
	}, [videoSrc]);

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
				className={`${styles.poster}${videoReady ? ` ${styles.posterHidden}` : ""} ${imageClassName}`}
			/>

			{videoSrc && (
				<>
					<video
						ref={videoRef}
						className={`${styles.video} ${videoReady ? styles.videoReady : ""} ${videoClassName}`}
						autoPlay
						muted
						loop
						playsInline
						preload="auto"
						disablePictureInPicture
						aria-hidden="true"
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
