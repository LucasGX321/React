import React from "react";
import "./styles/BadgeNew.css";
import Badge from "../components/Badge.jsx";
import BadgeForm from "../components/BadgeForm.jsx";
import header from "../images/badge-header.svg";

class BadgeNew extends React.Component {
	state = {
		form: {
			firstName: "",
			lastName: "",
			email: "",
			jobTitle: "",
			twitter: "",
		},
	};
	handleChange = (e) => {
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value,
			},
		});
	};

	render() {
		return (
			<React.Fragment>
				<div className="container-fluid BadgeNew__hero">
					<img className="img-fluid" src={header} alt="Logo" />
				</div>
				<div className="container">
					<div className="row">
						<div className="col">
							<Badge
								firstName={this.state.form.firstName}
								lastName={this.state.form.lastName}
								avatarUrl={
									"https://www.gravatar.com/avatar/" +
									`${this.state.form.email}`
								}
								description={this.state.form.jobTitle}
								twitter={this.state.form.twitter}
							></Badge>
						</div>
						<div className="col-6">
							<BadgeForm
								onChange={this.handleChange}
								formValues={this.state.form}
							/>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default BadgeNew;
