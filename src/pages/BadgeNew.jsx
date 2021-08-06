import React from "react";
import "./styles/BadgeNew.css";
import Badge from "../components/Badge.jsx";
import BadgeForm from "../components/BadgeForm.jsx";
import header from "../images/platziconf-logo.svg";
import PageLoading from "./PageLoading.jsx";
import PageError from "./PageError.jsx";
import BadgesAdd from "../components/BadgesAdd.js";

class BadgeNew extends React.Component {
	state = {
		loading: false,
		error: null,
		form: {
			firstName: "",
			lastName: "",
			email: "",
			jobTitle: "",
			twitter: "",
			avatarUrl: "",
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

	componentWillUnmount() {
		console.log("Form was submitted");
		this.setState({ loading: true, error: null });
		try {
			const response = JSON.stringify(this.state.form);
			// console.log(`response ${response}`);
			BadgesAdd(response);
			this.setState({ loading: false });
		} catch (e) {
			console.log(e);
			this.setState({ loading: false, error: null });
		}
	}

	render() {
		if (this.state.error) return <PageError />;
		if (this.state.loading) return <PageLoading />;
		return (
			<React.Fragment>
				<div className="container-fluid BadgeNew__hero justCenter">
					<img
						className="BadgeNew__hero-img"
						src={header}
						alt="Logo"
					/>
				</div>
				<div className="container">
					<div className="row">
						<div className="col">
							<Badge
								firstName={
									this.state.form.firstName || "Your name"
								}
								lastName={
									this.state.form.lastName || "Your lastname"
								}
								email={this.state.form.email}
								description={
									this.state.form.jobTitle || "Your job"
								}
								twitter={this.state.form.twitter || "twitter"}
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
