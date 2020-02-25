import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Project from './project.component';
import ProjectList from './projectList.component';
import Home from './home.component';
import projectList from './project-list';

export default class App extends React.Component {
    constructor() {
        super();

        this.state= {projectList: projectList};
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/projects">
                        <ProjectList />    
                    </Route> 
                    <Route path="/">
                        <Home />    
                    </Route>   
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