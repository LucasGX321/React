import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout";
import BadgeNew from "../pages/BadgeNew";
import Main from "../pages/Main";
import Badges from "../pages/Badges";
import Error404Page from "../pages/Error404Page";

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
					<Route path="/pepe" component={Error404Page}></Route>
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
