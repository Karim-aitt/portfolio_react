
import { Pills } from "./section_1_pills";

export const Section_1 = () => {
	return (
		<section className="container" id="home">
			<p className="text-lg mb-3 dark:text-slate-300">
				I'm a spanish junior developer currently focused on front-end
				development and indie games with {" "}
				<a
					className="text-indigo-600 dark:text-indigo-300 hover:underline"
					href="https://unity.com/"
					target="_blank"
				>
					Unity
				</a>
				. I also enjoy game design.
			</p>
			<p className="text-lg mb-2 dark:text-slate-300">
				This simple website has been created to showcase some of my work and to
				make myself known to the world. It has been built using{" "}
				<a
					className="text-indigo-600 dark:text-indigo-300 hover:underline"
					href="https://vitejs.dev/"
					target="_blank"
				>
					Vite.js{" "}
				</a>
				and{" "}
				<a
					className="text-indigo-600 dark:text-indigo-300 hover:underline"
					href="https://tailwindcss.com/"
					target="_blank"
				>
					Tailwind CSS
				</a>
				.
			</p>
			<p className="text-lg mb-2 mt-4 dark:text-slate-300">
				I have experience with:
			</p>
			<Pills />
			
			<p className="mt-4 text-lg dark:text-slate-300">Visit my GitHub profile {" "}
				<a
					className="text-indigo-600 dark:text-indigo-300 hover:underline" 
					href="https://github.com/Karim-aitt" 
					target="_blank">
					here
				</a>
				.
			</p>
		</section>
	);
};
