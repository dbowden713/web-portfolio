import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./home-bootstrap.style.scss";

export default class Home extends React.Component {
	constructor() {
		super();

		this.state = {};
	}

	render() {
		return (
			<div>
				<div className="background"></div>
				<Container>
					<Row className="nameRow">
						<Col
							xs={{ size: 10, offset: 1 }}
							sm={{ size: 8, offset: 2 }}
							className="text-center"
						>
							<h1 className="name p-3">Timothy Daniel Bowden</h1>
						</Col>
					</Row>
					<Row className="justify-content-center mt-5">
						<Col xs="6" md="3">
							<Link to="/projects">
								<Button block className="mt-3">
									View My Projects
								</Button>
							</Link>
							<Link to="/resume">
								<Button block className="mt-3">
									See Resume
								</Button>
							</Link>
							<a href="https://github.com/dbowden713">
								<Button block className="mt-3">
									GitHub
								</Button>
							</a>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
