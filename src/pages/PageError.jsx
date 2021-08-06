import React from "react";

import "./styles/PageError.css";
import errorImg from "../images/Error404.svg";

function PageError(props) {
	return (
		<section className="main-body justCenter">
			<img src={errorImg} alt="PEPE" />
			<h1>Error: {props.error}</h1>
		</section>
	);
}

export default PageError;
