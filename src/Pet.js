import { createElement } from "react";

export default ({name, animal, breed}) => (
	createElement("div", {}, [
		createElement("h1", {}, name),
		createElement("h1", {}, animal),
		createElement("h1", {}, breed),
	])
)