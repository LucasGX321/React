import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout";
import BadgeNew from "../pages/BadgeNew";
import Main from "../pages/Main";
import Badges from "../pages/Badges";
import PageError from "../pages/PageError";
import BadgeDetails from "./BadgeDetails";
import BadgeEdit from "../pages/BadgeEdit";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Main}></Route>
					<Route exact path="/badges" component={Badges}></Route>
					<Route
						exact
						path="/badges/new"
						component={BadgeNew}
					></Route>
					<Route
						exact
						path="/badges/:badgeId"
						component={BadgeDetails}
					/>
					<Route
						exact
						path="/badges/:badgeId/edit"
						component={BadgeEdit}
					/>
					<Route path="/pepe" component={PageError}></Route>
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
