import React from "react";

export default function Footer() {
	const today = new Date();
	const year = today.getFullYear();
	return (
		<footer className="mb-10 px-4 text-center text-gray-500">
			<small className="mb-2 block text-xs">
				&copy; {year} Zdenek Opolzer.All rights reserved.
				<p className="text-xs">
					<span className="font-semibold">About this website:</span> built with
					React & Next.js (App Router & Server Actions), TypeScript, Tailwind
					CSS, Framer Motion, React Email & Resend, Vercel hosting.
				</p>
			</small>
		</footer>
	);
}
