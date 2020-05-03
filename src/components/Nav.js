import React from 'react';
import PropTypes from 'prop-types';

import { Navbar, NavbarBrand, Button } from 'reactstrap';

const NavBar = (props) => {
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
		backgroundColor: '#2f2fa2',
		fontSize: '1.5em',
		fontWeight: 'bold'
	};
	const highlightStyles = {
		color: '#F64C72',
		borderColor: '#F64C72',
		fontWeight: 'bold',
		// height: '3.5em',
		// width: '7em',
		fontSize: '1em'
	};
	return (
		<div>
			<Navbar style={navStyles} light expand="md">
				<center>
					<NavbarBrand style={textStyles} href="/">
						Palatable Pie Pantry{' '}
					</NavbarBrand>
				</center>
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
