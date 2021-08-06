import React from "react";
import Gravatar from "./Gravatar.jsx";
import "./styles/BadgesList.css";

class BadgesList extends React.Component {
	whichImg = (props) => {
		if (props.avatarUrl === "") {
			return (
				<Gravatar
					className="BadgesListItem__avatar"
					email={props.email}
				/>
			);
		} else {
			return (
				<img
					className="BadgesListItem__avatar"
					src={props.avatarUrl}
					alt="avatar"
				/>
			);
		}
	};

	render() {
		return (
			<div className="BadgesList">
				<div className="Badges__container">
					<ul className="list-unstyled">
						{this.props.badges.map((Badge) => {
							return (
								<li className="BadgesListItem" key={Badge.id}>
									{this.whichImg(Badge)}
									<div className="col">
										<div>
											<strong>
												{Badge.firstName}{" "}
												{Badge.lastName}
											</strong>
										</div>
										<div className="Twitter__name">
											<a
												href={
													"https://www.twitter.com/@" +
													Badge.twitter
												}
											>
												@{Badge.twitter}
											</a>
										</div>
										{Badge.jobTitle}
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}

export default BadgesList;
