import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../container';
import './styles.scss';

const Navbar = () => {
	const [navbarCollapsed, setNavbarCollapsed] = useState(true);

	const toggleNavbar = () => {
		setNavbarCollapsed(!navbarCollapsed);
	};

	return (
		<nav
			className="navbar is-black"
			role="navigation"
			aria-label="main navigation"
		>
			<Container>
				<div className="navbar-brand">
					{/* eslint-disable-next-line */}
					<a
						role="button"
						className={`navbar-burger ${
							navbarCollapsed ? '' : 'is-active'
						}`}
						aria-label="menu"
						aria-expanded="false"
						onClick={toggleNavbar}
					>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>
				<div
					className={`navbar-menu ${
						navbarCollapsed ? '' : 'is-active'
					}`}
				>
					<div className="navbar-start">
						<NavLink
							to="/overview"
							className="navbar-item"
							activeClassName="active"
						>
							Overview
						</NavLink>
						<NavLink
							to="/states"
							className="navbar-item"
							activeClassName="active"
						>
							States
						</NavLink>
						<NavLink
							to="/countries"
							className="navbar-item"
							activeClassName="active"
						>
							Countries
						</NavLink>
						<NavLink
							to="/world"
							className="navbar-item"
							activeClassName="active"
						>
							World
						</NavLink>
					</div>
					<div className="navbar-end"></div>
				</div>
			</Container>
		</nav>
	);
};

export default Navbar;
