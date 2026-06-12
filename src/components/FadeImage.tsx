"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import styles from "./FadeImage.module.css";

export default function FadeImage({
	alt,
	className = "",
	onLoad,
	...props
}: ImageProps) {
	const [loaded, setLoaded] = useState(false);

	return (
		<Image
			{...props}
			alt={alt}
			className={`${styles.image} ${loaded ? styles.loaded : ""} ${className}`}
			onLoad={(event) => {
				setLoaded(true);
				onLoad?.(event);
			}}
		/>
	);
}
