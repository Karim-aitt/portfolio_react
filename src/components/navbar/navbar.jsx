import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

export const Navbar = ({setDark}) => {

	let isDark = setDark;

	const handleClick = () => {
		
		console.log({setDark});
		if(isDark == true){
			setDark(false)
		} else{
			setDark(true)
		}
	}


	return (
		<div
			className="
                gap-x-3 
                sm:gap-x-5 
                gap-y-4 
                mb-10 
                sm:mb-14 
                flex 
                flex-row 
                flex-wrap"
		>
			<Link
				className="
                flex
                bg-slate-300
                hover:bg-indigo-300 
                font-medium
                hover:font-bold
                py-2 
                px-4 
                rounded"
				to="/"
			>
				<svg
					className="w-6 mr-1"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.5"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
					></path>
				</svg>
				Portfolio
			</Link>

			<Link
				className="
                flex
                bg-slate-300
                hover:bg-indigo-300 
                font-medium 
                hover:font-bold
                py-2 
                px-4 
                rounded"
				to="/about"
			>
				<svg
					className="w-6 mr-1"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.5"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
					></path>
				</svg>
				About
			</Link>

			<Link
				className="
                flex
                bg-slate-300 
                hover:bg-indigo-300 
                font-medium
                hover:font-bold
                py-2 
                px-4 
                rounded"
				to="/contact"
			>
				<svg
					className="w-6 mr-1"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.5"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
					></path>
				</svg>
				Contact Me!
			</Link>

			{/* <button
				className="
                flex
                bg-slate-300
                hover:bg-indigo-300 
                font-medium
                hover:font-bold
                py-2 
                px-4 
                rounded"
				onClick={handleClick}
			>
				<svg
                    className="w-6 mr-1"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.5"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
					></path>
				</svg>
				Toggle Dark Mode
			</button> */}
		</div>
	);
};
