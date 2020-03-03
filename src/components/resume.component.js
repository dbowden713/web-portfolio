import React from "react";
import { Container, Row, Col, Button, Alert } from "reactstrap";
import Header from "./header-bootstrap.component";
import "./resume.style.scss";
import ResumeInfo from "./resume-info";
import ResumeSection from "./resume-section.component";

export default class Resume extends React.Component {
	constructor() {
		super();

		this.state = {};
	}

	render() {
		return (
			<div>
				<Header active="resume" />
				<Container>
					<Row className="justify-content-around mb-4 mt-5">
						<a href="https://www.dropbox.com/s/fol9y4aw6830all/Resume_TDB_public.docx?dl=0">
							<Button size="lg">Download (.docx)</Button>
						</a>
						<a href="https://www.dropbox.com/s/7vk9mhidrrpkbh3/Resume_TDB_public.pdf?dl=0">
							<Button size="lg">Download (.pdf)</Button>
						</a>
					</Row>
					{ResumeInfo.map((section, index) => {
						return (
							<ResumeSection
								header={section.header}
								text={section.text}
								key={index}
							/>
						);
					})}
					<Row className="bottom-bar mt-3"></Row>
					<Row className="mt-3 mb-5 resumeNote">
						<Col className="text-center">
							*Additional classes to full CS curriculum.
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
