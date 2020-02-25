import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './home.style.scss';

const nameBox = <span id="nameBox">Timothy Daniel Bowden</span>;
const navLinks = (
        <ul className="navLinks">
            <li className="navLink"><Link to="/projects">Projects</Link></li>
            <li className="navLink"><Link to="/projects">Resume</Link></li>
            <li className="navLink"><a href="https://github.com/dbowden713">Github</a></li>
        </ul>
);

export default class Home extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            <div id="home">
                <div className="content">
                    {nameBox}
                    {navLinks}
                </div>
            </div>
        );
    }
}