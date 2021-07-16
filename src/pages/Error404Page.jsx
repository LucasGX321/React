import React from "react";

import "./styles/Error404Page.css";
import errorImg from "../images/Error404.svg";

class Error404Page extends React.Component {
	render() {
		return (
			<section className="main-body justCenter">
				<img src={errorImg} alt="PEPE" />
				<span>Error 404: Page Not found</span>
			</section>
		);
	}
}

export default Error404Page;
