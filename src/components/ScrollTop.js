import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollTop() {
	const location = useLocation();
	let pathname = location.pathname;
	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
		});
	}, [pathname]);
	return null;
}

export default ScrollTop;
