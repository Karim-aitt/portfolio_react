import { Projects } from "../projects/projects";

export const Section_2 = () => {
	return (
		<div>
			<ul>
				<li className="mb-6">
					<a
						href="#p_spends"
						className="
                        rounded 
                        bg-slate-300 
                        px-5 
                        py-2 
                        hover:shadow-xl 
                        hover:bg-indigo-400 
                        hover:font-bold
                        "
					>
						Spend Control
					</a>
				</li>
				<li className="mb-6">
					<a
						href="#p_crypto"
						className="
                        rounded 
                        bg-slate-300 
                        px-5 
                        py-2 
                        hover:shadow-xl 
                        hover:bg-indigo-400 
                        hover:font-bold
                        "
					>
						Crypto Calculator
					</a>
				</li>
				<li className="mb-6">
					<a
						href="#p_crm"
						className="
                    rounded 
                    bg-slate-300 
                    px-5 
                    py-2 
                    hover:shadow-xl 
                    hover:bg-indigo-400 
                    hover:font-bold
                    "
					>
						Simple CRM
					</a>
				</li>
			</ul>
		</div>
	);
};
