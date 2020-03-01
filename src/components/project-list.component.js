import React from "react";
import Header from "./header-bootstrap.component";
import ProjectCard from "./project-card.component";
import ProjectJSON from "./project-list";
import { Alert, Container, Row, Col, Jumbotron } from "reactstrap";
import "./project-list.style.scss";

export default class ProjectList extends React.Component {
	constructor() {
		super();

		this.state = {
			projects: ProjectJSON,
			alertIsOpen: true
		};

		this.toggleAlert = this.toggleAlert.bind(this);
	}

	toggleAlert() {
		this.setState({
			alertIsOpen: !this.state.alertIsOpen
		});
	}

	render() {
		return (
			<div>
				<Header active="projects" />
				<Container fluid style={{ padding: "0" }} className="heroBar">
					<Jumbotron>
						<Container>
							<h1 className="display-3">My Work</h1>
							<p className="lead">
								A collection of my projects and code snippets.
							</p>
						</Container>
					</Jumbotron>
				</Container>
				<Container>
					<Row>
						<Col>
							<Alert
								color="primary"
								isOpen={this.state.alertIsOpen}
								toggle={this.toggleAlert}
							>
								Project pages are still being added. If a
								project doesn't have a page yet, check out the
								GitHub repository!
							</Alert>
						</Col>
					</Row>
					<Row className="">
						{this.state.projects.map((project, index) => {
							return (
								<Col
									xs={{ size: 10, offset: 1 }}
									sm={{ size: 6, offset: 0 }}
									md={{ size: 6, offset: 0 }}
									lg="4"
									xl="3"
									key={index}
									className="p-3"
								>
									<ProjectCard
										name={project.name}
										description={project.description}
										image={project.image}
										languages={project.languages}
										links={project.links}
										key={index}
									/>
								</Col>
							);
						})}
					</Row>
				</Container>
			</div>
		);
	}
}
