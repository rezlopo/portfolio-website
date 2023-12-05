import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import portfolioWebsite from "@/public/PortfolioWebsite.png";
import toDoAppImg from "@/public/ToDoApp.png";
import weatherAppImg from "@/public/WeatherApp.png";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const experiencesData = [
	{
		title: "Front-End developer - Infranet razvoj d.o.o.",
		location: "Zagreb, HR",
		description:
			"As a front-end developer, I coded, designed and redesigned sites & apps using HTML5, CSS3, JS, React and Figma. I coded the components using TypeScript and React. I used Git and Azure DevOps daily for sprints, tasks, code reviews, PR.",
		icon: React.createElement(CgWorkAlt),
		date: "2021 - Present",
	},
	{
		title: "Service Engineer - Siemens Healthcare d.o.o",
		location: "Zagreb, HR",
		description:
			"Troubleshooting, maintenence, start up, commissioning for healtcare systems (XP,AP,MR,CT) .Installation, troubleshooting and administering Windows server 2016. Networking for healthcare product (XP,AP,MR,CT)",
		icon: React.createElement(CgWorkAlt),
		date: "2018 - 2021",
	},
	{
		title: "Commissioning support engineer - Areva NP",
		location: "Olkiluoto, FI",
		description:
			"Continuity test checklist, testing hv and lv distribution system, testing 3-phase electrical motors in nuclear power plant.",
		icon: React.createElement(CgWorkAlt),
		date: "2017 - 2018",
	},

	{
		title: "Electrician - Zakladani staveb s.r.o",
		location: "Zagreb, HR",
		description:
			"Maintenance and servicing of three-phase electric pumps. Develop and connecting the distribution control board desing in Eplan.",
		icon: React.createElement(CgWorkAlt),
		date: "2015 - 2017",
	},

	{
		title: "Mag. ing. el. (M.Sc.El - automation and systems)",
		location: "Split, HR",
		description:
			"Graduated from Faculty of Electrical Mechanical Engineering and Naval Architecture (FESB), Split",
		icon: React.createElement(LuGraduationCap),
		date: "2015",
	},
] as const;

export const projectsData = [
	{
		title: "Portfolio",
		description:
			"Portfolio page made using HTML5, CSS, JS. It has a couple of SVG animations and it is responsive",
		tags: [
			"HTML5",
			"CSS3",
			"SASS",
			"Animations",
			"Responsive Design",
			"Accessibility",
			"Flexbox",
			"CSS Grid",
		],
		imageUrl: portfolioWebsite,
	},
	{
		title: "ToDo List",
		description:
			"A simple and Todo List web app built using CSS and JavaScript. The app allows users to create, manage, and save todos",
		tags: ["JavaScript", "HTML5", "CSS", "Animations", "Local storage"],
		imageUrl: toDoAppImg,
	},
	{
		title: "Weather App",
		description:
			"A Weather App build with HTML, CSS, and JavaScript where users can enter any city name to get weather forecast using JavaScript API",
		tags: ["JavaScript", "HTML5", "CSS", "API"],
		imageUrl: weatherAppImg,
	},
] as const;

export const skillsData = [
	"HTML5",
	"CSS3",
	"JavaScript",
	"TypeScript",
	"React",
	"Git",
	"Azure DevOps",
	"Tailwind",
	"Bootstrap",
	"Shopify",
	"Liquid",
	"Figma",
	"Responsive Design",
	"Web Animations",
	"Flexbox",
	"CSS Grid",
	"Framer Motion",
] as const;
