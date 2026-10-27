import { Resend } from "resend";
import { NextResponse } from "next/server";

// Forms that post here. The homepage contact form requires a phone number;
// the loft conversions landing page asks for a postcode instead.
const LOFT_SOURCE = "loft-conversion";

export async function POST(req: Request) {
	const { name, phone, email, postcode, message, source } = await req.json();
	const toEmail = process.env.RESEND_TO_EMAIL;
	const fromEmail = process.env.RESEND_FROM_EMAIL;
	const isLoft = source === LOFT_SOURCE;

	if (!name || !email || (isLoft ? !postcode : !phone)) {
		return NextResponse.json(
			{ error: "Missing required fields" },
			{ status: 400 },
		);
	}

	const apiKey = process.env.RESEND_API_KEY;
	if (!apiKey || !toEmail || !fromEmail) {
		console.error("Resend email environment variables are not configured");
		return NextResponse.json(
			{ error: "Email service is not configured" },
			{ status: 500 },
		);
	}

	const resend = new Resend(apiKey);
	const lines = [
		`Name: ${name}`,
		postcode && `Postcode: ${postcode}`,
		`Phone: ${phone || "Not given"}`,
		`Email: ${email}`,
	].filter(Boolean);

	const { error } = await resend.emails.send({
		from: `Green Carpentry <${fromEmail}>`,
		to: toEmail,
		replyTo: email,
		subject: isLoft
			? `Loft conversion enquiry from ${name}`
			: `New enquiry from ${name}`,
		text: `${lines.join("\n")}\n\nMessage:\n${message || "(none)"}`,
	});

	if (error) {
		return NextResponse.json(
			{ error: "Failed to send email" },
			{ status: 500 },
		);
	}

	return NextResponse.json({ success: true });
}
