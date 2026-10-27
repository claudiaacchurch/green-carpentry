"use client";

import { useState } from "react";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";
import styles from "@/app/page.module.css";

type Status = "idle" | "sending" | "success" | "error";

/**
 * Enquiry form for the loft conversions landing page. Posts to the shared
 * contact endpoint with source "loft-conversion" (postcode required instead
 * of phone). Entered details are kept if sending fails.
 */
export default function LoftEnquiryForm() {
	const [status, setStatus] = useState<Status>("idle");

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setStatus("sending");

		const form = e.currentTarget;
		const field = (name: string) =>
			(form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement)
				.value;

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					source: "loft-conversion",
					name: field("name"),
					postcode: field("postcode"),
					email: field("email"),
					phone: field("phone"),
					message: field("message"),
				}),
			});
			setStatus(res.ok ? "success" : "error");
			if (res.ok) form.reset();
		} catch {
			setStatus("error");
		}
	}

	if (status === "success") {
		return (
			<div className={styles.contactFormBox} role="status">
				<h3 className={styles.contactFormTitle}>Thank you for your enquiry</h3>
				<p className={styles.formSuccessText}>
					Your loft conversion enquiry has been sent to Green Carpentry. If you
					would like to speak to us, call <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>{" "}
					during our office hours: Monday–Friday, 8am–4pm.
				</p>
			</div>
		);
	}

	return (
		<div className={styles.contactFormBox}>
			<h3 className={styles.contactFormTitle}>Tell us about your loft conversion</h3>
			<p className={styles.formIntro}>
				Share a few details about your home and the space you would like to
				create.
			</p>
			<form className={styles.contactFormFields} onSubmit={handleSubmit}>
				<div className={styles.formGrid}>
					<div>
						<label htmlFor="loft-name">Name *</label>
						<input id="loft-name" name="name" type="text" autoComplete="name" required />
					</div>
					<div>
						<label htmlFor="loft-postcode">Postcode *</label>
						<input
							id="loft-postcode"
							name="postcode"
							type="text"
							autoComplete="postal-code"
							required
						/>
					</div>
				</div>
				<div className={styles.formGrid}>
					<div>
						<label htmlFor="loft-email">Email address *</label>
						<input id="loft-email" name="email" type="email" autoComplete="email" required />
					</div>
					<div>
						<label htmlFor="loft-phone">Phone number</label>
						<input id="loft-phone" name="phone" type="tel" autoComplete="tel" />
					</div>
				</div>
				<div>
					<label htmlFor="loft-message">What would you like to do with your loft?</label>
					<textarea
						id="loft-message"
						name="message"
						rows={4}
						placeholder="For example, an extra bedroom with storage. Let us know if you already have drawings or a preferred start date."
					/>
				</div>
				<button type="submit" className={styles.primaryBtn} disabled={status === "sending"}>
					{status === "sending" ? "Sending…" : "Request My Free Quote"}
				</button>
				{status === "error" && (
					<p className={`${styles.formStatus} ${styles.formStatusError}`} role="alert">
						Your enquiry could not be sent. Please try again, or call Green
						Carpentry on <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>.
					</p>
				)}
			</form>
		</div>
	);
}
