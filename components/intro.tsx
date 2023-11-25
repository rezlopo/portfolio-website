"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Intro() {
	return (
		<section>
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
		</section>
	);
}
