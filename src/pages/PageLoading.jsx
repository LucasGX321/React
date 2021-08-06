import React, { Component } from "react";

import "./styles/PageLoading.css";

export default class PageLoading extends Component {
	render() {
		return (
			<section className="PageLoading">
				<div className="lds-grid">
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
				</div>
			</section>
		);
	}
}
