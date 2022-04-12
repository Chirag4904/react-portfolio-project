import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
const ContactUs = () => {
	return (
		<motion.div
			variants={pageAnimation}
			exit="exit"
			initial="hidden"
			animate="show"
		>
			<h1>contact</h1>
		</motion.div>
	);
};
export default ContactUs;
