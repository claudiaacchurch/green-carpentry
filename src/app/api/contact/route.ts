import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
	const { name, phone, email, message } = await req.json();

	if (!name || !phone || !email) {
		return NextResponse.json(
			{ error: "Missing required fields" },
			{ status: 400 },
		);
	}

	const { error } = await resend.emails.send({
		from: "Green Carpentry <onboarding@resend.dev>",
		to: "claudiachurch00@gmail.com",
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
