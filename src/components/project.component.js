import React from 'react';

export default class Project extends React.Component {
    constructor() {
        super();

        this.state = {
            name: "",
            description: ""
        }
    }
    render() {
        return(
            <div>Project Page</div>
        );
    }
}