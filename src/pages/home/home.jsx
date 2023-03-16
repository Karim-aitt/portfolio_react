import React, { useState } from "react";

import { Navbar } from "../../components/navbar/navbar";
import { Projects } from "../../components/projects/projects";
import { Section_1 } from "../../components/section_1/section_1";
import { Section_2 } from "../../components/section_2/section_2";

import "./home.css";

export const Home = () => {
	return (
		<div>
			{/* <Navbar /> */}
			<h1 className="my-10 md:my-14 font-bold text-4xl md:text-5xl dark:text-slate-200">
				Hi, I'm Karim
			</h1>
			<Section_1 />
			<h2 className="my-10 md:my-14 font-bold text-3xl md:text-4xl dark:text-slate-200">
				Projects
			</h2>
			<Section_2 />
			<div
				id="separator"
				className="border-slate-300 border-solid border-b-[2px] mx-auto my-10 w-90 rounded dark:border-slate-500"
			/>
			<Projects />
		</div>
	);
};
