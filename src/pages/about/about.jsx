import { Navbar } from "../../components/navbar/navbar";

export const About = () => {
	return (
		<div>
			{/* <Navbar /> */}
			<h1 className="my-10 md:my-14 font-bold text-3xl md:text-4xl">
				About me
			</h1>
			<h2 className="text-xl md:text-2xl font-bold text-indigo-700">The Break</h2>
			<p className="text-lg mt-3">
				I am passionate about programming since I was little, I have always
				loved exploring my creativity through the creation of stories and text
				games, which led me to discover my passion for web and game development.
				<br />
				<br />
				Even though math was not my forte, I always persevered and found ways
				around those obstacles.
			</p>
			<p className="text-lg mt-3">
				In 2017, I decided to join the <span className="text-indigo-700">military</span>, convinced that it was my true
				calling. During my years on active duty, I demonstrated great commitment
				and dedication to my peers and superiors. I traveled to many places and
				learn many skills.
				<br />
				<br />
				But in the end, I realized that it wasn't what I really wanted to do. I
				was always thinking about programming and game designs, but when I had
				free time I was very tired to encorage myself to learn anything.
			</p>

			<h2 className="text-xl md:text-2xl font-bold mt-4 text-indigo-700">Transitioning into tech</h2>

			<p className="text-lg mt-3">
				In the year 2021, I made a difficult decision: to leave a stable job to
				pursue my true passion, programming and web development. Even though I
				was afraid because of my math difficulties, I decided to face that fear
				and embark on a <span className="text-indigo-700">new adventure.</span>
			</p>
			<p className="text-lg mt-3">
				In addition to my self-taught programming training, I decided to take a
				step forward in my career and completed a <span className="text-indigo-700">full stack web development
				bootcamp.</span>
                <br /><br />
                During this intensive program, I was able to learn in a
				systematic and structured way, gaining solid knowledge in web
				programming.
			</p>
			<p className="text-lg mt-3">
				But not content with this, I decided to also do a <span className="text-indigo-700">higher degree in web
				development which I am currently studying.</span>
			</p>
			<h2 className="text-xl md:text-2xl font-bold mt-4 text-indigo-700">Now</h2>
			<p className="text-lg mt-3">
				After a lot of dedication and effort, I am proud to say that I now have
				the ability to build web apps from the logical to the visual side.
                <br /><br />
                 I am
				a perfectionist and I love to have a good UX/UI design in my projects.
                <br /><br />
				I'm always looking for new ways to improve and keep learning, and I find
				web development to be an ever-evolving field that offers lots of
				opportunities to keep growing and learning new skills.
			</p>
		</div>
	);
};
