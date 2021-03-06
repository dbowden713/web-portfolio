import React from "react";
import "bootstrap";
import "./app.style.scss";
import { HashRouter as Router, Link, Switch, Route } from "react-router-dom";
import ProjectList from "./project-list.component";
import Resume from "./resume.component";
import Home from "./home-bootstrap.component";

export default class App extends React.Component {
	constructor() {
		super();

		this.state = {};
	}

	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/projects" component={ProjectList} />
					<Route path="/resume" component={Resume} />
				</Switch>
			</Router>
		);
	}
}

/*
return this.state.projectList.map((project, index) => {
            return (
                <Project 
                    name={project.name}
                    description={project.description}
                    image={project.image}
                    languages={project.languages}
                    links={project.links}
                    key={index}
                />
            );
        })
*/
