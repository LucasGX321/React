import React from "react";
import Navbar from "./Navbar.jsx";

function Layout(props) {
	return (
		<React.Fragment>
			<Navbar />
			{props.children}
		</React.Fragment>
	);
}

export default Layout;
