import React from 'react';
import { Link } from 'react-router-dom';
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
                <div className="nameBox">
                    <Link to="/">
                        Timothy Daniel Bowden    
                    </Link>
                </div>
                <ul className="menuItems">
                    <li className="menuItem">
                        <Link to="/projects">
                            Projects
                        </Link>
                    </li>
                    <li className="menuItem">
                        <Link to="/resume">
                            Resume
                        </Link>
                    </li>
                    <li className="menuItem">
                        <a href="https://github.com/dbowden713">
                            GitHub
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}