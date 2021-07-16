import React from "react";
import "./styles/Main.css";
import confLogo from "../images/platziconf-logo.svg";
import astronauts from "../images/astronauts.svg";
import { Link } from "react-router-dom";

class Main extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="Main__hero">
					<div className="Main__container">
						<img
							className="Main_conf-logo"
							src={confLogo}
							alt="Conf logo"
						/>
						<p>
							<strong>PRINT YOUR BADGES</strong> <br /> The
							easiest way to manage your conference
						</p>
						<Link to="/badges" className="btn btn-primary">
							<strong>Start now</strong>
						</Link>
					</div>
					<img
						className="Main_conf-img"
						src={astronauts}
						alt="astronauts"
					/>
				</div>
			</React.Fragment>
		);
	}
}

export default Main;
