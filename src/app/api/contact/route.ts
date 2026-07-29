import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const resend = new Resend(process.env.RESEND_API_KEY);
	const { name, phone, email, message } = await req.json();
	const toEmail = process.env.RESEND_TO_EMAIL;
	const fromEmail = process.env.RESEND_FROM_EMAIL;

	if (!name || !phone || !email) {
		return NextResponse.json(
			{ error: "Missing required fields" },
			{ status: 400 },
		);
	}

	if (!toEmail || !fromEmail) {
		console.error("Resend email environment variables are not configured");
		return NextResponse.json(
			{ error: "Email service is not configured" },
			{ status: 500 },
		);
	}

	const { error } = await resend.emails.send({
		from: `Green Carpentry <${fromEmail}>`,
		to: toEmail,
		replyTo: email,
		subject: `New enquiry from ${name}`,
		text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`,
	});

	if (error) {
		return NextResponse.json(
			{ error: "Failed to send email" },
			{ status: 500 },
		);
	}

	return NextResponse.json({ success: true });
}
