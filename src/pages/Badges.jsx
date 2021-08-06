import React from "react";
import "./styles/Badges.css";
import confLogo from "../images/platziconf-logo.svg";
import BadgesList from "../components/BadgesList.jsx";
import PageLoading from "./PageLoading.jsx";
import PageError from "./PageError.jsx";
import BadgesAdd from "../components/BadgesAdd.js";
import { Link } from "react-router-dom";

class Badges extends React.Component {
	state = {
		nextPage: 1,
		loading: true,
		error: false,
		data: [],
	};
	handleChange = (e) => {
		this.setState({
			form: {
				[e.target.name]: e.target.value,
			},
		});
	};

	componentDidMount() {
		const newAdd = BadgesAdd(null);
		// console.log("valor en upd", newAdd);
		if (newAdd.firstName === "") {
		} else {
			this.state.data.unshift(newAdd);
		}
		this.fetchUsers();
	}

	fetchUsers = async () => {
		this.setState({ loading: true, error: null });
		try {
			const response = await fetch(
				`https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`
			);
			const data = await response.json();
			for (const character of data.results) {
				this.state.data.push({
					id: character.id,
					firstName: character.name,
					lastName: null,
					email: `${character.name}@gmail.com`,
					jobTitle: character.origin.name,
					twitter: `${character.name}`,
					avatarUrl: character.image,
				});
			}
			this.setState({
				loading: false,
				nextPage: this.state.nextPage + 1,
			});
		} catch (e) {
			this.setState({
				loading: false,
				error: e,
			});
		}
	};

	btnClicked = (e) => {
		e.preventDefault();
		this.fetchUsers();
	};

	render() {
		if (this.state.loading === true) {
			return <PageLoading />;
		}
		if (this.state.error) {
			return <PageError error={this.state.error.message} />;
		}
		return (
			<div className="Badges">
				<div className="Badges__hero">
					<div className="Badges__container">
						<img
							className="Badges_conf-logo"
							src={confLogo}
							alt="Conf logo"
						/>
						<form>
							<div className="row">
								<input
									onChange={this.handleChange}
									className="form-control"
									type="text"
									placeholder="search"
									id="name"
									name="toSearch"
								/>
								<button className="btn btn-secondary">
									<img src="/" alt="lupa" />
								</button>
							</div>
						</form>
					</div>
				</div>
				<div className="Badges__container">
					<div className="Badges__buttons">
						<Link to="/badges/new" className="btn btn-primary">
							New Badge
						</Link>
					</div>
					<BadgesList badges={this.state.data} />
					<button
						className="btn btn-primary"
						onClick={this.btnClicked}
					>
						New Page
					</button>
				</div>
			</div>
		);
	}
}

export default Badges;
