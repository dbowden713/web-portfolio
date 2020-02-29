import React from "react";
import { Container, Row, Col, Button, Alert } from "reactstrap";
import Header from "./header-bootstrap.component";
import "./resume.style.scss";

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
					<Row>
						<Col>
							<Alert
								color="primary"
								isOpen={this.state.alertIsOpen}
								toggle={this.toggleAlert}
							>
								View my resume online here soon! Download links
								are available below.
							</Alert>
						</Col>
					</Row>
					<Row className="justify-content-around">
						<a href="https://www.dropbox.com/s/fol9y4aw6830all/Resume_TDB_public.docx?dl=0">
							<Button size="lg">Download (.docx)</Button>
						</a>
						<a href="https://www.dropbox.com/s/7vk9mhidrrpkbh3/Resume_TDB_public.pdf?dl=0">
							<Button size="lg">Download (.pdf)</Button>
						</a>
					</Row>
				</Container>
			</div>
		);
	}
}
