import React from 'react';
import Project from './project.component';
import Home from './home.component';
import projectList from './project-list';

export default class App extends React.Component {
    constructor() {
        super();

        this.state= {projectList: projectList};
    }

    render() {
        return <Home />
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