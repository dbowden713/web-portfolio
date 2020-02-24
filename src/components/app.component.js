import React from 'react';
import Home from './home.component';

export default class App extends React.Component {
    constructor() {
        super();

        this.state= {};
    }

    render() {
        return (
            <Home />
        );
    }
}