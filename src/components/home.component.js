import React from 'react';
import './home.style.scss';

const nameBox = <span id="nameBox">Timothy Daniel Bowden</span>;
const navLinks = (
    <ul className="navLinks">
        <li className="navLink"><a href="./projects.html">Projects</a></li>
        <li className="navLink"><a href="./resume.html">Resume</a></li>
        <li className="navLink"><a href="./github.html">GitHub</a></li>
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