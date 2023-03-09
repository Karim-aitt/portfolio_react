
import { Link } from "react-router-dom";


export const Main_Contact = () => {
	return (
		<>
			<h1 className="my-10 md:my-14 font-bold text-3xl md:text-4xl">
				Contact Me
			</h1>
			<h2 className="text-xl md:text-2xl font-bold">
				Are you interested in working with me?
			</h2>
			<p className="text-lg mt-3">
				Let's get in touch! Write me a message and tell me about your project!
			</p>
			<p className="text-lg mt-3">
				You can reach me by sending a private message on:
			</p>
			<div className="mt-5 flex flex-col gap-3 w-32">
				<Link
					className="
                flex
                justify-between
                bg-slate-300 
                hover:bg-indigo-300 
                font-bold
                py-2 
                px-4 
                rounded"
                to="https://www.linkedin.com/in/karimdev/"
                target="_blank"
				>
					LinkedIn
                    <img _ngcontent-mov-c9="" 
                    src="https://i.ibb.co/gR4KQ2s/linkedin.png" 
                    alt="linkedin" 
                    border="0" 
                    className="w-6 ml-2"></img>
				</Link>
				<Link
					className="
                flex
                justify-between
                bg-slate-300 
                hover:bg-indigo-300 
                font-bold
                py-2 
                px-4 
                rounded"
                to="https://github.com/Karim-aitt"
                target="_blank"
				>
					Github
                    <img _ngcontent-mov-c9="" 
                    src="https://i.ibb.co/QH5gNSh/github.png" 
                    alt="github" 
                    border="0" 
                    className="w-6 ml-2"></img>
				</Link>
				<Link
					className="
                flex
                justify-between
                bg-slate-300 
                hover:bg-indigo-300
                font-bold
                py-2 
                px-4 
                rounded"
                to="mailto:karim.gonzalez.ait@gmail.com"
                target="_blank"
				>
					Email
                    <img _ngcontent-mov-c9="" 
                    src="https://i.ibb.co/YjcqPf6/email.png" 
                    alt="email" 
                    border="0" 
                    className="w-6 ml-2"></img>
				</Link>
			</div>

            <h2 className="text-2xl font-bold mt-10">
				I can work on:
			</h2>
            <ul className="mt-3 list-disc list-inside">
                <li className="text-lg">Web Development</li>
                <li className="text-lg">Game Designer</li>
            </ul>
		</>
	);
};
