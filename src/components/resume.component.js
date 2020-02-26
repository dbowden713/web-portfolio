import React from "react";
import Header from "./header-bootstrap.component";

export default class Resume extends React.Component {
	constructor() {
		super();

		this.state = {};
	}

	render() {
		return (
			<div>
				<Header active="resume" />
			</div>
		);
	}
}
