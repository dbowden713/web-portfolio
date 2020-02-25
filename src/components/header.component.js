import React from 'react';
import './header.style.scss';

export default class Header extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            <div className="header">
                <div className="ribbon"></div>
                <div className="nameBox">Timothy Daniel Bowden</div>
                <ul className="menuItems">
                    <li className="menuItem">Projects</li>
                    <li className="menuItem">Resume</li>
                    <li className="menuItem">GitHub</li>
                </ul>
            </div>
        );
    }
}