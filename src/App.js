import React from "react";
import { render } from "react-dom";

import { Router } from "@reach/router";
import { Details } from "./Details";
import { SearchParams } from "./SearchParams";

const App = () => (
	<div>
		<h1 id="something-important">Adopt Me!</h1>
		<Router>
			<SearchParams path="/"/>
			<Details path="/details/:id"/>
		</Router>
	</div>
);

render(<App/>, document.getElementById("root"));
