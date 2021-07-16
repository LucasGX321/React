import React from "react";
import "../styles/badgeStyle.css"
import logo from "../images/badge-header.svg";

class Badge extends React.Component {
	render() {
		const mail = "https://www.twitter.com/@"+this.props.twitter;
		return (
			<section className="Badge justCenter">
				<header className="Badge__header justCenter">
					<img className="Badge__header_img" src={logo} alt="logoBanner"></img>
				</header>
				<section className="Badge__body">
					<div className="Badge__body_sectionName justCenter">
						<img src={this.props.avatarUrl} alt="Avatar" />
						<h1> {this.props.firstName} <br /> {this.props.lastName}</h1>
					</div>
					<div className="Badge__body_description justCenter">
						<p>{this.props.description}</p>
						<a href={mail}>@{this.props.twitter}</a>
					</div>
				</section>
				<footer className="Badge__footer">
					PlatziConf
				</footer>
			</section>
		);
	}
}

export default Badge;