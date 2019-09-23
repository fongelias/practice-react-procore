import { createElement } from "react";
import { render } from "react-dom";

import Pet from "./Pet";

const App = () => (
	createElement(
		"div",
		{
			id: "something-important"
		},
		createElement("h1", {}, "Adopt Me!"),
		Pet({
			name: "Bob",
			animal: "Party Animal",
			breed: "Caucasian"
		}),
		createElement(Pet, {
			name: "Luna",
			animal: "Dog",
			breed: "Havanese"
		})
	)
);

render(createElement(App), document.getElementById("root"))