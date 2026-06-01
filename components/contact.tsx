"use client";

import React, { useTransition } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
	const { ref } = useSectionInView("Contact");
	const [isPending, startTransition] = useTransition();

	return (
		<motion.section
			ref={ref}
			id="contact"
			className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			viewport={{ once: true }}
		>
			<SectionHeading>Contact Me</SectionHeading>

			<p className="text-gray-700 -mt-6 dark:text-white/80">
				Please contact me directly at{" "}
				<a
					className="underline font-semibold hover:no-underline"
					href="mailto:zdenekopolzer@gmail.com"
				>
					zdenekopolzer@gmail.com
				</a>{" "}
				or through this form.
			</p>

			<form
				className="mt-10 flex flex-col dark:text-black"
				onSubmit={(e) => {
					e.preventDefault();

					const formData = new FormData(e.currentTarget);

					startTransition(() => {
						void (async () => {
							const result = await sendEmail(formData);

							if (result?.error) {
								toast.error(result.error);
								return;
							}

							toast.success("Email sent successfully!");
							e.currentTarget.reset();
						})();
					});
				}}
			>
				<input
					className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
					type="email"
					required
					maxLength={500}
					placeholder="Your Email"
					name="senderEmail"
				/>

				<textarea
					className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
					required
					maxLength={5000}
					placeholder="Your Message"
					name="message"
				/>

				<SubmitBtn />
			</form>
		</motion.section>
	);
}