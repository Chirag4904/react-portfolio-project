import React from "react";
import GlobalStyle from "./components/GlobalStyle";

import Nav from "./components/Nav";
import ScrollTop from "./components/ScrollTop";
//Router (to handle the routing)
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
function App() {
	// const location = useLocation();
	// console.log(location);
	return (
		<div className="App">
			<GlobalStyle />

			{/* <AnimatePresence exitBeforeEnter> */}
			<Router>
				<ScrollTop />
				<Nav />
				<AnimatedRoutes />
			</Router>
			{/* </AnimatePresence> */}
		</div>
	);
}

export default App;
