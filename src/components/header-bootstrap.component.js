import React from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText
} from "reactstrap";
import { Link } from "react-router-dom";
import "./header-bootstrap.style.scss";

export default class Header extends React.Component {
	constructor(props) {
		super();

		this.state = {
			isOpen: false,
			active: props.active
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<div className="header">
				<Navbar color="dark" dark expand="sm">
					<NavbarBrand to="/" tag={Link}>
						Timothy Daniel Bowden
					</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="mr-auto" navbar>
							<NavItem>
								<NavLink
									active={this.state.active == "projects"}
									tag={Link}
									to="/projects"
								>
									Projects
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									active={this.state.active == "resume"}
									tag={Link}
									to="/resume"
								>
									Resume
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="https://github.com/dbowden713">
									GitHub
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}
