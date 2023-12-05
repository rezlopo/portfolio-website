"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
	const { ref } = useSectionInView("About", 0.75);

	return (
		<motion.section
			ref={ref}
			id="about"
			className="mb-28 max-w-[45rem] text-center sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
		>
			<SectionHeading>About Me</SectionHeading>
			<p className="mb-3">
				After graduating from the{" "}
				<span className="font-medium">
					Faculty of Electrical Mechanical Engineering and Naval Architecture
					(FESB)
				</span>
				, I worked as an{" "}
				<span className="font-medium">electrical engineer</span>, where I worked
				in various fields. There I learned a lot about{" "}
				<span className="font-medium">
					communication, reading documentation, teamwork and how to think like
					an engineer.
				</span>
			</p>
			<p className="mb-3">
				After a few years, I decided to change my career and work as a
				programmer. I got a job as a{" "}
				<span className="font-medium">Front-End developer</span> and I am
				capable of doing <span className="font-medium">UI/UX design</span>. For
				now, I have a couple of projects behind me that I worked on at work or
				on github.
			</p>
			<p className="mb-3">
				<span className="italic">My favorite part of programming</span> is the
				problem-solving aspect. I <span className="underline">love</span> the
				feeling of finally figuring out a solution to a problem. I am currently
				looking for new opportunities where I can grow as a developer and become
				a full-stack. My core stack is{" "}
				<span className="font-medium">React, Vanilla JS, CSS3, HTML5 </span> and
				I'm learning <span className="font-medium">Next.js</span> on which I
				built this portfolio. I speak{" "}
				<span className="font-medium">Croatian, Czech and English</span>
			</p>

			<p>
				<span className="italic">When I'm not coding</span>, I play pool and
				table football. I also like to research and do home automation.
			</p>
		</motion.section>
	);
}
