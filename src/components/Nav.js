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
		borderBottom: '3px solid',
		borderColor: '#F64C72'
	};
	const textStyles = {
		marginLeft: '10vw',
		marginRight: '2vw',
		color: 'white',
		backgroundColor: '#2f2fa2',
		fontSize: '1.5em',
		fontWeight: 'bold'
	};
	const highlightStyles = {
		color: '#F64C72',
		borderColor: '#F64C72',
		fontWeight: 'bold',
		fontSize: '1em'
	};
	return (
		<div>
			<Navbar style={navStyles} light expand="md">
				<NavbarBrand style={textStyles} href="/">
					<h2>Palatable Pie Pantry</h2>
				</NavbarBrand>
				<Button
					onClick={() => {
						props.onForm();
					}}
					style={highlightStyles}
					outline
				>
					Submit Pie Order Form
				</Button>
			</Navbar>
		</div>
	);
};

NavBar.propTypes = {
	onForm: PropTypes.func
};

export default NavBar;
