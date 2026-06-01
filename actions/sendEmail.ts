"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

if (!process.env.RESEND_API_KEY) {
	throw new Error("Missing RESEND_API_KEY");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
	const message = String(formData.get("message") || "");
	const senderEmail = String(formData.get("senderEmail") || "");

	if (!validateString(senderEmail, 500)) {
		return { error: "Invalid sender email" };
	}

	if (!validateString(message, 5000)) {
		return { error: "Invalid message" };
	}

	try {
		const data = await resend.emails.send({
			from: "Portfolio Contact <onboarding@resend.dev>",
			to: "zdenekopolzer@gmail.com",
			subject: "New message from portfolio",
			replyTo: senderEmail,
			text: message,
			react: React.createElement(ContactFormEmail, {
				message,
				senderEmail,
			}),
		});

		return { data };
	} catch (error: unknown) {
		return { error: getErrorMessage(error) };
	}
};