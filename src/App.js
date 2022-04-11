import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";

//Router (to handle the routing)
import { Route, Routes } from "react-router-dom";
function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Nav />
			<Routes>
				{" "}
				{/*react router method changed in v6*/}
				<Route exact path="/" element={<AboutUs />} />
				<Route path="/work" element={<OurWork />} />
				<Route path="/work/:id" element={<MovieDetail />} />{" "}
				{/*:id is used so that anything after work/ then moviedetail will open */}
				<Route path="/contact" element={<ContactUs />} />
			</Routes>
		</div>
	);
}

export default App;
