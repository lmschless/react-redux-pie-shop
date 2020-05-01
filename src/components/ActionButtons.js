import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

export default class ActionButtons extends Component {
	constructor(props) {
		super(props);

		this.state = {
			followText: 'Follow!',
			likeText: 'Like!',
			shareText: 'Share!',
			active: false
		};
	}

	handleClick = () => {
		let outLine = null;
		const testStyles = {
			opacity: '.65'
		};
		const testStyles2 = {
			opacity: '100'
		};
		if (!this.state.active) {
			this.setState({
				followText: 'Unfollow',
				active: true
			});
			outLine = testStyles;
		} else {
			this.setState({
				followText: 'Follow!',
				active: !this.state.active
			});
			outLine = testStyles2;
		}
	};

	render(outLine) {
		return (
			<React.Fragment>
				<center>
					<ButtonGroup>
						<Button
							onClick={this.handleClick}
							style={outLine}
							color="success"
							// style={this.state.active ? { testStyles } : null}
						>
							{this.state.followText}
						</Button>

						<Button color="danger">Like!</Button>

						<Button color="info">Share!</Button>
					</ButtonGroup>
				</center>
			</React.Fragment>
		);
	}
}
