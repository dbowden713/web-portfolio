import React from "react";
import Header from "./header-bootstrap.component";
import ProjectCard from "./project-card.component";
import ProjectJSON from "./project-list";
import { Alert, Container, Row, Col } from "reactstrap";

export default class ProjectList extends React.Component {
	constructor() {
		super();

		this.state = {
			projects: ProjectJSON
		};
	}

	render() {
		return (
			<div>
				<Header active="projects" />
				<Container>
					<Row>
						<Col>
							<Alert color="primary">
								Project pages are still being added. If a
								project doesn't have a page yet, check out the
								GitHub repository!
							</Alert>
						</Col>
					</Row>
					<Row>
						{this.state.projects.map((project, index) => {
							return (
								<Col xs="12" sm="6" lg="4" xl="3">
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
