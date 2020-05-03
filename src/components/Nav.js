import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
	Button
} from 'reactstrap';

const NavBar = (props) => {
	// const loginClick = () => {};
	const [ isOpen, setIsOpen ] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const navStyles = {
		backgroundColor: '#2f2fa2',
		height: '7vh',
		paddingBottom: '5em',
		paddingTop: '2.5em',
		paddingLeft: '10em',
		paddingRight: '10em',
		borderBottom: '3px solid white',
		borderColor: '#F64C72'
	};
	const textStyles = {
		color: 'white',
		backgroundColor: '#2f2fa2'
	};
	const highlightStyles = {
		color: '#F64C72',
		borderColor: '#F64C72',
		fontWeight: 'bold',
		// height: '3.5em',
		// width: '7em',
		fontSize: '1.5em'
	};
	return (
		<div>
			<Navbar style={navStyles} light expand="md">
				<center>
					<NavbarBrand style={textStyles} href="/">
						Palatable Pie Pantry{' '}
					</NavbarBrand>
				</center>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<UncontrolledDropdown style={textStyles} nav inNavbar>
							<DropdownToggle style={textStyles} nav caret>
								Settings
							</DropdownToggle>
							<DropdownMenu right style={textStyles}>
								<DropdownItem style={textStyles}>Privacy</DropdownItem>
								<DropdownItem style={textStyles}>Reset Password</DropdownItem>
								<DropdownItem divider />
								<DropdownItem style={textStyles}>Reset</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Collapse>
				<Button
					onClick={() => {
						props.onForm();
					}}
					style={highlightStyles}
					outline
				>
					Add New Pie
				</Button>
			</Navbar>
		</div>
	);
};

NavBar.propTypes = {
	onForm: PropTypes.func
};

export default NavBar;
