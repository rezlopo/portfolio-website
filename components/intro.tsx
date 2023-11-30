"use client";

import React from "react";
import { delay, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
	return (
		<section
			id="home"
			className=" mb-2 max-w-[50rem] text-center sm:mb-0 scroll-mt-36"
		>
			<div className="flex items-center justify-center">
				<div className="relative">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: "tweet",
							duration: 0.2,
						}}
					>
						<Image
							src={"/avatar.jpg"}
							alt="avatar"
							width={192}
							height={192}
							quality={95}
							priority={true}
							className="h-24 w-24 rounded-full shadow-xl border-[0.35rem] object-cover border-white"
						/>
					</motion.div>
					<motion.span
						className="text-4xl bottom-0 right-0 absolute"
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 125,
							delay: 0.1,
							duration: 0.7,
						}}
					>
						👋
					</motion.span>
				</div>
			</div>
			<motion.h1
				className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<span className="font-bold">Hello, I'm Zdenek Opolzer.</span> I'm a{" "}
				<span className="font-bold">Front-End Developer</span> with{" "}
				<span className="font-bold">2 years</span> of experience. I enjoy
				building <span className="italic">sites & apps</span>. My focus is{" "}
				<span className="underline">React (Next.js)</span>.
			</motion.h1>
			<motion.div
				className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4 text-lg font-medium"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.1,
				}}
			>
				<Link
					href="#contact"
					className="bg-gray-900 group text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
				>
					Contact me here
					<BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
				</Link>

				<a
					href="/CV.pdf"
					download
					className="bg-white cursor-pointer border border-black/10 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 group active:scale-105 transition"
				>
					Download CV
					<HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
				</a>

				<a
					href="https://www.linkedin.com/in/zdenek-opolzer-a31046135"
					target="_blank"
					className="bg-white cursor-pointer border-black/10 text-gray-700  p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 transition border active:scale-105"
				>
					<BsLinkedin />
				</a>
				<a
					href="https://github.com/rezlopo"
					target="_blank"
					className="bg-white cursor-pointer border-black/10 text-gray-700  p-4 flex items-center gap-2 text-[1.2rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 transition border active:scale-105"
				>
					<FaGithubSquare />
				</a>
			</motion.div>
		</section>
	);
}
