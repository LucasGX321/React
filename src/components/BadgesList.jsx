import React from "react";
import "./styles/BadgesList.css";

class BadgesList extends React.Component {
	render() {
		return (
			<div className="BadgesList">
				<div className="Badges__container">
					<ul className="list-unstyled">
						{this.props.badges.map((Badge) => {
							return (
								<li className="BadgesListItem" key={Badge.id}>
									<img
										className="BadgesListItem__avatar"
										src={Badge.avatarUrl}
										alt="avatar"
									/>
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
