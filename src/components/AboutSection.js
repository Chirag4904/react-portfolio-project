import React from "react";
import home1 from "../img/home1.png";
//Framer motion
import { motion } from "framer-motion";
import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {
	// const titleAnim = {
	// 	hidden: { opacity: 0 },
	// 	show: { opacity: [1, 0, 1], transition: { duration: 2 } },
	// };

	return (
		<About>
			<Description>
				<motion.div className="title">
					<Hide>
						<motion.h2>We work to make</motion.h2>
					</Hide>
					<Hide>
						<motion.h2>
							your <span>dreams</span> come
						</motion.h2>
					</Hide>
					<Hide>
						<h2>true.</h2>
					</Hide>
				</motion.div>
				<p>
					Contact us for any photography or videography ideas that you have. We
					have professionals with amazing skills.
				</p>
				<button>Contact Us</button>
			</Description>
			<Image>
				<img src={home1} alt="guy with cam" />
			</Image>
		</About>
	);
};

export default AboutSection;
