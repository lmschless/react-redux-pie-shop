import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import ActionButtons from './ActionButtons';
const Example = (props) => {
	const profileStyles = {
		backgroundColor: '#FFFFFF',
		borderRadius: '1.5em',
		padding: '2em'
	};
	return (
		<React.Fragment>
			<Card style={profileStyles} body>
				<CardTitle>User Profile Card</CardTitle>
				<CardText>
					React was originally developed by Facebook to manage the dynamic,
					complex needs of a large social media app. After observing Facebook's
					success, many other social media applications.
				</CardText>
				<ActionButtons />
			</Card>
		</React.Fragment>
	);
};

export default Example;
