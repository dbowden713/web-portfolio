import React from "react";
import { Row, Col } from "reactstrap";
import "./resume-section.style.scss";

export default class ResumeSection extends React.Component {
	constructor(props) {
		super();

		this.state = {
			header: props.header,
			text: props.text
		};

		this.sectionText = this.sectionText.bind(this);
	}

	sectionText(text) {
		// Some sections may not have a text array/object
		if (typeof text === "object")
			return text.map((line, index) => {
				if (typeof line === "string") {
					return (
						<Row key={index} className="resumeText">
							<Col xs={{ size: 10, offset: 1 }}>{line}</Col>
						</Row>
					);
				} else if (typeof line === "object") {
					return (
						<Row key={index} className="resumeText">
							<Col xs="6" className="leftText mb-1">
								{line.left}
							</Col>
							<Col xs="6" className="text-right rightText">
								{line.right}
							</Col>
						</Row>
					);
				}
			});
	}

	render() {
		return (
			<div>
				<Row className="mb-3">
					<Col xs="4" sm="4" md="5" className="bar"></Col>
					<Col xs="4" sm="4" md="2" className="resumeHeader mt-4">
						{this.state.header}
					</Col>
					<Col xs="4" sm="4" md="5" className="bar"></Col>
				</Row>
				{this.sectionText(this.state.text)}
			</div>
		);
	}
}
