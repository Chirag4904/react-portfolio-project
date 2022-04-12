import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import OurWork from "../pages/OurWork";
import MovieDetail from "../pages/MovieDetail";

import { AnimatePresence } from "framer-motion";
function AnimatedRoutes() {
	const location = useLocation();
	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				{" "}
				{/*react router method changed in v6*/}
				<Route exact path="/" element={<AboutUs />} />
				<Route path="/work" element={<OurWork />} />
				<Route path="/work/:id" element={<MovieDetail />} />{" "}
				{/*:id is used so that anything after work/ then moviedetail will open */}
				<Route path="/contact" element={<ContactUs />} />
			</Routes>
		</AnimatePresence>
	);
}

export default AnimatedRoutes;
