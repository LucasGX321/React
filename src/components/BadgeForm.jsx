import React from "react";
import { Link } from "react-router-dom";

class BadgeForm extends React.Component {
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	handleClick = (e) => {
		console.log(`The button: ${e.target.name}, was clicked`);
	};

	render() {
		return (
			<section className="BadgeForm">
				<h1 className="justCenter">New attendant</h1>
				<form onSubmit={this.props.onSubmit}>
					<div className="form-group">
						<label htmlFor="name">First Name</label>
						<input
							onChange={this.props.onChange}
							className="form-control"
							type="text"
							placeholder="pepe"
							id="name"
							name="firstName"
							value={this.props.formValues.firstName}
						/>
						<label htmlFor="Lastname">Last Name</label>
						<input
							onChange={this.props.onChange}
							className="form-control"
							type="text"
							placeholder="el Mago"
							id="Lastname"
							name="lastName"
							value={this.props.formValues.lastName}
						/>
						<hr />
						<label htmlFor="email">Email</label>
						<input
							onChange={this.props.onChange}
							className="form-control"
							type="text"
							placeholder="pepeelmago@gmail.com"
							id="email"
							name="email"
							value={this.props.formValues.email}
						/>
						<label htmlFor="job">Job Title</label>
						<input
							onChange={this.props.onChange}
							className="form-control"
							type="text"
							placeholder="youtuber"
							id="job"
							name="jobTitle"
							value={this.props.formValues.jobTitle}
						/>
						<label htmlFor="twitter">Twitter</label>
						<input
							onChange={this.props.onChange}
							className="form-control"
							type="text"
							placeholder="@pepeMago"
							id="twitter"
							name="twitter"
							value={this.props.formValues.twitter}
						/>
					</div>
					<button
						name="profilePicture"
						onClick={this.handleClick}
						type="button"
						className="btn btn-primary justCenter"
					>
						<img src="" alt="icon" />
						<p>Profile picture uploaded</p>
					</button>
					<br />
					<input type="checkbox" />
					<span className="container-fluid">
						I accept the
						<a href="/"> terms of service </a>
						and the
						<a href="/"> privacy policy </a>
					</span>
					<br />
					<Link
						to="/badges/"
						name="save"
						onClick={this.handleClick}
						className="btn btn-primary justCenter"
					>
						Save
					</Link>
				</form>
			</section>
		);
	}
}

export default BadgeForm;
