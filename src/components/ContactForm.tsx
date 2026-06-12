"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <div className={styles.contactFormBox}>
      <h3 className={styles.contactFormTitle}>Send us a message</h3>
      <form className={styles.contactFormFields} onSubmit={handleSubmit}>
        <div className={styles.formGrid}>
          <div>
            <label htmlFor="name">Name *</label>
            <input id="name" name="name" type="text" required />
          </div>
          <div>
            <label htmlFor="phone">Telephone *</label>
            <input id="phone" name="phone" type="tel" required />
          </div>
        </div>
        <div>
          <label htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} />
        </div>
        <button type="submit" className={styles.primaryBtn} disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send Enquiry"}
        </button>
        {status === "success" && (
          <p style={{ color: "var(--accent-warm)", marginTop: "8px" }}>
	            Message sent! We&apos;ll be in touch soon.
          </p>
        )}
        {status === "error" && (
          <p style={{ color: "#e55", marginTop: "8px" }}>
            Something went wrong. Please try calling us instead.
          </p>
        )}
      </form>
    </div>
  );
}
