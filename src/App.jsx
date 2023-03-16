import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { Home } from "./pages/home/home";
import { Contact } from "./pages/contact/contact";
import { About } from "./pages/about/about";
import { Footer } from "./components/footer/footer";
import { Navbar } from "./components/navbar/navbar";

import "./App.css";

function App() {
	const [theme, setTheme] = useState("light")

	useEffect(() => {
		if (localStorage.theme === 'dark') {
			document.documentElement.classList.add('dark')
			setTheme("dark")
		  } else {
			document.documentElement.classList.remove('dark')
			setTheme("light")
		  }
	}, [])

	useEffect(() => {
		if(theme === "dark"){
			document.documentElement.classList.add("dark");
			localStorage.setItem('theme', 'dark')
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme])

	const handleThemeSwitch = () => {
		if(theme === "dark"){
			setTheme("light")
			localStorage.removeItem("theme")
		} else {
			setTheme("dark")
			localStorage.setItem("theme", "dark")
		}
		
	}

	

	// useEffect(() => {
	// 	let isDark = localStorage.getItem("dark");

	// 	if (isDark == true || isDark == "true") {
	// 		setIsDarkMode(true);
	// 		localStorage.setItem("dark", "true");
	// 	} else {
	// 		setIsDarkMode(false);
	// 		localStorage.setItem("dark", "false");
	// 	}
	// }, []);

	// const handleDark = () => {
	// 	if (isDarkMode === true) {
	// 		// setIsDarkMode(false);
	// 		document.documentElement.classList.add('dark');
	// 		// localStorage.setItem("dark", "false");
	// 	} else {
	// 		// setIsDarkMode(true);
	// 		document.documentElement.classList.remove('dark');
	// 		// localStorage.setItem("dark", "true");
	// 	}
	// };

	return (
		<BrowserRouter>
			<div className="flex flex-col gap-10">
				<svg
					className="my-3"
					id="nube"
					fill="white"
					stroke="white"
					strokeWidth="1.5"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
					></path>
				</svg>
				<svg
					className="my-3"
					id="nube_cuatro"
					fill="white"
					stroke="white"
					strokeWidth="1.5"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
					></path>
				</svg>
				<svg
					className="mt-2"
					id="nube_dos"
					fill="white"
					stroke="white"
					strokeWidth="1.5"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
					></path>
				</svg>
				<svg
					className="mt-3"
					id="nube_tres"
					fill="white"
					stroke="white"
					strokeWidth="1.5"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
					></path>
				</svg>
				<svg
					className="bottom-0 hidden"
					id="nube_cinco"
					fill="red"
					stroke="white"
					strokeWidth="1.5"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
					></path>
				</svg>
			</div>

			<div
				className="max-w-[730px] pt-14 pb-10 px-5 mb-10 mt-5 mx-7 md:mx-auto div_shadow border-2 rounded
				 bg-white border-black
				 dark:bg-slate-700 
			">
				<Navbar toggleDark={handleThemeSwitch} />
				<Routes>
					<Route exact path="/" element={<Home />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
				</Routes>
			</div>
			<Footer className="flex content-end my-5" />
		</BrowserRouter>
	);
}

export default App;
