"use client";

import { projectsData } from "@/lib/data";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
	title,
	description,
	tags,
	imageUrl,
}: ProjectProps) {
	const ref = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.33 1"],
	});
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

	return (
		<motion.section
			ref={ref}
			style={{
				scale: scaleProgress,
				opacity: scrollYProgress,
			}}
			className="bg-gray-100 group max-w-[42rem] rounded-lg hover:bg-gray-200 transition border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] even:pl-8 mb-3 sm:mb-8 last:mb-0"
		>
			<div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
				<h3 className="text-2xl font-semibold">{title}</h3>
				<p className="mt-2 leading-relaxed text-gray-700">{description}</p>
				<ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
					{tags.map((tag, index) => (
						<li
							className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
							key={index}
						>
							{tag}
						</li>
					))}
				</ul>
			</div>
			<Image
				className="absolute top-8 sm:h-[calc(100%-2rem)] object-cover -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:-right-[initial] group-even:-left-40 group-hover:-translate-x-3 transition group-hover:translate-y-3 group-hover:-rotate-3 group-even:group-hover:rotate-3 group-hover:scale-[1.04]"
				src={imageUrl}
				alt="Project on GitHub"
				quality={90}
			/>
		</motion.section>
	);
}
