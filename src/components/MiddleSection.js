import React, { Component } from 'react';
import ProfileBadge from './ProfileBadge';

export default class MiddleSection extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const topCard = {
			gridArea: ' 1 / 3 / 2 / 4',
			padding: '.5em'
		};
		return (
			<React.Fragment>
				<div style={topCard}>
					<ProfileBadge />
					<ProfileBadge />
				</div>
			</React.Fragment>
		);
	}
}
