import React from "react";
import { render } from "react-dom";

import { Pet } from "./Pet";

const App = () => (
	<div>
		<h1>Adopt Me!</h1>
		<Pet name="Bob" animal="Party Animal" breed="Caucasian" />
		<Pet name="Luna" animal="Dog" breed="Havanese" />
	</div>
);

render(<App/>, document.getElementById("root"));
