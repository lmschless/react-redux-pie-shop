import React, { Component } from 'react';
import NavBar from './Nav';

export default class Header extends Component {
	state = {
		count: 0
	};
	render() {
		const headerStyles = {
			// height: '5em',
			// paddingBottom: '8em',
			borderBottom: '3px solid white',
			borderColor: '#F64C72'
			// textAlign: 'center'
		};
		return (
			<React.Fragment>
				<header style={headerStyles}>
					<NavBar />
				</header>
			</React.Fragment>
		);
	}
}
